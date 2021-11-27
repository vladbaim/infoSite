import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UserPureDTO } from '../users/dto/user-pure.dto';
import { UsersService } from '../users/users.service';
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

  login(user: UserPureDTO) {
    const payload = { username: user.username, id: user.id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
