import axios from "axios";

const api = axios.create({
  baseURL: "https://adopet-api-cm3.herokuapp.com/",
});

export default api;
