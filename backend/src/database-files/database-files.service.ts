import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { CreateDatabaseFileDTO } from './dto/create-database-file.dto';
import { PureDatabaseFileDTO } from './dto/pure-database-file.dto';
import { DatabaseFile } from './entities/database-file.entity';

@Injectable()
export class DatabaseFilesService extends TypeOrmCrudService<DatabaseFile> {
  constructor(
    @InjectRepository(DatabaseFile)
    private readonly databaseFilesRepository: Repository<DatabaseFile>
  ) {
    super(databaseFilesRepository);
  }

  getWithData(id: number): Promise<DatabaseFile> {
    return this.databaseFilesRepository.findOneOrFail(id);
  }

  upload(creator: CreateDatabaseFileDTO): Promise<PureDatabaseFileDTO> {
    return this.databaseFilesRepository
      .create(creator)
      .save()
      .then((databaseFile) => new PureDatabaseFileDTO(databaseFile));
  }
}
