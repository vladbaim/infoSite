import { AuthProvider } from 'ra-core';
import { ApiTagEnum } from '../../common/api.enum';
import { AccessTokenDto, AuthLoginApiArg } from '../../common/api.generated';

import { apiUrl, httpClient } from './dataProvider';

export const authProvider: AuthProvider = {
    login: async (auth: AuthLoginApiArg) =>
        httpClient(`${apiUrl}/${ApiTagEnum.Auth}/login`, {
            method: 'POST',
            body: JSON.stringify(auth)
        })
            .then(({ json }: { json: AccessTokenDto }) => {
                localStorage.setItem('auth', JSON.stringify(json.access_token));
                Promise.resolve();
            })
            .catch(() => Promise.reject()),
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => Promise.resolve()
};
