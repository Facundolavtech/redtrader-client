import axiosClient from "../config/axiosClient";

export async function getVideos(token) {
  try {
    const getVideoList = await axiosClient.get("/videos", {
      headers: {
        Authorization: token,
      },
    });

    const response = getVideoList.data;

    const sortVideos = response.sort((a, b) => a.order - b.order);

    return sortVideos;
  } catch (error) {
    return {
      msg: error.data,
    };
  }
}
