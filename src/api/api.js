import axios from "axios";

const api = axios.create({
  baseURL: "https://online-survey-server.onrender.com",
});

export default api;
