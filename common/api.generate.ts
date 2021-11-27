/* This file was automatically generated */
// eslint-disable
// tslint:disable
// @ts-nocheck

import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: [],
  endpoints: (build) => ({
    postsControllerCreate: build.mutation<
      PostsControllerCreateApiResponse,
      PostsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/posts`,
        method: "POST",
        body: queryArg.createPostDto,
      }),
    }),
    postsControllerFindAll: build.query<
      PostsControllerFindAllApiResponse,
      PostsControllerFindAllApiArg
    >({
      query: () => ({ url: `/posts` }),
    }),
    postsControllerFindOne: build.query<
      PostsControllerFindOneApiResponse,
      PostsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}` }),
    }),
    postsControllerUpdate: build.mutation<
      PostsControllerUpdateApiResponse,
      PostsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/posts/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePostDto,
      }),
    }),
    postsControllerRemove: build.mutation<
      PostsControllerRemoveApiResponse,
      PostsControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}`, method: "DELETE" }),
    }),
    databaseFilesControllerGetDatabaseFileById: build.query<
      DatabaseFilesControllerGetDatabaseFileByIdApiResponse,
      DatabaseFilesControllerGetDatabaseFileByIdApiArg
    >({
      query: (queryArg) => ({ url: `/database-files/${queryArg.id}` }),
    }),
    databaseFilesControllerUploadDatabaseFile: build.mutation<
      DatabaseFilesControllerUploadDatabaseFileApiResponse,
      DatabaseFilesControllerUploadDatabaseFileApiArg
    >({
      query: (queryArg) => ({
        url: `/database-files`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
  }),
});
export type PostsControllerCreateApiResponse = /** status 201  */ PostDto;
export type PostsControllerCreateApiArg = {
  createPostDto: CreatePostDto;
};
export type PostsControllerFindAllApiResponse = /** status 201  */ PostDto[];
export type PostsControllerFindAllApiArg = void;
export type PostsControllerFindOneApiResponse = /** status 201  */ PostDto;
export type PostsControllerFindOneApiArg = {
  id: number;
};
export type PostsControllerUpdateApiResponse = /** status 201  */ PostDto;
export type PostsControllerUpdateApiArg = {
  id: number;
  updatePostDto: UpdatePostDto;
};
export type PostsControllerRemoveApiResponse = unknown;
export type PostsControllerRemoveApiArg = {
  id: number;
};
export type DatabaseFilesControllerGetDatabaseFileByIdApiResponse = unknown;
export type DatabaseFilesControllerGetDatabaseFileByIdApiArg = {
  id: number;
};
export type DatabaseFilesControllerUploadDatabaseFileApiResponse =
  /** status 201  */ DatabaseFileDto;
export type DatabaseFilesControllerUploadDatabaseFileApiArg = {
  body: {
    file?: Blob;
  };
};
export type PostDto = {
  id: number;
  title: string;
  text: string;
  previewId: number;
};
export type CreatePostDto = {
  title: string;
  text: string;
  previewId?: number;
};
export type UpdatePostDto = {
  title?: string;
  text?: string;
  previewId?: number;
};
export type Uint8Array = {};
export type DatabaseFileDto = {
  id: number;
  filename: string;
  data: Uint8Array;
};
export const {
  usePostsControllerCreateMutation,
  usePostsControllerFindAllQuery,
  usePostsControllerFindOneQuery,
  usePostsControllerUpdateMutation,
  usePostsControllerRemoveMutation,
  useDatabaseFilesControllerGetDatabaseFileByIdQuery,
  useDatabaseFilesControllerUploadDatabaseFileMutation,
} = api;

