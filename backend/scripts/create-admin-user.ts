import { ConnectionOptions, createConnection } from 'typeorm';
import { configService } from '../config/config.service';
import { hashSync } from 'bcrypt';

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
    const adminPassword = configService.getAdminPassword();
    const bcryptPassword = hashSync(adminPassword, 12);
    await connection.query(`INSERT INTO public."adminUser" (username, password) VALUES ('admin', '${bcryptPassword}');`);
    console.log('Admin user created!');
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

main();
