import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdsModule } from './birds/birds.module';
import {MongooseModule} from '@nestjs/mongoose';
import config from './config/keys';
@Module({
  imports: [
    BirdsModule,
    MongooseModule.forRoot(config.mongoURI)  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
