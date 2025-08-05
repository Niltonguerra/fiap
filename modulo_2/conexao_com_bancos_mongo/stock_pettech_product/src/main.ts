import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExpectionFilter } from './shared/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExpectionFilter());
  await app.listen(Number(process.env.PORT || 3000));
}
bootstrap();
