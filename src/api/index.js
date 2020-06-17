import axios from "axios";
import * as Constants from "../util/constants";

const cbtApi = axios.create({
  baseURL: "https://localhost:4002",

  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

cbtApi.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      Constants.ACCESS_TOKEN
    )}`;

    return config;
  },
  function (error) {}
);

export default cbtApi;
