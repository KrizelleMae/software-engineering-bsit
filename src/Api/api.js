import axios from "axios";

// const url = "http://localhost/software-engineering-backend/api/";
const url = "http://192.168.1.9:8000/api";
// const url = "https://wmsu-ccs.website/api";

const api = axios.create({
  baseURL: url,
  // delayed: true,
});

// api.interceptors.request.use((config) => {
//   if (config.delayed) {
//     return new Promise((resolve) => setTimeout(() => resolve(config), 600));
//   }
//   return config;
// });

export default api;
