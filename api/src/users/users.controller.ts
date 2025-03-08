import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso.',
    schema: {
      example: {
        id: 1,
        name: 'João da Silva',
        email: 'usuario@exemplo.com',
        password: 'senha_do_usuario',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Requisição inválida. Validações falharam.',
    schema: {
      example: {
        statusCode: 400,
        message: ['Email must be a valid email address.'],
        error: 'Bad Request',
      },
    },
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
