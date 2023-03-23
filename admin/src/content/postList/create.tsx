import React from 'react';
import { Create, ReferenceInput, ResourceComponentPropsWithId, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { ApiTagEnum } from '../../common/api.enum';

export const PostCreate = (props: ResourceComponentPropsWithId) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source='previewId' reference={ApiTagEnum.DatabaseFiles}>
        <SelectInput optionText='filename' />
      </ReferenceInput>
      <ReferenceInput source='categoryId' reference={ApiTagEnum.Categories}>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <TextInput source='text' multiline />
    </SimpleForm>
  </Create>
);
