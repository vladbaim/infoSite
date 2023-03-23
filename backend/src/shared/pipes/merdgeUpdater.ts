import { isValuePresent } from '../../../../common/validation/isValuePresent';
import { UpdateBaseDTO } from '../base/update-base.dto';

export const mergeUpdater = <E>(entity: E, updaterObject: UpdateBaseDTO<E>) => {
  const updater: Partial<E> = {};
  Object.keys(updaterObject).forEach((key) => {
    const thisKey = key as keyof UpdateBaseDTO<E>;
    if (thisKey !== 'mergeWithEntity' && isValuePresent(updaterObject[thisKey])) {
      updater[thisKey] = updaterObject[thisKey];
    }
  });
  Object.assign(entity, updater);
};
