import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { JwtToken } from '../shared/types/jwtToken';
import { UserPureDTO } from '../users/dto/user-pure.dto';
import { UsersService } from '../users/users.service';
import { AccessTokenDTO } from './dto/access-token-dto';
import { AuthDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(auth: AuthDTO): Promise<UserPureDTO | undefined> {
    const user = await this.usersService.findOne(auth.username);
    if (compareSync(auth.password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
  }

  login(user: UserPureDTO): AccessTokenDTO {
    const payload: JwtToken = { username: user.username, id: user.id };
    return new AccessTokenDTO(this.jwtService.sign(payload));
  }
}
