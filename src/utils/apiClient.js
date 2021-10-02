import Axios from 'axios';

let _axios;

export class HTTPClient {

  constructor (baseURL) {
    if (_axios) return _axios;

    _axios = Axios.create({
      baseURL,
    });
  }
  
  async get (url, params, options) {
    try {
      const response = await _axios.get(url, {
        params,
        ...options,
      });
      const data = await response.data;
      return data;
    } catch(error) {
      throw error;
    }
  }
}