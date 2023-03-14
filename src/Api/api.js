import axios from "axios";

// const url = "http://localhost/software-engineering-backend/api/";
const url = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: url,
});

export default api;
