import React from 'react';
import { Datagrid, EditButton, List, NumberField, ResourceComponentProps, TextField } from 'react-admin';

export const CategoryList = (props: ResourceComponentProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <NumberField source='postCount' />
      <EditButton />
    </Datagrid>
  </List>
);
