/* eslint-disable */

import axios from "axios";

const Api = axios.create({
  baseURL: `http://${window.location.hostname}:5001`,
  timeout: 10000, // ms
});

// Request handler
Api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");

    config.headers["Content-Type"] = "application/json, charset=utf-8";
    accessToken && (config.headers["Authorization"] = `Bearer ${accessToken}`);

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
