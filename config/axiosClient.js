import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4001/api";

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
