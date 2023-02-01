import axios, { AxiosRequestConfig } from "axios";

const service = axios.create({
  baseURL: `${process.env.VUE_APP_URL}:${process.env.VUE_APP_PORT}/api`,
  headers: {
    "Content-type": "application/json",
  },
});

// http request 請求攔截器，有token值則配置上token值
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // if (store.state.token && config.headers) {
    //   config.headers.Authorization = `Bearer ${store.state.token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

class Ajax {
  get(url: string, data: object | null = null) {
    return service.get(url, { params: data }).catch((e) => {});
  }
  post(url: string, data: object) {
    return service.post(url, data).catch((e) => {});
  }
  put(url: string, data: object) {
    return service.put(url, data).catch((e) => {});
  }

  delete(url: string, id: string) {
    return service.delete(`${url}/${id}`);
  }
}
export default new Ajax();
