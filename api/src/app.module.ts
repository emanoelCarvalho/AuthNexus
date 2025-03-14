import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './config/database/database.module';
import { SwaggerModuleConfig } from './config/swagger/swagger.module';
import { RedisModule } from './redis/redis.module';
import { EnvModule } from './config/env/EnvModule';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    EnvModule,
    UsersModule,
    AuthModule,
    DatabaseModule,
    SwaggerModuleConfig,
    RedisModule,
    LoggerModule
  ],
})
export class AppModule {}
