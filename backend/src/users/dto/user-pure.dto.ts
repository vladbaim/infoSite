import { PickType } from '@nestjs/swagger';
import { UserDTO } from './user.dto';

export class UserPureDTO extends PickType(UserDTO, ['id', 'username']) {}
