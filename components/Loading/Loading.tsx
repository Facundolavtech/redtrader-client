import { CircularProgress } from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";

const Loading = () => {
  return (
    <div className="loading__container">
      <Fade>
        <img src="/assets/img/loading-img.png" />
        <CircularProgress size={50} color="primary" />
      </Fade>
    </div>
  );
};

export default Loading;
