import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { ApiTagEnum } from '../../../../common/api.enum';
import { DatabaseFile } from '../../database-files/entities/database-file.entity';
import { BaseEntity } from '../../shared/base/base.entity';
import { Category } from '../categories/entities/category.entity';

@Entity(ApiTagEnum.Posts)
export class Post extends BaseEntity {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  @Column({ type: 'varchar', length: 100 })
  title!: string;

  @ApiProperty()
  @IsString()
  @Column({ type: 'text' })
  text!: string;

  @ApiProperty({ type: PartialType(DatabaseFile), required: false })
  @JoinColumn({ name: 'previewId' })
  @ManyToOne(() => DatabaseFile, {
    nullable: true
  })
  public preview?: DatabaseFile;

  @ApiProperty({ required: false })
  @IsOptional()
  @Column({ nullable: true })
  public previewId?: number;

  @ApiProperty({ type: PartialType(Category), required: false })
  @JoinColumn({ name: 'categoryId' })
  @ManyToOne(() => Category, {
    nullable: true
  })
  public category?: Category;

  @ApiProperty({ required: false })
  @IsOptional()
  @Column({ nullable: true })
  public categoryId?: number;
}
