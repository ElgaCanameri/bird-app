import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BirdsService } from './birds.service';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';
import { Bird } from './interfaces/bird.interface';

@Controller('birds')
export class BirdsController {
  constructor(private readonly birdsService: BirdsService) {}

  @Post()
  async create(@Body() createBirdDto: CreateBirdDto): Promise<Bird> {
    return this.birdsService.create(createBirdDto);
  }

  @Get()
  async findAll(): Promise<Bird[]> {
    return this.birdsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Bird> {
    return this.birdsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBirdDto: UpdateBirdDto): Promise<Bird> {
    return this.birdsService.update(id, updateBirdDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Bird> {
    return this.birdsService.remove(id);
  }
}

