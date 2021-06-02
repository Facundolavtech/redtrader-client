import { useEffect, useState } from "react";

const VideoTitle = ({ value, videos }) => {
  const [videoTitle, setVideoTitle] = useState(null);

  useEffect(() => {
    if (videos) {
      if (typeof videos[value] !== "undefined") {
        setVideoTitle(videos[value].title);
      }
    }
  }, [value]);

  useEffect(() => {
    if (videos) {
      setVideoTitle(videos[0].title);
    }
  }, [videos]);

  return (
    <div className="videotitle__container">
      <h2>{videoTitle}</h2>
    </div>
  );
};

export default VideoTitle;
