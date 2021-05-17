import axios from "axios";

const API_ENDPOINT = process.env.API_ENDPOINTv2 || "http://localhost:4001/api";

const axiosClient = axios.create({
  baseURL: "http://localhost:4001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
