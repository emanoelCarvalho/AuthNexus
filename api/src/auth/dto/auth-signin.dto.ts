import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthSignInDto {
  @ApiProperty({
    description: 'Email do usuário. Deve ser um endereço de email válido.',
    example: 'usuario@exemplo.com',
  })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário. Deve ter pelo menos 8 caracteres.',
    example: 'senhaSegura123',
    minLength: 8,
  })
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}
