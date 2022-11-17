/* eslint-disable */
import axios from "axios";
import type {
  AxiosRequestConfig,
  AxiosInterceptorManager,
  AxiosInstance,
  AxiosResponse,
} from "axios";

type CustomResponseFormat<T = any> = {
  response: T;
  refreshedToken?: string;
};

interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CustomResponseFormat>>;
  };
}

const Api: CustomInstance = axios.create({
  baseURL: `http://${window.location.hostname}:5001`,
  timeout: 10000, // ms
});

// Request handler
Api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");

    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };

    return config;
  },
  (error) => {
    console.log(`Error occurred : ${error}`);
    return Promise.reject(error);
  },
);

// Response handler
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(`Error occurred : ${error}`);
    return Promise.reject(error);
  },
);

export default Api;
