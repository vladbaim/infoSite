import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value || '';
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions & PostgresConnectionOptions {
    return {
      type: 'postgres',

      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),

      entities: ['**/*.entity{.ts,.js}'],

      migrationsTableName: 'migration',

      migrations: ['migrations/*.ts'],

      cli: {
        migrationsDir: 'migrations'
      },

      ssl: this.isProduction(),

      cache: {
        type: 'redis',
        alwaysEnabled: this.isProduction(),
        duration: 30000,
        options: {
          host: this.getValue('REDIS_HOST'),
          password: this.getValue('REDIS_PASSWORD'),
          port: this.getValue('REDIS_PORT')
        }
      }
    };
  }

  public getAdminPassword() {
    return this.getValue('ADMIN_PASSWORD', true);
  }

  public getServerPath() {
    return this.getValue('SERVER_PATH', true);
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'PORT',

  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',

  'REDIS_HOST',
  'REDIS_PORT',
  'REDIS_PASSWORD',

  'ADMIN_PASSWORD',

  'SERVER_PATH'
]);

export { configService };
