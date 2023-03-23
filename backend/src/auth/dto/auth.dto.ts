import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDTO implements Readonly<AuthDTO> {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  @ApiProperty({ required: true })
  @IsString()
  username: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;
}
