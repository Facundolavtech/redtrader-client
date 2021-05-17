import axios from "axios";

const API_ENDPOINT = process.env.API_ENDPOINTv2 || "http://localhost:4001/api";

// "https://redtrader-api.com:9443/api"

const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
