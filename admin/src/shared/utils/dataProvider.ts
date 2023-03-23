import { DataProvider, fetchUtils } from 'react-admin';
import crudProvider from 'ra-data-nestjsx-crud';
import { ApiTagEnum } from '../../common/api.enum';

export const apiUrl = '';

export const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const auth = localStorage.getItem('auth');
  if (auth) {
    const headersWithAuth = options.headers as Headers;
    headersWithAuth.set('Authorization', `Bearer ${JSON.parse(auth)}`);
    options.headers = headersWithAuth;
  }
  return fetchUtils.fetchJson(url, options);
};

const crudDataProvider = crudProvider(apiUrl, httpClient);

export const dataProvider: DataProvider = {
  ...crudDataProvider,
  getMany: async (resource, params) => {
    const data = await crudDataProvider.getMany(resource, params);
    return new Promise((resolve) => resolve(data.data as any));
  },
  create: (resource, params) => {
    if (resource !== ApiTagEnum.DatabaseFiles) {
      return crudDataProvider.create(resource, params);
    }
    const formData = new FormData();

    formData.append('file', params.data.file.rawFile);

    return httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: formData
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id }
    }));
  }
};
