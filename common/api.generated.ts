/* This file was automatically generated */
// eslint-disable
// tslint:disable
// @ts-nocheck

import { emptySplitApi as api } from "../api/api.empty";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOneBasePostsPost: build.query<
      GetOneBasePostsPostApiResponse,
      GetOneBasePostsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/post/${queryArg.id}`,
        params: {
          fields: queryArg.fields,
          join: queryArg.join,
          cache: queryArg.cache,
        },
      }),
    }),
    updateOneBasePostsPost: build.mutation<
      UpdateOneBasePostsPostApiResponse,
      UpdateOneBasePostsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/post/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePostDto,
      }),
    }),
    replaceOneBasePostsPost: build.mutation<
      ReplaceOneBasePostsPostApiResponse,
      ReplaceOneBasePostsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/post/${queryArg.id}`,
        method: "PUT",
        body: queryArg.createPostDto,
      }),
    }),
    deleteOneBasePostsPost: build.mutation<
      DeleteOneBasePostsPostApiResponse,
      DeleteOneBasePostsPostApiArg
    >({
      query: (queryArg) => ({ url: `/post/${queryArg.id}`, method: "DELETE" }),
    }),
    getManyBasePostsPost: build.query<
      GetManyBasePostsPostApiResponse,
      GetManyBasePostsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/post`,
        params: {
          fields: queryArg.fields,
          s: queryArg.s,
          filter: queryArg.filter,
          or: queryArg.or,
          sort: queryArg.sort,
          join: queryArg.join,
          limit: queryArg.limit,
          offset: queryArg.offset,
          page: queryArg.page,
          cache: queryArg.cache,
        },
      }),
    }),
    createOneBasePostsPost: build.mutation<
      CreateOneBasePostsPostApiResponse,
      CreateOneBasePostsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/post`,
        method: "POST",
        body: queryArg.createPostDto,
      }),
    }),
    createManyBasePostsPost: build.mutation<
      CreateManyBasePostsPostApiResponse,
      CreateManyBasePostsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/post/bulk`,
        method: "POST",
        body: queryArg.createManyPostDto,
      }),
    }),
    getOneBaseCategoriesCategory: build.query<
      GetOneBaseCategoriesCategoryApiResponse,
      GetOneBaseCategoriesCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/category/${queryArg.id}`,
        params: {
          fields: queryArg.fields,
          join: queryArg.join,
          cache: queryArg.cache,
        },
      }),
    }),
    updateOneBaseCategoriesCategory: build.mutation<
      UpdateOneBaseCategoriesCategoryApiResponse,
      UpdateOneBaseCategoriesCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/category/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateCategoryDto,
      }),
    }),
    replaceOneBaseCategoriesCategory: build.mutation<
      ReplaceOneBaseCategoriesCategoryApiResponse,
      ReplaceOneBaseCategoriesCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/category/${queryArg.id}`,
        method: "PUT",
        body: queryArg.createCategoryDto,
      }),
    }),
    deleteOneBaseCategoriesCategory: build.mutation<
      DeleteOneBaseCategoriesCategoryApiResponse,
      DeleteOneBaseCategoriesCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/category/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getManyBaseCategoriesCategory: build.query<
      GetManyBaseCategoriesCategoryApiResponse,
      GetManyBaseCategoriesCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/category`,
        params: {
          fields: queryArg.fields,
          s: queryArg.s,
          filter: queryArg.filter,
          or: queryArg.or,
          sort: queryArg.sort,
          join: queryArg.join,
          limit: queryArg.limit,
          offset: queryArg.offset,
          page: queryArg.page,
          cache: queryArg.cache,
        },
      }),
    }),
    createOneBaseCategoriesCategory: build.mutation<
      CreateOneBaseCategoriesCategoryApiResponse,
      CreateOneBaseCategoriesCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/category`,
        method: "POST",
        body: queryArg.createCategoryDto,
      }),
    }),
    createManyBaseCategoriesCategory: build.mutation<
      CreateManyBaseCategoriesCategoryApiResponse,
      CreateManyBaseCategoriesCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/category/bulk`,
        method: "POST",
        body: queryArg.createManyCategoryDto,
      }),
    }),
    databaseFilesGetImage: build.query<
      DatabaseFilesGetImageApiResponse,
      DatabaseFilesGetImageApiArg
    >({
      query: (queryArg) => ({ url: `/database-file/image/${queryArg.id}` }),
    }),
    databaseFilesCreateOne: build.mutation<
      DatabaseFilesCreateOneApiResponse,
      DatabaseFilesCreateOneApiArg
    >({
      query: (queryArg) => ({
        url: `/database-file`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getManyBaseDatabaseFilesDatabaseFile: build.query<
      GetManyBaseDatabaseFilesDatabaseFileApiResponse,
      GetManyBaseDatabaseFilesDatabaseFileApiArg
    >({
      query: (queryArg) => ({
        url: `/database-file`,
        params: {
          fields: queryArg.fields,
          s: queryArg.s,
          filter: queryArg.filter,
          or: queryArg.or,
          sort: queryArg.sort,
          join: queryArg.join,
          limit: queryArg.limit,
          offset: queryArg.offset,
          page: queryArg.page,
          cache: queryArg.cache,
        },
      }),
    }),
    getOneBaseDatabaseFilesDatabaseFile: build.query<
      GetOneBaseDatabaseFilesDatabaseFileApiResponse,
      GetOneBaseDatabaseFilesDatabaseFileApiArg
    >({
      query: (queryArg) => ({
        url: `/database-file/${queryArg.id}`,
        params: {
          fields: queryArg.fields,
          join: queryArg.join,
          cache: queryArg.cache,
        },
      }),
    }),
    updateOneBaseDatabaseFilesDatabaseFile: build.mutation<
      UpdateOneBaseDatabaseFilesDatabaseFileApiResponse,
      UpdateOneBaseDatabaseFilesDatabaseFileApiArg
    >({
      query: (queryArg) => ({
        url: `/database-file/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateDatabaseFileDto,
      }),
    }),
    deleteOneBaseDatabaseFilesDatabaseFile: build.mutation<
      DeleteOneBaseDatabaseFilesDatabaseFileApiResponse,
      DeleteOneBaseDatabaseFilesDatabaseFileApiArg
    >({
      query: (queryArg) => ({
        url: `/database-file/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    authLogin: build.mutation<AuthLoginApiResponse, AuthLoginApiArg>({
      query: (queryArg) => ({
        url: `/auth/login`,
        method: "POST",
        body: queryArg.authDto,
      }),
    }),
    authGetProfile: build.query<
      AuthGetProfileApiResponse,
      AuthGetProfileApiArg
    >({
      query: () => ({ url: `/auth/profile` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export type GetOneBasePostsPostApiResponse = /** status 200 Get one base response */ Post;
export type GetOneBasePostsPostApiArg = {
  id: number;
  /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
  fields?: string[];
  /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
  join?: string[];
  /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
  cache?: number;
};
export type UpdateOneBasePostsPostApiResponse = /** status 200 Response */ Post;
export type UpdateOneBasePostsPostApiArg = {
  id: number;
  updatePostDto: UpdatePostDto;
};
export type ReplaceOneBasePostsPostApiResponse = /** status 200 Response */ Post;
export type ReplaceOneBasePostsPostApiArg = {
  id: number;
  createPostDto: CreatePostDto;
};
export type DeleteOneBasePostsPostApiResponse = unknown;
export type DeleteOneBasePostsPostApiArg = {
  id: number;
};
export type GetManyBasePostsPostApiResponse = /** status 200 Get paginated response */ GetManyPostResponseDto;
export type GetManyBasePostsPostApiArg = {
  /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
  fields?: string[];
  /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
  s?: string;
  /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
  filter?: string[];
  /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
  or?: string[];
  /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
  sort?: string[];
  /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
  join?: string[];
  /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
  limit?: number;
  /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
  offset?: number;
  /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
  page?: number;
  /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
  cache?: number;
};
export type CreateOneBasePostsPostApiResponse = /** status 201 Get create one base response */ Post;
export type CreateOneBasePostsPostApiArg = {
  createPostDto: CreatePostDto;
};
export type CreateManyBasePostsPostApiResponse = /** status 201 Get create many base response */ Post[];
export type CreateManyBasePostsPostApiArg = {
  createManyPostDto: CreateManyPostDto;
};
export type GetOneBaseCategoriesCategoryApiResponse = /** status 200 Get one base response */ Category;
export type GetOneBaseCategoriesCategoryApiArg = {
  id: number;
  /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
  fields?: string[];
  /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
  join?: string[];
  /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
  cache?: number;
};
export type UpdateOneBaseCategoriesCategoryApiResponse = /** status 200 Response */ Category;
export type UpdateOneBaseCategoriesCategoryApiArg = {
  id: number;
  updateCategoryDto: UpdateCategoryDto;
};
export type ReplaceOneBaseCategoriesCategoryApiResponse = /** status 200 Response */ Category;
export type ReplaceOneBaseCategoriesCategoryApiArg = {
  id: number;
  createCategoryDto: CreateCategoryDto;
};
export type DeleteOneBaseCategoriesCategoryApiResponse = unknown;
export type DeleteOneBaseCategoriesCategoryApiArg = {
  id: number;
};
export type GetManyBaseCategoriesCategoryApiResponse = /** status 200 Get paginated response */ GetManyCategoryResponseDto;
export type GetManyBaseCategoriesCategoryApiArg = {
  /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
  fields?: string[];
  /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
  s?: string;
  /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
  filter?: string[];
  /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
  or?: string[];
  /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
  sort?: string[];
  /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
  join?: string[];
  /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
  limit?: number;
  /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
  offset?: number;
  /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
  page?: number;
  /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
  cache?: number;
};
export type CreateOneBaseCategoriesCategoryApiResponse = /** status 201 Get create one base response */ Category;
export type CreateOneBaseCategoriesCategoryApiArg = {
  createCategoryDto: CreateCategoryDto;
};
export type CreateManyBaseCategoriesCategoryApiResponse = /** status 201 Get create many base response */ Category[];
export type CreateManyBaseCategoriesCategoryApiArg = {
  createManyCategoryDto: CreateManyCategoryDto;
};
export type DatabaseFilesGetImageApiResponse = unknown;
export type DatabaseFilesGetImageApiArg = {
  id: number;
};
export type DatabaseFilesCreateOneApiResponse = /** status 200  */ PureDatabaseFileDto;
export type DatabaseFilesCreateOneApiArg = {
  body: {
    file?: Blob;
  };
};
export type GetManyBaseDatabaseFilesDatabaseFileApiResponse = /** status 200 Get paginated response */ GetManyDatabaseFileResponseDto;
export type GetManyBaseDatabaseFilesDatabaseFileApiArg = {
  /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
  fields?: string[];
  /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
  s?: string;
  /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
  filter?: string[];
  /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
  or?: string[];
  /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
  sort?: string[];
  /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
  join?: string[];
  /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
  limit?: number;
  /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
  offset?: number;
  /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
  page?: number;
  /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
  cache?: number;
};
export type GetOneBaseDatabaseFilesDatabaseFileApiResponse = /** status 200 Get one base response */ DatabaseFile;
export type GetOneBaseDatabaseFilesDatabaseFileApiArg = {
  id: number;
  /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
  fields?: string[];
  /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
  join?: string[];
  /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
  cache?: number;
};
export type UpdateOneBaseDatabaseFilesDatabaseFileApiResponse = /** status 200 Response */ DatabaseFile;
export type UpdateOneBaseDatabaseFilesDatabaseFileApiArg = {
  id: number;
  updateDatabaseFileDto: UpdateDatabaseFileDto;
};
export type DeleteOneBaseDatabaseFilesDatabaseFileApiResponse = unknown;
export type DeleteOneBaseDatabaseFilesDatabaseFileApiArg = {
  id: number;
};
export type AuthLoginApiResponse = /** status 201  */ AccessTokenDto;
export type AuthLoginApiArg = {
  authDto: AuthDto;
};
export type AuthGetProfileApiResponse = /** status 201  */ UserPureDto;
export type AuthGetProfileApiArg = void;
export type PartialTypeClass = {
  id?: number;
  createDateTime?: string;
  filename?: string;
  url?: string;
};
export type Post = {
  id: number;
  createDateTime: string;
  title: string;
  text: string;
  preview?: PartialTypeClass;
  previewId?: number;
  category?: PartialTypeClass;
  categoryId?: number;
};
export type UpdatePostDto = {
  title?: string;
  text?: string;
  previewId?: number;
  categoryId?: number;
};
export type CreatePostDto = {
  title: string;
  text: string;
  previewId?: number;
  categoryId?: number;
};
export type GetManyPostResponseDto = {
  data: Post[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
};
export type CreateManyPostDto = {
  bulk: CreatePostDto[];
};
export type Category = {
  id: number;
  createDateTime: string;
  name: string;
  postCount: number;
};
export type UpdateCategoryDto = {
  name?: string;
};
export type CreateCategoryDto = {
  name: string;
};
export type GetManyCategoryResponseDto = {
  data: Category[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
};
export type CreateManyCategoryDto = {
  bulk: CreateCategoryDto[];
};
export type PureDatabaseFileDto = {
  id: number;
  filename: string;
};
export type DatabaseFile = {
  id: number;
  createDateTime: string;
  filename: string;
  url: string;
};
export type GetManyDatabaseFileResponseDto = {
  data: DatabaseFile[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
};
export type UpdateDatabaseFileDto = {
  filename?: string;
};
export type AccessTokenDto = {
  access_token: string;
};
export type AuthDto = {
  username: string;
  password: string;
};
export type UserPureDto = {
  id: number;
  username: string;
};
