import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
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

  @Post('refresh')
  @ApiBody({
    description: 'Atualiza o token de acesso',
    schema: {
      example: {
        refresh_token: 'uuid-do-refresh-token',
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Novo token de acesso gerado' })
  @ApiResponse({
    status: 401,
    description: 'Refresh token inválido ou expirado',
  })
  refreshToken(@Body('refresh_token') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }

  @Post('logout')
  @ApiBody({
    description: 'Revoga o refresh token',
    schema: {
      example: {
        refresh_token: 'uuid-do-refresh-token',
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Logout realizado com sucesso' })
  logout(@Body('refresh_token') refreshToken: string) {
    return this.authService.signOut(refreshToken);
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
  getProfile() {
    return { message: 'You have successfully accessed the protected route' };
  }
}
