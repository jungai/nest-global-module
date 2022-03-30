import { Injectable } from '@nestjs/common';
import { KafkaModuleConfig } from './kafka.module';

@Injectable()
export class KafkaService {
	private readonly config: KafkaModuleConfig;

	constructor(config: KafkaModuleConfig) {
		this.config = config;
	}

	producer() {
		console.log(`produce something cool with broker -> ${this.config.brokers}`);
	}
}
