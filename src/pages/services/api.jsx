import axios from "axios";

export const key = "3228d54c1ea422eaabdd29b9f39cc703f07e55f8";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
