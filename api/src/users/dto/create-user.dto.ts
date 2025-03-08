import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário.',
    example: 'João da Silva',
  })
  @IsString({ message: 'Name must be a string.' })
  name: string;

  @ApiProperty({
    description: 'Email do usuário. Deve ser um endereço válido.',
    example: 'joao.silva@exemplo.com',
  })
  @IsEmail({}, { message: 'Email must be a valid email address.' })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário. Deve conter no mínimo 8 caracteres.',
    example: 'senhaSegura123',
    minLength: 8,
  })
  @IsString({ message: 'Password must be a string.' })
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  password: string;
}
