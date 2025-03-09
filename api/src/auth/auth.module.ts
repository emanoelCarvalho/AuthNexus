import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { AppConfigModule } from 'src/config/env/EnvModule';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigService } from 'src/config/env/EnvService';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    AppConfigModule,
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      useFactory: async (configService: AppConfigService) => ({
        secret: configService.getJwtSecret,
        signOptions: { expiresIn: '60s' },
      }),
      inject: [AppConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModule {}
