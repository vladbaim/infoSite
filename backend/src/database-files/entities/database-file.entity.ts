import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { AfterInsert, AfterLoad, BeforeUpdate, Column, Entity } from 'typeorm';
import { ApiTagEnum } from '../../../../common/api.enum';
import { BaseEntity } from '../../shared/base/base.entity';

@Entity({ name: ApiTagEnum.DatabaseFiles })
export class DatabaseFile extends BaseEntity {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  @Column({ type: 'varchar', length: 100 })
  filename!: string;

  @Exclude()
  @Column({ type: 'bytea' })
  data!: Uint8Array;

  @ApiProperty()
  @IsString()
  @IsOptional()
  url?: string;

  @AfterLoad()
  async generateUrl(): Promise<void> {
    this.url = `/database-file/image/${this.id}`;
  }
}
