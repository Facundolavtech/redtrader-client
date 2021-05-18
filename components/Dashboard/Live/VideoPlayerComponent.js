import React, { useState } from "react";
import dynamic from "next/dynamic";

const NMS_ENDPOINTv2 = "https://redtrader-api.com:8443";

const VideoPlayer = dynamic(() => import("react-video-js-player"), {
  ssr: false,
});

const VideoPlayerComponent = ({ stream_key }) => {
  const [videoSettings] = useState({
    video: {
      src: `${NMS_ENDPOINTv2}/live/${stream_key}/index.m3u8`,
      type: "aplication/x-mpegURL",
    },
  });

  return (
    <div className="videojs__container">
      <VideoPlayer
        controls={true}
        src={videoSettings.video.src}
        bigPlayButton={true}
      />
    </div>
  );
};

export default VideoPlayerComponent;
