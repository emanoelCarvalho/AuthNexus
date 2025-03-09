import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { RedisClientType } from 'redis';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject('REDIS_CLIENT') private redisClient: RedisClientType,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const user = await this.validateUser(email, password);

    const token = await this.generateToken({
      id: user.id.toString(),
      email: user.email,
    });

    const refreshToken = randomUUID();

    await this.redisClient.setEx(`refresh:${refreshToken}`, 604800, user.id.toString());

    return { access_token: token, refresh_token: refreshToken };
  }

  private async generateToken(user: {
    id: string;
    email: string;
  }): Promise<string> {
    const payload = { sub: user.id, email: user.email };
    return this.jwtService.signAsync(payload);
  }

  async refreshToken(refreshToken: string): Promise<{ access_token: string }> {
    const userId = await this.redisClient.get(`refresh:${refreshToken}`);

    if (!userId) {
      throw new UnauthorizedException('Invalid refresh token or expired');
    }

    const user = await this.usersService.findById(Number(userId));
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const newAccessToken = await this.generateToken({
      id: user.id.toString(),
      email: user.email,
    });

    return { access_token: newAccessToken };
  }

  async signOut(refreshToken: string): Promise<void> {
    await this.redisClient.del(`refresh:${refreshToken}`);
  }
  
  private async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
