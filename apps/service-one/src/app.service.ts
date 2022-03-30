import { Injectable } from '@nestjs/common';
import { KafkaService } from '@libs/kafka';
import { Game } from '@libs/enums';

@Injectable()
export class AppService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private kafka: KafkaService) {}

  getHello(): string {
    console.log(this.kafka.producer());
    console.log('Valorant ->', Game.Valorant);

    return 'Hello World!';
  }
}
