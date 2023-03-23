import { PartialType } from '@nestjs/swagger';
import { UpdateBaseDTO } from '../../../shared/base/update-base.dto';
import { mergeUpdater } from '../../../shared/pipes/merdgeUpdater';
import { Category } from '../entities/category.entity';
import { CreateCategoryDTO } from './create-category.dto';

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) implements UpdateBaseDTO<Category> {
  constructor(name?: string) {
    super();
    this.name = name;
  }

  mergeWithEntity(post: Category) {
    mergeUpdater<Category>(post, this);
    return post;
  }
}
