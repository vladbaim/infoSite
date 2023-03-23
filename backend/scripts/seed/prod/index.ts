import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { seedUsers } from './users';

export const prodSeeder = async (connection: Connection) => {
  console.log('run Prod seeder!');
  await seedUsers(connection);
};
