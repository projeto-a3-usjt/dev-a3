import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CadastrosModule } from './database/cadastros/cadastros.module';
import { AppGateway } from './database/mesas/mesa.gateway';

@Module({
  imports: [DatabaseModule, CadastrosModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
