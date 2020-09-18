const axios = require("axios");

const api = axios.create({
  baseURL: "https://limelightdevs.herokuapp.com",
  headers: {
    Accept: "application/json",
  },
});

export default api;
