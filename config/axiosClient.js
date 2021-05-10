import axios from "axios";

const productionURL =
  "http://ec2-18-231-117-23.sa-east-1.compute.amazonaws.com/api/";
const developmentURL = "http://localhost:4001/api";

const axiosClient = axios.create({
  baseURL: productionURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
