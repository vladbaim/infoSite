import React from 'react';
import { Create, TextInput, ResourceComponentPropsWithId, SimpleForm } from 'react-admin';

export const CategoryCreate = (props: ResourceComponentPropsWithId) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
    </SimpleForm>
  </Create>
);
