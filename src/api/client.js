import superagent from 'superagent';
import { LOCAL_API_BASE } from './config';

class ApiClient {
    constructor(client = superagent, endpoint = LOCAL_API_BASE) {
        this.client = client;
        this.endpoint = endpoint;
    }

    request(m, path, d = {}, data = {}) {
    	const method = m.toLowerCase();
        const url = `${this.endpoint}${path}`;
        let request = this.client[method](url);

        request.set('Accept', 'application/json');
        request.send(data);
        
        return request;
    }

    get(path, data = {}) {
        return this.request('get', path, data);
    }

    del(path, data = {}) {
        return this.request('del', path, data);
    }

    post(path, data = {}) {
        return this.request('post', path, data);
    }

    put(path, data = {}) {
        return this.request('put', path, data);
    }

    patch(path, data = {}) {
        return this.request('patch', path, data);
    }
}

export default ApiClient;