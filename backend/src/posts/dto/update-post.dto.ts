import { PartialType } from '@nestjs/swagger';
import { isValuePresent } from '../../../../common/validation/isValuePresent';
import { Post } from '../entities/post.entity';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) implements Readonly<UpdatePostDto> {
  public mergeWithEntity(post: Post) {
    Object.assign(post, {
      ...(isValuePresent(this.title) && { title: this.title }),
      ...(isValuePresent(this.text) && { text: this.text }),
      ...(isValuePresent(this.previewId) && { previewId: this.previewId })
    });
    return post;
  }
}
