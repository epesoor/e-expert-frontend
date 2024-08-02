import axios from 'axios';
import { omitBy, isNil } from 'lodash-es';
import queryString from 'query-string';
import { useAuthStore } from '@/stores/authorization';

const httpClient = baseURL => async request => {
    try {
        let authHeaders = {};
        if (!request.noAuth) {
            const { accessToken } = useAuthStore();
            if (!accessToken) {
                throw Error('Your authenticated session has expired');
            }

            authHeaders = {
                Authorization: `Bearer ${accessToken}`,
            };
        }

        return axios.request({
            ...request,
            baseURL,
            paramsSerializer: params => queryString.stringify(params),
            headers: omitBy(
                {
                    ...authHeaders,
                    ...request.headers,
                },
                isNil
            ),
        }).catch(error => {
            const response = error?.response;
            const proxyResponse = typeof response?.data === 'string';
            const message = (proxyResponse && response?.data)
                || response?.data?.message
                || response?.data?.detail
                || error.message;
            if (response.status === 401) {
                const { logOut } = useAuthStore();
                logOut();
            }
            return Promise.reject({
                message,
                ...response,
            });
        });
    } catch (e) {
        return Promise.reject(e);
    }
};

export default httpClient;