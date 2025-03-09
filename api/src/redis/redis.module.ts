import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import { EnvModule } from 'src/config/env/EnvModule';
import { EnvService } from 'src/config/env/EnvService';
@Module({
  imports: [EnvModule],
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: async (configService: EnvService) => {
        const client = createClient({
          url: configService.getRedisUrl,
        });

        client.on('error', (err) => console.error('Redis Client Error', err));
        await client.connect();
        return client;
      },
      inject: [EnvService],
    },
  ],
})
export class RedisModule {}
