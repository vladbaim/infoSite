import { PartialType } from '@nestjs/swagger';
import { UpdateBaseDTO } from '../../shared/base/update-base.dto';
import { mergeUpdater } from '../../shared/pipes/merdgeUpdater';
import { Post } from '../entities/post.entity';
import { CreatePostDTO } from './create-post.dto';

export class UpdatePostDTO extends PartialType(CreatePostDTO) implements UpdateBaseDTO<Post> {
  constructor(title?: string, text?: string, previewId?: number, categoryId?: number) {
    super();
    this.title = title;
    this.text = text;
    this.previewId = previewId;
    this.categoryId = categoryId;
  }

  mergeWithEntity(post: Post) {
    mergeUpdater<Post>(post, this);
    return post;
  }
}
