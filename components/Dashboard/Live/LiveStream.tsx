import { LiveTv } from "@material-ui/icons";
import React from "react";
import LiveStreamChat from "./LiveStreamChat";
import VideoPlayerComponent from "./VideoPlayerComponent";

const LiveStream = ({ educator }) => {
  return (
    <div className="livestream__container">
      <div className="livestream__title">
        <div className="livestream__title-thumb">
          <img
            src={educator.educator_info.educator_thumb}
            alt={educator.name}
          />
        </div>
        <div className="livestream__title-name">
          <h2>{educator.name}</h2>
        </div>
      </div>
      <div className="livestream">
        <VideoPlayerComponent stream_key={educator.educator_info.stream_key} />
        <LiveStreamChat
          stream_key={educator.educator_info.stream_key}
          educatorId={educator.short_id}
        />
      </div>
    </div>
  );
};

export default LiveStream;
