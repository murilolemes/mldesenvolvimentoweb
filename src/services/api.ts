import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});
