import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from '@libs/kafka';

@Module({
  imports: [KafkaModule.register({ brokers: ['hello:1234'] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
