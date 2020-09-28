const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:1337",
  headers: {
    Accept: "application/json",
  },
});

export default api;
