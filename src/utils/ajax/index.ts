import axios, { AxiosRequestConfig } from "axios";
import { TAuth } from "../../utils/ajax/api/authService";
export const interceptor = (auth: TAuth) => {
  // http request 請求攔截器，有token值則配置上token值
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (auth.token && config.headers)
        config.headers.Authorization = `Bearer ${auth.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

// http response 伺服器響應攔截器
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export interface IAjax {
  get(route: string, data?: object): Promise<any>;
  post(route: string, data?: object): Promise<any>;
  put(route: string, data: object): Promise<any>;
  delete(route: string, id: number): Promise<any>;
}

class Ajax implements IAjax {
  private url: string = "";
  constructor() {
    // 建立基本路由
    const baseUrl = process.env.REACT_APP_URL;
    this.url = `${baseUrl}/api`;
  }

  public get(route: string, data: object | null = null) {
    return axios.get(`${this.url}${route}`, { params: data });
  }
  public post(route: string, data: object = {}) {
    return axios.post(`${this.url}${route}`, data);
  }
  public put(route: string, data: object) {
    return axios.put(`${this.url}${route}`, data);
  }
  public delete(route: string) {
    return axios.delete(`${this.url}${route}`);
  }
}

export default new Ajax();
