import { PickType } from '@nestjs/swagger';
import { Post } from '../../entities/post.entity';
import { Category } from '../entities/category.entity';

export class CreateCategoryDTO extends PickType(Category, ['name']) {
  constructor(name: string) {
    super();
    this.name = name;
  }
}
