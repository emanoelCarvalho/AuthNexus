import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './config/app-config/app-config.module';
import { DatabaseModule } from './config/database/database.module';
import { SwaggerModuleConfig } from './config/swagger/swagger.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    AppConfigModule,
    UsersModule,
    AuthModule,
    DatabaseModule,
    SwaggerModuleConfig,
    RedisModule,
  ],
})
export class AppModule {}
