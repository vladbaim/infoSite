import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseFileDTO } from './dto/database-file.dto';
import { DatabaseFile } from './entities/database-file.entity';

@Injectable()
export class DatabaseFilesService {
  constructor(@InjectRepository(DatabaseFile) private readonly databaseFilesRepository: Repository<DatabaseFile>) {}

  uploadDatabaseFile(file: Express.Multer.File): Promise<DatabaseFileDTO> {
    return this.databaseFilesRepository
      .create({
        filename: file.originalname,
        data: file.buffer
      })
      .save()
      .then((databaseFile) => new DatabaseFileDTO(databaseFile));
  }

  getFileById(id: number): Promise<DatabaseFileDTO> {
    return this.databaseFilesRepository.findOneOrFail(id).then((databaseFile) => new DatabaseFileDTO(databaseFile));
  }
}
