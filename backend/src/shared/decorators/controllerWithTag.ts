import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiTagEnum } from '../../../../common/api.enum';

export function ControllerWithTag(tag: ApiTagEnum) {
  return applyDecorators(ApiTags(tag), Controller(tag));
}
