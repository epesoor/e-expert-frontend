import HttpAdapter from '@/api/HttpAdapter';
import httpClient from '@/api/httpClient';
import resources from '@/api/resources';

const baseURL = import.meta.env.VITE_SERVER_ENDPOINT;

const dataAdapter = new HttpAdapter(httpClient(baseURL), resources);

const apiService = new Proxy(
    {},
    {
        get: (_, action) => (resource, params) => dataAdapter.handle(action, resource, params),
    }
);

export default apiService;
