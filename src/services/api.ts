import axios from "axios";

export const apiGitHub = axios.create({
  baseURL: 'https://api.github.com',
});

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});
