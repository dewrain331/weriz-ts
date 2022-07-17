import axios from "axios";
import dotenv from "dotenv";
import path from "path";

if (process.env.REACT_ENV === "local") {
  dotenv.config({ path: path.join(__dirname, "./.env.local") });
}

const Api = axios.create({
  baseURL: SERVER_URL,
  timeout: 30000,
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
  }
);

// Response handler
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(`Error occurred : ${error}`);
    return Promise.reject(error);
  }
);

export default Api;