import { Connection } from 'typeorm';
import { query } from './data';

export const seedDatabaseFiles = async (connection: Connection) => {
  await connection.query(query);
  console.log('Images created!');
};
