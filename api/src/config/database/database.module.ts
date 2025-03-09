import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvModule } from 'src/config/env/EnvModule';
import { EnvService } from 'src/config/env/EnvService';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvModule],
      useFactory: async (configService: EnvService) => ({
        type: 'postgres',
        host: configService.getDbHost,
        port: configService.getDbPort,
        url: configService.getDbUrl,
        entities: [User],
        synchronize: true,
      }),
      inject: [EnvService],
    }),
  ],
})
export class DatabaseModule {}
