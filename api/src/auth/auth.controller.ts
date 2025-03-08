import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDto } from './dto/auth-signin.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @ApiBody({
    description: 'Dados para login',
    schema: {
      example: {
        email: 'usuario@exemplo.com',
        password: 'senha_do_usuario',
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Login realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  singIn(@Body() AuthSignInDto: AuthSignInDto) {
    return this.authService.signIn(AuthSignInDto.email, AuthSignInDto.password);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Mensagem básica de usuário logado.',
    schema: {
      example: {
        message: 'You have successfully accessed the protected route',
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  getProfile(@Body() AuthSignInDto: AuthSignInDto) {
    const message = 'You have successfully accessed the protected route';
    return { message };
  }
}
