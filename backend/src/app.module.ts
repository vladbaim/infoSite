import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '../config/config.service';
import { PostsModule } from './posts/posts.module';
import { DatabaseFilesModule } from './database-files/database-files.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), PostsModule, DatabaseFilesModule, AuthModule, UsersModule],
  controllers: [],
  providers: []
})
export class AppModule {}
