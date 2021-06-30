import React from "react";
import EducatorTitle from "../../UI/Lives/EducatorTitle";
import LiveStreamChat from "./LiveStreamChat";
import VideoPlayerComponent from "./VideoPlayerComponent";

const LiveStream = ({ educator }) => {
  return (
    <div className="livestream__container">
      <EducatorTitle
        thumb={educator.thumbnail}
        name={educator.name}
        title={`Clase de ${educator.name}`}
        borderBottom={false}
      />
      <div className="livestream">
        <VideoPlayerComponent
          stream_key={educator.stream_key}
          thumb={educator.thumbnail}
        />
        <LiveStreamChat
          stream_key={educator.stream_key}
          educatorId={educator.short_id}
        />
      </div>
    </div>
  );
};

export default LiveStream;
