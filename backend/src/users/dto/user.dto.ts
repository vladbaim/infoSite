import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class UserDTO implements Readonly<UserDTO> {
  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
  }

  @ApiProperty({ required: true })
  @IsNumber()
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  username: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;
}
