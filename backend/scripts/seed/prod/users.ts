import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { configService } from '../../../config/config.service';
import { hashSync } from 'bcrypt';
import { ApiTagEnum } from '../../../../common/api.enum';
import { User } from '../../../src/users/entities/user.entity';
import { insertObjects } from '../helpers';

export const seedUsers = async (connection: Connection) => {
  const adminPassword = configService.getAdminPassword();
  const bcryptPassword = hashSync(adminPassword, 12);

  const users: Partial<User>[] = [
    {
      username: 'admin',
      password: bcryptPassword
    }
  ];

  await insertObjects<Partial<User>>(connection, ApiTagEnum.Users, users);
};
