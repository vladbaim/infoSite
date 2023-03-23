import React from 'react';
import { Datagrid, EditButton, ImageField, List, ReferenceField, ResourceComponentProps, TextField } from 'react-admin';
import { ApiTagEnum } from '../../common/api.enum';

export const PostList = (props: ResourceComponentProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <ReferenceField source='previewId' reference={ApiTagEnum.DatabaseFiles}>
        <ImageField source='url' />
      </ReferenceField>
      <ReferenceField source='categoryId' reference={ApiTagEnum.Categories}>
        <TextField source='name' />
      </ReferenceField>
      <TextField source='title' />
      <EditButton />
    </Datagrid>
  </List>
);
