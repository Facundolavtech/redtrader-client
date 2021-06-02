import axios from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const axiosClient = axios.create({
  baseURL: `${API_ENDPOINT}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
