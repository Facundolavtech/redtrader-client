import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://redtrader-api.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
