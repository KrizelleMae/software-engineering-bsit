import axios from "axios";

const url = "http://localhost/software-engineering-backend/api/";

const api = axios.create({
  baseURL: url,
});

export default api;
