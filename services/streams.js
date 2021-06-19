import axios from "axios";
import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";
import basic from "basic-authorization-header";

const NMS_ENDPOINT = process.env.NEXT_PUBLIC_NMS_ENDPOINT;

export async function getLiveStreams() {
  try {
    const response = await axios.get(
      `${NMS_ENDPOINT}/api/streams?sign=redtraderNMS2021`,
      {
        headers: { Authorization: basic("nms_admin", "lolpbe888") },
      }
    );
    let streams = response.data;

    return streams;
  } catch (error) {
    return toast.error("Ocurrio un error");
  }
}

export async function getStreamsInfo(live_streams, token) {
  try {
    const response = await axiosClient
      .get("/lives/streams/info", {
        params: {
          streams: live_streams,
        },
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        return {
          streams: res.data,
          status: res.status,
        };
      })
      .catch((err) => {
        return err.response.data;
      });

    return response;
  } catch (error) {
    return toast.error("Ocurrio un error");
  }
}

export async function getEducator(id, token) {
  try {
    const response = await axiosClient
      .get(`/lives/educator/info/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        return {
          educator: res.data.educator,
          status: res.status,
        };
      })
      .catch((err) => {
        return err.response.data;
      });

    return response;
  } catch (error) {
    return toast.error("Ocurrio un error");
  }
}

export async function getEducators(token) {
  try {
    const response = await axiosClient
      .get(`/lives/streams/educators`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        return {
          educators: res.data,
          status: res.status,
        };
      })
      .catch((err) => {
        return err.response.data;
      });

    return response;
  } catch (error) {
    return null;
  }
}
