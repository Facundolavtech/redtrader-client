import axiosClient from "../config/axiosClient";

export async function getVideos(token) {
  try {
    const response = await axiosClient
      .get("/videos", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        const videoList = res.data;
        const sortVideos = videoList.sort((a, b) => a.order - b.order);
        return {
          videos: sortVideos,
          status: res.status,
        };
      })
      .catch((err) => {
        return err.response.status;
      });

    return response;
  } catch (error) {
    return {
      status: 500,
    };
  }
}
