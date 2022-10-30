import axios from "axios";
const baseURL = 'subscriptions.json';

const API = axios.get({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
