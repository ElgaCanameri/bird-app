import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BirdClass extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  species: string;

  @Prop({ required: true })
  family: string;

  @Prop({ required: true })
  habitat: string;

  @Prop({ required: true })
  place_of_found: string;

  @Prop({ required: true })
  diet: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true }) 
  weight_kg: number;

  @Prop({ required: true }) 
  height_cm: number;

  @Prop({ required: true }) 
  image: string;
}

export const BirdSchema = SchemaFactory.createForClass(BirdClass);
