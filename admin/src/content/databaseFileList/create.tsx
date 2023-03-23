import React from 'react';
import { Create, ImageField, ImageInput, ResourceComponentPropsWithId, SimpleForm } from 'react-admin';

export const DatabaseFileCreate = (props: ResourceComponentPropsWithId) => (
    <Create {...props}>
        <SimpleForm>
            <ImageInput source='file' label='Picture' accept='image/*'>
                <ImageField source='data' title='filename' />
            </ImageInput>
        </SimpleForm>
    </Create>
);
