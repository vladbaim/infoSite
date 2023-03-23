import { useGetManyBaseCategoriesCategoryQuery } from '../../api';
import { getArrayOfUndefined } from '../../utils/getArrayOfUndefined';
import { View } from './view';

export const Categories = () => {
  const { data: categories } = useGetManyBaseCategoriesCategoryQuery({ limit: 20, filter: ['postCount||$gt||0'] });

  return View({
    categories: categories?.data || getArrayOfUndefined(5)
  });
};
