import axios from "axios";

const productionURL = "https://redtrader-api.herokuapp.com/api/";
const developmentURL = "http://localhost:4001/api";

const axiosClient = axios.create({
  baseURL: developmentURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
