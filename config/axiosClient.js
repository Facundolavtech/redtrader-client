import axios from "axios";

const API_ENDPOINT = process.env.API_ENDPOINTv2 || "http://localhost:4001/api";
const API_PRODUCTION = "https://redtrader-api.com:9443/api";

const axiosClient = axios.create({
  baseURL: API_PRODUCTION,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
