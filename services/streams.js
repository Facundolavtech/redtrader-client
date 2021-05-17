import axios from "axios";
import axiosClient from "../config/axiosClient";

const NMS_ENDPOINTv2 = "https://redtrader-api.com"
  // process.env.NMS_ENDPOINTv2 || "http://localhost:4002/api/";

export async function getLiveStreams() {
  try {
    const response = await axios.get(`${NMS_ENDPOINTv2}/api/streams`);
    let streams = response.data;

    return streams;
  } catch (error) {
    return error.response.data;
  }
}

export async function getStreamsInfo(live_streams, token) {
  try {
    const response = await axiosClient.get("/lives/streams/info", {
      params: {
        streams: live_streams,
      },
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 200) {
      return {
        streams: response.data,
        status: response.status,
      };
    } else {
      return {
        status: response.status,
      };
    }
  } catch (error) {
    return error.response.data;
  }
}

export async function getEducator(id, token) {
  try {
    const response = await axiosClient.get(`/lives/educator/info/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 200) {
      return {
        educator: response.data.educator,
        status: response.status,
      };
    } else {
      return {
        status: response.status,
      };
    }
  } catch (error) {
    return error.response.data;
  }
}
