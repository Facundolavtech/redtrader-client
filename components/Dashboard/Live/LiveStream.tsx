import React from "react";
import LiveStreamChat from "./LiveStreamChat";
import VideoPlayerComponent from "./VideoPlayerComponent";

const LiveStream = ({ educator }) => {
  return (
    <div className="livestream__container">
      <div className="livestream__title">
        <h2>Clase en vivo de {educator.name}</h2>
      </div>
      <div className="livestream">
        <VideoPlayerComponent stream_key={educator.stream_key} />
        <LiveStreamChat stream_key={educator.stream_key} />
      </div>
    </div>
  );
};

export default LiveStream;
