import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bird } from './interfaces/bird.interface';
import { BirdClass } from './schemas/bird.schema';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

@Injectable()
export class BirdsService {
  constructor(@InjectModel(BirdClass.name) private birdModel: Model<Bird>) {}

  async create(createBirdDto: CreateBirdDto): Promise<Bird> {
    const createdBird = new this.birdModel(createBirdDto);
    return createdBird.save();
  }

  async findAll(): Promise<Bird[]> {
    return this.birdModel.find().exec();
  }

  async findOne(id: string): Promise<Bird> {
    const bird = await this.birdModel.findOne({_id: id}).exec();
    if (!bird) {
      throw new NotFoundException(`Bird with ID "${id}" not found`);
    }
    return bird;
  }

  async update(id: string, updateBirdDto: UpdateBirdDto): Promise<Bird> {
    const existingBird = await this.birdModel.findByIdAndUpdate(id, updateBirdDto, { new: true }).exec();
    if (!existingBird) {
      throw new NotFoundException(`Bird with ID "${id}" not found`);
    }
    return existingBird;
  }

  async remove(id: string): Promise<Bird> {
    const bird = await this.birdModel.findByIdAndDelete(id).exec();
    if (!bird) {
      throw new NotFoundException(`Bird with ID "${id}" not found`);
    }
    return bird;
  }
}
