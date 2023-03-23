import { Connection } from 'typeorm';
import { seedCategories } from './categories';
import { seedDatabaseFiles } from './databaseFiels';
import { seedPosts } from './posts';

export const devSeeder = async (connection: Connection) => {
  console.log('run Dev seeder!');
  await seedDatabaseFiles(connection);
  await seedCategories(connection);
  await seedPosts(connection);
};
