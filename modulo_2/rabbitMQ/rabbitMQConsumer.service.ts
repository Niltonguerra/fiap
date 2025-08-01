import { Injectable, Logger } from '@nestjs/common';
import { RabbitSubscribe, RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { EmailMessage, TestMessage } from './rabbitMQPublisher.service';

@Injectable()
export class RabbitMQConsumerService {
  private readonly logger = new Logger(RabbitMQConsumerService.name);

  @RabbitSubscribe({
    exchange: 'test_exchange',
    routingKey: 'test.message',
    queue: 'test_queue',
    queueOptions: {
      durable: true,
    },
  })
  async handleTestMessage(message: TestMessage) {
    this.logger.log(`Mensagem de teste recebida: ${JSON.stringify(message)}`);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.logger.log(`Mensagem processada com sucesso: ${message.id}`);
    } catch (error) {
      this.logger.error(`Erro ao processar mensagem de teste: ${error}`);
      throw error; // Rejeita a mensagem
    }
  }

  @RabbitSubscribe({
    exchange: 'email_exchange',
    routingKey: 'email.validation',
    queue: 'email_validation_queue',
    queueOptions: {
      durable: true,
    },
  })
  async handleEmailValidation(message: EmailMessage) {
    this.logger.log(`Email de validação recebido para: ${message.email}`);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      this.logger.log(`Email enviado com sucesso para: ${message.email}`);
    } catch (error) {
      this.logger.error(`Erro ao enviar email: ${error}`);
      throw error;
    }
  }

  @RabbitRPC({
    exchange: 'test_exchange',
    routingKey: 'test.rpc',
    queue: 'test_rpc_queue',
  })
  async handleRPCMessage(message: { message: string; timestamp: number }) {
    this.logger.log(`RPC recebido: ${JSON.stringify(message)}`);

    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      success: true,
      originalMessage: message.message,
      processedAt: Date.now(),
      response: `Mensagem '${message.message}' processada com sucesso!`,
    };
  }
}
