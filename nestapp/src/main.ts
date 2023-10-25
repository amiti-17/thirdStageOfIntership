import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { RedirectFilter } from './CustomError/RedirectError';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new RedirectFilter());
  app.enableCors({ origin: true, credentials: true });
  app.use(cookieParser());
  await app.listen(8080);
}
bootstrap();
