import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from 'src/config/env/EnvModule';
import { AppConfigService } from 'src/config/env/EnvService';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: async (configService: AppConfigService) => ({
        type: 'postgres',
        host: configService.getDbHost,
        port: configService.getDbPort,
        // username: configService.getDbUsername,
        // password: configService.getDbPassword,
        // database: configService.getDbName,
        url: configService.getDbUrl,
        entities: [User],
        synchronize: true,
      }),
      inject: [AppConfigService],
    }),
  ],
})
export class DatabaseModule {}
