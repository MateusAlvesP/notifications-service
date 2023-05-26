import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['clear-gator-10694-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2xlYXItZ2F0b3ItMTA2OTQknqdtAgIY3yYugDLeovyAuPn5uNiGW3zpvmqewxc',
          password:
            '9eKcbCkB_CDRYqd0hNYsdY8f_Bzeppm7ZG_qvfPmKJ4gAoudFmd7RsQNRciHrhxx7LgD0w==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
