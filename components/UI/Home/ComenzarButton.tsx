import React from "react";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const ComenzarButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="contained"
      onClick={() => router.push("/signup")}
      disableRipple
    >
      Comenzar
    </Button>
  );
};

export default ComenzarButton;
