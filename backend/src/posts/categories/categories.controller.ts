import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
import { ControllerWithTag } from '../../shared/decorators/controllerWithTag';
import { ApiTagEnum } from '../../../../common/api.enum';
import { Crud } from '@nestjsx/crud';
import { Category } from './entities/category.entity';
import { crudDefaultRoutesConfig } from '../../shared/constants/crudRoutes';

@Crud({
  model: { type: Category },
  dto: { create: CreateCategoryDTO, update: UpdateCategoryDTO, replace: CreateCategoryDTO },
  routes: { ...crudDefaultRoutesConfig },
})
@ControllerWithTag(ApiTagEnum.Categories)
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}
}
