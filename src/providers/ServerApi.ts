import axios from 'axios';

const baseURL = import.meta.env.VITE_SERVER_API_URL;

export const ServerApi = axios.create({ baseURL });
