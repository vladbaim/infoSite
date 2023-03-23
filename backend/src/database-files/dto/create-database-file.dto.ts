import { PickType } from '@nestjs/swagger';
import { DatabaseFile } from '../entities/database-file.entity';

export class CreateDatabaseFileDTO extends PickType(DatabaseFile, ['filename', 'data']) {
  constructor(filename: string, data: Buffer) {
    super();
    this.filename = filename;
    this.data = data;
  }
}
