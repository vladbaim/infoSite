import { hashSync } from 'bcrypt';
import { Entity, Column, BeforeInsert } from 'typeorm';
import { ApiTagEnum } from '../../../../common/api.enum';
import { BaseEntity } from '../../shared/base/base.entity';

@Entity({ name: ApiTagEnum.Users })
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  username!: string;

  @Column({ type: 'varchar', length: 100 })
  password!: string;

  @BeforeInsert() async hashPassword() {
    this.password = hashSync(this.password, 12);
  }
}
