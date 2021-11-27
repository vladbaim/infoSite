import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Post } from '../entities/post.entity';

export class CreatePostDto implements Readonly<CreatePostDto> {
  constructor(title: string, text: string, previewId?: number) {
    this.title = title;
    this.text = text;
    this.previewId = previewId;
  }

  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  text: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  previewId?: number;
}
