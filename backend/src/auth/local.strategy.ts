import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from '../users/dto/user.dto';
import { UserPureDTO } from '../users/dto/user-pure.dto';
import { AuthDTO } from './dto/auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(authDto: AuthDTO): Promise<UserPureDTO> {
    const user = await this.authService.validateUser(authDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
