import React from 'react';
import { Edit, ReferenceInput, ResourceComponentPropsWithId, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { ApiTagEnum } from '../../common/api.enum';

export const PostEdit = (props: ResourceComponentPropsWithId) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='id' disabled />
      <ReferenceInput source='previewId' reference={ApiTagEnum.DatabaseFiles}>
        <SelectInput optionText='filename' />
      </ReferenceInput>
      <ReferenceInput source='categoryId' reference={ApiTagEnum.Categories}>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <TextInput source='text' multiline />
    </SimpleForm>
  </Edit>
);
