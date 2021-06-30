const VideoTemplate = ({ title, src }) => {
  return (
    <iframe
      src={src}
      frameBorder="0"
      height="500"
      width="500"
      allow="autoplay; fullscreen; picture-in-picture"
      title={title}
    ></iframe>
  );
};

export default VideoTemplate;
