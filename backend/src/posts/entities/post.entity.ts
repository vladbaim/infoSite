import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { DatabaseFile } from '../../database-files/entities/database-file.entity';
import { BaseEntity } from '../../shared/base.entity';

@Entity({ name: 'post' })
export class Post extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  title!: string;

  @Column({ type: 'text' })
  text!: string;

  @JoinColumn({ name: 'previewId' })
  @ManyToOne(() => DatabaseFile, {
    nullable: true
  })
  public preview?: DatabaseFile;

  @Column({ nullable: true })
  public previewId?: number;
}
