import { RoutesOptions } from '@nestjsx/crud';
import { Auth } from '../decorators/auth';

export const crudDefaultRoutesConfig: RoutesOptions = {
  createOneBase: { decorators: [Auth()] },
  createManyBase: { decorators: [Auth()] },
  updateOneBase: { decorators: [Auth()] },
  replaceOneBase: { decorators: [Auth()] },
  deleteOneBase: { decorators: [Auth()] }
};

export const crudFullAuthRoutesConfig: RoutesOptions = {
  ...crudDefaultRoutesConfig,
  getManyBase: { decorators: [Auth()] },
  getOneBase: { decorators: [Auth()] }
};
