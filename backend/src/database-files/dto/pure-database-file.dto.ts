import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { DatabaseFile } from '../entities/database-file.entity';

export class PureDatabaseFileDTO extends PickType(DatabaseFile, ['id', 'filename']) {
  constructor(databaseFile: DatabaseFile) {
    super();
    this.id = databaseFile.id;
    this.filename = databaseFile.filename;
  }
}
