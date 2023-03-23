import React from 'react';
import { Edit, ResourceComponentPropsWithId, SimpleForm, TextInput } from 'react-admin';

export const DatabaseFileEdit = (props: ResourceComponentPropsWithId) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source='id' disabled />
            <TextInput source='filename' />
        </SimpleForm>
    </Edit>
);
