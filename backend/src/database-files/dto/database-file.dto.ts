import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { DatabaseFile } from '../entities/database-file.entity';

export class DatabaseFileDTO implements Readonly<DatabaseFileDTO> {
  constructor(databaseFile: DatabaseFile) {
    this.id = databaseFile.id;
    this.filename = databaseFile.filename;
    this.data = databaseFile.data;
  }

  @ApiProperty({ required: true })
  @IsNumber()
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  filename: string;

  @ApiProperty({ required: true })
  data: Uint8Array;
}
