import { Injectable, OnModuleInit } from '@nestjs/common';
import { PulsarClient, PulsarConsumer } from '@jobber/pulsar';
import { Message } from 'pulsar-client';
@Injectable()
export class FibonacciConsumer extends PulsarConsumer implements OnModuleInit {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient, 'Fibnonacci');
  }

  protected async onMessage(message: Message): Promise<void> {
    console.log('FibonacciConsumer.onMessage');
    await this.acknowledge(message);
  }
}
