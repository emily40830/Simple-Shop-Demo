import axios from "axios";

const apiHost = import.meta.env.VITE_API_HOST;
const apiToken = import.meta.env.VITE_TOKEN;

const appAxios = axios.create({ baseURL: apiHost });

appAxios.interceptors.request.use(
  (configs) => {
    const token = apiToken;

    configs.headers.authorization = `Bearer ${token}`;
    return configs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

appAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let { response } = error;
    return Promise.reject(response);
  }
);

export default appAxios;
