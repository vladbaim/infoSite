import { PickType } from '@nestjs/swagger';
import { Post } from '../entities/post.entity';

export class CreatePostDTO extends PickType(Post, ['title', 'text', 'previewId', 'categoryId']) {
  constructor(title: string, text: string, previewId?: number, categoryId?: number) {
    super();
    this.title = title;
    this.text = text;
    this.previewId = previewId;
    this.categoryId = categoryId;
  }
}
