import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] =
  "*";
const instance = axios.create({
  baseURL: "https://inf-cinema.herokuapp.com/api/v1/",
  withCredentials: true,
});

export default instance;
