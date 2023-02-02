import axios, { AxiosRequestConfig } from "axios";
export const interceptor = (store: any) => {
  // http request 請求攔截器，有token值則配置上token值
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const state = store.getState();
      if (state.auth && state.auth.token && config.headers) {
        config.headers.Authorization = `Bearer ${state.auth.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
interface IAjax {
  get(url: string, data?: object): Promise<any>;
  post(url: string, data: object): Promise<any>;
  put(url: string, data: object): Promise<any>;
  delete(url: string, id: number): Promise<any>;
}

class AjaxService implements IAjax {
  get(url: string, data: object | null = null) {
    return axios.get(url, { params: data });
  }
  post(url: string, data: object) {
    return axios.post(url, data);
  }
  put(url: string, data: object) {
    return axios.put(url, data);
  }
  delete(url: string, id: number) {
    return axios.delete(`${url}/${id}`);
  }
}

export default new AjaxService();
