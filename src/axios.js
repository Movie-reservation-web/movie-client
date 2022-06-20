import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] =
  "http://localhost:8080";
const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  withCredentials: true,
});

export default instance;
