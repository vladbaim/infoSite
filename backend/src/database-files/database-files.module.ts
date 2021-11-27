import { Module } from '@nestjs/common';
import { DatabaseFilesService } from './database-files.service';
import { DatabaseFilesController } from './database-files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseFile } from './entities/database-file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatabaseFile])],
  controllers: [DatabaseFilesController],
  providers: [DatabaseFilesService],
  exports: [DatabaseFilesService]
})
export class DatabaseFilesModule {}
