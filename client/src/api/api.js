import axios from "axios";
const baseURL = "./users.json";

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
