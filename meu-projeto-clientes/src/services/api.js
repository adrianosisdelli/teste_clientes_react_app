import axios from "axios";

const api = axios.create({
  baseURL: "http://172.17.0.5:3000",
});

export default api;
