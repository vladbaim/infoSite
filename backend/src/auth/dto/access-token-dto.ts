import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AccessTokenDTO implements Readonly<AccessTokenDTO> {
  constructor(access_token: string) {
    this.access_token = access_token;
  }

  @ApiProperty({ required: true })
  @IsString()
  access_token: string;
}
