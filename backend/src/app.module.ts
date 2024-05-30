import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AppGateway } from './mesas/mesa.gateway';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
