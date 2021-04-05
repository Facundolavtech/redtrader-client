import axiosClient from "../config/axiosClient";

export async function getVideos(token) {
  try {
    const getVideoList = await axiosClient.get("/videos", {
      headers: {
        Authorization: token,
      },
    });

    const response = getVideoList.data;

    return response;
  } catch (error) {
    return {
      msg: error.data,
    };
  }
}
