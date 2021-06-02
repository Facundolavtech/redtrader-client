import { CircularProgress } from "@material-ui/core";
import React from "react";

const BtnLoading = ({ color, size }) => {
  return <CircularProgress style={{ color }} size={size} />;
};

export default BtnLoading;
