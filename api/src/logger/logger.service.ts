import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import * as Transport from 'winston-transport';
import * as net from 'net';

class LogstashTransport extends Transport {
  private socket: net.Socket;

  constructor(opts?: Transport.TransportStreamOptions) {
    super(opts);
    this.socket = net.createConnection({ 
      host: process.env.LOGGING_HOST || 'logstash', 
      port: Number(process.env.LOGGING_PORT) || 5000 
    });
  }

  log(info: any, callback: () => void): void {
    this.socket.write(JSON.stringify(info) + '\n');
    callback();
  }
}

export class AppLogger implements LoggerService {
  private logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new LogstashTransport()],
  });

  log(message: string) {
    this.logger.info({ message });
  }

  error(message: string, trace: string) {
    this.logger.error({ message, trace });
  }

  warn(message: string) {
    this.logger.warn({ message });
  }
}
