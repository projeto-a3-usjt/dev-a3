import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CadastrosModule } from './database/cadastros/cadastros.module';

@Module({
  imports: [DatabaseModule, CadastrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
