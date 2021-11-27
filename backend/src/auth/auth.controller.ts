import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RequestWithUser } from '../shared/types/requestWithUser';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: RequestWithUser, @Body() auth: AuthDTO) {
    return this.authService.login(req.user);
  }
}
