import { Module, Global } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: ['.env'],
        isGlobal: true,
      }),
    ],
    providers: [
      {
        provide: 'DATA_SOURCE',
        inject: [ConfigService],
        useFactory: async (config: ConfigService): Promise<DataSource> => {
          const dataSource = new DataSource({
            
            type: config.get<any>('DB_TYPE'),
            host: config.get<string>('DB_HOST'),
            port: config.get<number>('DB_PORT'),
            username: config.get<string>('DB_USERNAME'),
            password: config.get<string>('DB_PASSWORD'),
            database: config.get<string>('DB_DATABASE'),
            // entities: config.get<any>('DB_ENTITIES'),
            synchronize: config.get<any>('DB_SYNCRONIZE'),
            logging: config.get<any>('DB_LOGGING'),

          });
          return dataSource.initialize();
        },
      },
    ],
    exports: ['DATA_SOURCE']
})
export class DatabaseModule {}
