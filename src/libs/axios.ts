import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com", // Substitua pelo URL da API
  timeout: 10000,
});