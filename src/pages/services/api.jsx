import axios from "axios";

export const key = "84073456136498d278ad88af2737a5c235da940b";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
