import { ConnectionOptions, createConnection } from 'typeorm';
import { configService } from '../config/config.service';

export const main = async () => {
  try {
    const dbConfig = configService.getTypeOrmConfig();
    const connectionOptions: ConnectionOptions = {
      type: dbConfig.type,
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.username,
    };
    console.log('Create connection', connectionOptions);
    const connection = await createConnection(connectionOptions);
    console.log('Connection created');
    await connection.query(`DROP DATABASE IF EXISTS ${dbConfig.database}`);
    console.log('Create database');
    await connection.query(`CREATE DATABASE ${dbConfig.database}`);
    console.log('Deploy complete');
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

main();
