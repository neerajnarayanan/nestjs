import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LevelProviders } from '../api/api.provider';
import { ApiController } from '../api/api.controller';
import { DatabaseModule } from '../core/database/database.module';
import {ApiService} from '../api/api.service'
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
  ],
  controllers: [ApiController],
  providers: [...LevelProviders,ApiService],
})
export class AppModule { }
