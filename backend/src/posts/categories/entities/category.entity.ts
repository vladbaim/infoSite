import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Entity, Column, JoinColumn, ManyToOne, OneToMany, AfterLoad, AfterInsert, AfterUpdate } from 'typeorm';
import { ApiTagEnum } from '../../../../../common/api.enum';
import { DatabaseFile } from '../../../database-files/entities/database-file.entity';
import { Post } from '../../entities/post.entity';
import { BaseEntity } from '../../../shared/base/base.entity';

@Entity(ApiTagEnum.Categories)
export class Category extends BaseEntity {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @ApiProperty()
  @Column({ default: 0 })
  @IsNumber()
  @IsOptional()
  postCount!: number;

  async changeCountPosts(postCountChanger: number): Promise<void> {
    this.postCount = this.postCount + postCountChanger;
    this.save();
  }
}
