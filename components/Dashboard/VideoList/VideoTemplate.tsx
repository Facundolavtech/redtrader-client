const VideoTemplate = ({ title, src }) => {
  return (
    <iframe
      src={src}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      title={title}
    ></iframe>
  );
};

export default VideoTemplate;
