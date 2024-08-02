export default class HttpAdapter {
    httpClient = undefined;
    resources = undefined;
    constructor(
        httpClient,
        resourcesConfig,
    ) {
        this.httpClient = httpClient;
        this.resources = resourcesConfig;
    }

    async handle(action, resource, params = {}) {
        const [method, urlTemplate] = this.getRoute(this.resources, resource, action);
        const { data, headers = {}, signal, noAuth, ...urlParams } = params;
        const { url, query } = this.buildUrl(urlTemplate, urlParams);

        const requestConfig = {
            url,
            method,
            data,
            params: query,
            headers,
            signal,
            noAuth,
        };

        return this.httpClient(requestConfig).then(response => response?.data);
    }

    getRoute(resources, resource, action) {
        const routes = resources[resource];

        if (!routes) {
            throw Error(`Bad resource '${resource}'`);
        }

        const route = routes[action];

        if (!route) {
            throw Error(`Bad action ${resource}:${action}`);
        }

        return route;
    }

    buildUrl(urlTemplate, params) {
        if (!params) {
            return {
                url: urlTemplate,
                query: null,
            };
        }

        const query = { ...params };

        const url = urlTemplate.replace(/{(\w+)}/g, (match, key) => {
            delete query[key];
            return params[key];
        });

        return {
            url,
            query,
        };
    }
}