import React, { useState } from "react";
import dynamic from "next/dynamic";

const NMS_ENDPOINTv2 = process.env.NMS_ENDPOINTv2 || "http://localhost:4002";

const VideoPlayer = dynamic(() => import("react-video-js-player"), {
  ssr: false,
});

const VideoPlayerComponent = ({ stream_key }) => {
  const [videoSettings, setVideoSettings] = useState({
    video: {
      src: `${NMS_ENDPOINTv2}/api/live/${stream_key}/index.m3u8`,
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
