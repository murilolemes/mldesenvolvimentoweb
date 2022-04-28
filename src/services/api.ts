import axios from "axios";

export const api = axios.create({
  baseURL: '10.43.24.53:3000/api',
});
