import { Controller, Request, Post, UseGuards, Body, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from '../shared/decorators/auth';
import { RequestWithUser } from '../shared/types/requestWithUser';
import { UserPureDTO } from '../users/dto/user-pure.dto';
import { AuthService } from './auth.service';
import { AccessTokenDTO } from './dto/access-token-dto';
import { AuthDTO } from './dto/auth.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTagEnum } from '../../../common/api.enum';
import { ControllerWithTag } from '../shared/decorators/controllerWithTag';

@ControllerWithTag(ApiTagEnum.Auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiResponse({ status: 201, type: AccessTokenDTO })
  login(@Request() req: RequestWithUser, @Body() auth: AuthDTO): AccessTokenDTO {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @Auth()
  @ApiResponse({ status: 201, type: UserPureDTO })
  getProfile(@Request() req: RequestWithUser): UserPureDTO {
    return req.user;
  }
}
