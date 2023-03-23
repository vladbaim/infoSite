import { Connection } from 'typeorm';
import { ApiTagEnum } from '../../../../common/api.enum';
import { Post } from '../../../src/posts/entities/post.entity';
import { insertObjects } from '../helpers';

const postText = `Stay focused and remember we design the best WordPress News and Magazine Themes. It’s the ones closest to you that want to see you fail. Another one. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? The key to success is to keep your head above the water, never give up. Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there.
The key to more success is to have a lot of pillows. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. To succeed you must believe. When you believe, you will succeed.
Don’t wait. The time will never be just right!
You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. Surround yourself with angels. They never said winning was easy. Some people can’t handle success, I can. Look at the sunset, life is amazing, life is beautiful, life is what you make it. Life is what you make it, so let’s make it. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed.`;

export const posts: Partial<Post>[] = [
  {
    title: 'After all is said and done, more is done',
    text: postText,
    previewId: 1,
    categoryId: 1
  },
  {
    title: 'Success is not a good teacher failure makes you humble',
    text: postText,
    previewId: 2,
    categoryId: 1
  },
  {
    title: 'Budget issues force the Tour to be cancelled',
    text: postText,
    previewId: 3,
    categoryId: 2
  },
  {
    title: 'Instagram’s big redesign goes live with black-and-white app',
    text: postText,
    previewId: 4,
    categoryId: 2
  },
  {
    title: 'The only thing that overcomes hard luck is hard work',
    text: postText,
    previewId: 5,
    categoryId: 3
  },
  {
    title: 'The secret of life is not to do what you like but to like what you do',
    text: postText,
    previewId: 6,
    categoryId: 4
  },
  {
    title: 'Education is the best provision for the journey to old age',
    text: postText,
    previewId: 7,
    categoryId: 4
  }
];

export const seedPosts = async (connection: Connection) => {
  await insertObjects<Partial<Post>>(connection, ApiTagEnum.Posts, posts);
};
