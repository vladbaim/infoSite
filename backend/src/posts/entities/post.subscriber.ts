import { EntitySubscriberInterface, EventSubscriber, InsertEvent, RemoveEvent, Repository, UpdateEvent } from 'typeorm';
import { Category } from '../categories/entities/category.entity';
import { Post } from './post.entity';

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Post> {
  listenTo(): any {
    return Post;
  }

  async changeCategoryPostCount(repository: Repository<Category>, categoryId: number, countChanger: number) {
    const category = await repository.findOne(categoryId);
    if (category) {
      category.changeCountPosts(countChanger);
    }
  }

  async afterInsert(event: InsertEvent<Post>): Promise<void> {
    if (event.entity?.categoryId) {
      const repository = event.manager.getRepository(Category);
      await this.changeCategoryPostCount(repository, event.entity?.categoryId, 1);
    }
  }

  async afterRemove(event: RemoveEvent<Post>): Promise<void> {
    if (event.entity?.categoryId) {
      const repository = event.manager.getRepository(Category);
      await this.changeCategoryPostCount(repository, event.entity?.categoryId, -1);
    }
  }

  async afterUpdate(event: UpdateEvent<Post>): Promise<void> {
    const categoryGotUpdated = event.updatedColumns.some((value) => value.propertyName === 'categoryId');
    if (categoryGotUpdated) {
      if (event.databaseEntity.categoryId !== event.entity?.categoryId) {
        const repository = event.manager.getRepository(Category);
        if (event.databaseEntity.categoryId) {
          await this.changeCategoryPostCount(repository, event.databaseEntity.categoryId, -1);
        }
        if (event.entity?.categoryId) {
          await this.changeCategoryPostCount(repository, event.entity?.categoryId, 1);
        }
      }
    }
  }
}
