import { OmitType, PartialType } from '@nestjs/swagger';
import { UpdateBaseDTO } from '../../shared/base/update-base.dto';
import { mergeUpdater } from '../../shared/pipes/merdgeUpdater';
import { DatabaseFile } from '../entities/database-file.entity';
import { CreateDatabaseFileDTO } from './create-database-file.dto';

export class UpdateDatabaseFileDTO extends PartialType(OmitType(CreateDatabaseFileDTO, ['data'])) implements UpdateBaseDTO<DatabaseFile> {
  constructor(filename: string) {
    super();
    this.filename = filename;
  }

  public mergeWithEntity(databaseFile: DatabaseFile) {
    mergeUpdater<DatabaseFile>(databaseFile, this);
    return databaseFile;
  }
}
