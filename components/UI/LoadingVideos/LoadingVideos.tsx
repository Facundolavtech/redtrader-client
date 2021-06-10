import { CircularProgress } from "@material-ui/core";

const LoadingVideos = () => {
  return (
    <CircularProgress
      size={50}
      color="primary"
      style={{ margin: "auto", marginTop: "100px" }}
    />
  );
};

export default LoadingVideos;
