import axios from 'axios';
import store from '@/store'


const client = axios.create({
  baseURL: 'http://localhost:8080/'
});

client.interceptors.request.use(
  config => {
    const token = store.getters.token;

    if (!token) {
      return config;
    }

    const newConfig = {
      headers: {},
      ...config
    };

    newConfig.headers.Authorization = `Bearer ${token}`;
    return newConfig;
  },
  e => Promise.reject(e)
);

client.interceptors.response.use(
  r => r,
  async error => {
    const refreshToken = store.getters.refreshToken;
    const refreshRequest = store.getters.refreshRequest;
    if (
      !refreshToken ||
      error.response.status !== 401 ||
      error.config.retry
    ) {
      throw error;
    }

    if (!refreshRequest) {
      store.commit('SET_REFRESH_REQUEST', this.client.post('/auth/refresh', {
        refreshToken: refreshToken
      }));
    }
    const { data } = await refreshRequest;
    store.commit('SET_TOKEN', data.token)
    store.commit('SET_REFRESH_TOKEN', data.refreshToken)
    const newRequest = {
      ...error.config,
      retry: true
    };

    return client(newRequest);
  }
);

export default client;
