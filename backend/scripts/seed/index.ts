import { ConnectionOptions, createConnection } from 'typeorm';
import { configService } from '../../config/config.service';
import { prodSeeder } from './prod';
import { devSeeder } from './dev';

export const main = async () => {
  try {
    const dbConfig = configService.getTypeOrmConfig();
    const connectionOptions: ConnectionOptions = {
      type: dbConfig.type,
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.username
    };
    const connection = await createConnection(connectionOptions);
    console.log('Connection created');
    await prodSeeder(connection);
    if (!configService.isProduction()) {
      await devSeeder(connection);
    }
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

main();
