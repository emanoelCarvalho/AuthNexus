import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AppConfigService } from 'src/config/env/EnvService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly configService: AppConfigService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    await this.validateEmail(createUserDto.email);
    const hashedPassword = await this.hashPassword(createUserDto.password);

    const user = this.repository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    const newUser = await this.repository.save(user);
    delete newUser.password;
    return newUser;
  }

  private async validateEmail(email: string): Promise<void> {
    const user = await this.repository.findOne({ where: { email } });

    if (user) {
      throw new Error('Email already in use');
    }
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = await this.getSaltRounds();
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }

  private async getSaltRounds(): Promise<number> {
    return this.configService.getSaltRounds;
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ where: { email } });
  }
}
