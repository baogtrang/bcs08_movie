import axios from "axios";
import { userLocalStorage } from "./localService";
import { setLoadingOn, setLoadingOff } from "../redux/spinnerSlice";
import { store } from "..";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjAzLzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMjEwMjQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEyMjUwMDAwfQ.YeDhc_oSixV2XtFPDzcpxFhBos5832JpQpndHNoqZLk";


export const configHeaders = () => {
  return {
    TokenCybersoft: TOKEN_CYBER,
  };
};
export const BASE_URL = "https://movienew.cybersoft.edu.vn/api";

// axios instance: https://axios-http.com/docs/instance
export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
    Authorization: "Bearer" + userLocalStorage.get()?.accessToken,
  },
});

// Every request made using https will automatically have the base URL and the required headers.
// It centralizes the API configuration, making it easier to manage and change if needed.
console.log("Token:", TOKEN_CYBER);
console.log("Authorization:", userLocalStorage.get()?.accessToken);

// xây dựng chức năng login: config 1 lần, sau đó áp dụng cho mọi api
// 1. spinnerSplice giữ trạng thái loading
// 2. dispatch => dispatch ngoài component


// https://axios-http.com/docs/interceptors
//interceptor can thiệp vào request và response từ api
// Add a request interceptor, lúc API ĐI
https.interceptors.request.use(
  function (config) {
    store.dispatch(setLoadingOn());
    console.log("api đi")
    // Do something before request is sent
    return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor, lúc API VỀ
https.interceptors.response.use(
  function (response) {
    store.dispatch(setLoadingOff());
    console.log("api về");
  return response;
}, function (error) {
  return Promise.reject(error);
});