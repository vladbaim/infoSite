import React from 'react';
import { Datagrid, EditButton, ImageField, List, ResourceComponentProps, TextField } from 'react-admin';

export const DatabaseFileList = (props: ResourceComponentProps) => (
    <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='filename' />
            <ImageField source='url' />
            <EditButton />
        </Datagrid>
    </List>
);
