import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { EnvModule } from 'src/config/env/EnvModule';
import { JwtModule } from '@nestjs/jwt';
import { EnvService } from 'src/config/env/EnvService';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    EnvModule,
    JwtModule.registerAsync({
      imports: [EnvModule],
      useFactory: async (configService: EnvService) => ({
        secret: configService.getJwtSecret,
        signOptions: { expiresIn: '60s' },
      }),
      inject: [EnvService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModule {}
