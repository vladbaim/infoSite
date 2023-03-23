import { PostsService } from './posts.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
import { ControllerWithTag } from '../shared/decorators/controllerWithTag';
import { ApiTagEnum } from '../../../common/api.enum';
import { Crud } from '@nestjsx/crud';
import { Post } from './entities/post.entity';
import { crudDefaultRoutesConfig } from '../shared/constants/crudRoutes';

@Crud({
  model: { type: Post },
  dto: { create: CreatePostDTO, update: UpdatePostDTO, replace: CreatePostDTO },
  routes: { ...crudDefaultRoutesConfig },
  query: {
    join: {
      preview: {
        allow: []
      }
    }
  }
})
@ControllerWithTag(ApiTagEnum.Posts)
export class PostsController {
  constructor(private readonly service: PostsService) {}
}
