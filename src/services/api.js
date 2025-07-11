import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "16767b1005c6db172fc6e9cc90370367",
    linguage: "pt-BR",
    page: "1",
  },
});

export default api;
