import { Module, DynamicModule, Global } from '@nestjs/common';
import { KafkaService } from './kafka.service';

export interface KafkaModuleConfig {
	brokers: string[];
}

@Global()
@Module({})
export class KafkaModule {
	static register(options: KafkaModuleConfig): DynamicModule {
		return {
			module: KafkaModule,
			providers: [
				{
					provide: KafkaService,
					useValue: new KafkaService(options),
				},
			],
			exports: [KafkaService],
		};
	}
}

export { KafkaService };
