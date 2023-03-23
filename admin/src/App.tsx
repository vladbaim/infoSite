import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList } from './content/postList';
import { PostEdit } from './content/postList/edit';
import { PostCreate } from './content/postList/create';
import { Dashboard } from './content/dashboard';
import { authProvider } from './shared/utils/authProvider';
import { dataProvider } from './shared/utils/dataProvider';
import { ApiTagEnum } from './common/api.enum';
import { DatabaseFileList } from './content/databaseFileList';
import { DatabaseFileEdit } from './content/databaseFileList/edit';
import { DatabaseFileCreate } from './content/databaseFileList/create';
import { CategoryList } from './content/categoryList';
import { CategoryEdit } from './content/categoryList/edit';
import { CategoryCreate } from './content/categoryList/create';

export const App = () => (
  <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name={ApiTagEnum.Posts} list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name={ApiTagEnum.Categories} list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
    <Resource name={ApiTagEnum.DatabaseFiles} list={DatabaseFileList} edit={DatabaseFileEdit} create={DatabaseFileCreate} />
  </Admin>
);
