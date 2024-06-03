import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BirdsController } from './birds.controller';
import { BirdsService } from './birds.service';
import {BirdClass, BirdSchema} from './schemas/bird.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: BirdClass.name, schema: BirdSchema}
  ])],
  controllers: [BirdsController],
  providers: [BirdsService]
})
export class BirdsModule {}
