import { generatedApi } from '../common/api.generated';

export const api = generatedApi.enhanceEndpoints({});

export const {
  useGetOneBasePostsPostQuery,
  useGetManyBasePostsPostQuery,
  useGetManyBaseCategoriesCategoryQuery,
  util: { getRunningOperationPromises }
} = api;

export const { getManyBasePostsPost } = api.endpoints;
