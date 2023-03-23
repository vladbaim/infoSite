import { Connection } from 'typeorm';
import { ApiTagEnum } from '../../../../common/api.enum';
import { Category } from '../../../src/posts/categories/entities/category.entity';
import { insertObjects } from '../helpers';
import { posts } from './posts';

export const seedCategories = async (connection: Connection) => {
  const categories: Partial<Category>[] = [
    {
      name: 'Sport',
      postCount: posts.filter((post) => post.categoryId === 1).length
    },
    {
      name: 'Adventure',
      postCount: posts.filter((post) => post.categoryId === 2).length
    },
    {
      name: 'Food',
      postCount: posts.filter((post) => post.categoryId === 3).length
    },
    {
      name: 'Cars',
      postCount: posts.filter((post) => post.categoryId === 4).length
    },
    {
      name: 'Technology',
      postCount: posts.filter((post) => post.categoryId === 5).length
    }
  ];

  await insertObjects<Partial<Category>>(connection, ApiTagEnum.Categories, categories);
};
