import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsDate, IsNumber, IsOptional } from 'class-validator';
import { PrimaryGeneratedColumn, BaseEntity as TypeOrmBaseEntity, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity extends TypeOrmBaseEntity {
  @ApiProperty()
  @IsNumber()
  @PrimaryGeneratedColumn()
  id!: number;

  // @Column({ type: 'boolean', default: true })
  // isActive: boolean;

  // @Column({ type: 'boolean', default: false })
  // isArchived: boolean;

  @ApiProperty()
  @IsDate()
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime!: Date;

  // @Column({ type: 'varchar', length: 300 })
  // createdBy: string;

  // @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  // lastChangedDateTime: Date;

  // @Column({ type: 'varchar', length: 300 })
  // lastChangedBy: string;

  // @Column({ type: 'varchar', length: 300, nullable: true })
  // internalComment: string | null;
}
