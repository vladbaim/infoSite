import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Post } from '../entities/post.entity';

export class PostDTO implements Readonly<PostDTO> {
  constructor(post: Post) {
    this.id = post.id;
    this.title = post.title;
    this.text = post.text;
    this.previewId = post.previewId;
  }

  @ApiProperty({ required: true })
  @IsNumber()
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  text: string;

  @ApiProperty({ required: true })
  @IsNumber()
  previewId?: number;
}
