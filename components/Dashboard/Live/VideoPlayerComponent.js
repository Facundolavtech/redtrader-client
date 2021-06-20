import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-css";

const VideoPlayerComponent = ({ stream_key, thumb }) => {
  const videoNode = useRef(null);
  const player = useRef(null);

  const [videoState] = useState({
    NMS_ENDPOINT: process.env.NEXT_PUBLIC_NMS_ENDPOINT,
  });

  let data = {
    src: `${videoState.NMS_ENDPOINT}/live/${stream_key}/index.m3u8`,
    poster: thumb,
    controls: true,
    autoplay: false,
  };

  useEffect(() => {
    player.current = videojs(videoNode.current, {
      controls: data.controls,
      autoplay: data.autoplay,
      poster: data.poster,
      fill: true,
      fluid: true,
      preload: "auto",
      liveui: true,
    });

    player.current.css({
      controlBar: {
        width: "100%",
        fontSize: "1.4em",
        background: "#3a3a3a",
      },
      bigPlayButton: {
        borderRadius: "50%",
        width: "130px",
        height: "130px",
        lineHeight: "130px",
        fontSize: "60px",
        border: "none",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        margin: "auto",
        background: "#3a3a3a",
      },
    });

    player.current.src({ type: "application/x-mpegURL", src: data.src });

    return () => player.current.dispose();
  }, [data.src, data.controls, data.autoplay, data.poster]);

  return (
    <div className="videojs__container">
      <video
        ref={videoNode}
        className="video-js vjs-big-play-centered vjs-default-skin vjs-live"
      ></video>
    </div>
  );
};

export default VideoPlayerComponent;
