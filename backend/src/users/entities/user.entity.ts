import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../shared/base.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  username!: string;

  @Column({ type: 'varchar', length: 100 })
  password!: string;
}
