import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../shared/base.entity';

@Entity({ name: 'database-file' })
export class DatabaseFile extends BaseEntity {
  @Column()
  filename!: string;

  @Column({ type: 'bytea' })
  data!: Uint8Array;
}
