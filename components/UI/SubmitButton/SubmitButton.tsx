import { Button, CircularProgress } from "@material-ui/core";
import React from "react";

const SubmitButton = (props) => {
  const { buttonText, loading } = props;

  return (
    <Button
      variant="contained"
      color="primary"
      type={loading ? "button" : "submit"}
      className="submit__btn"
    >
      {loading ? (
        <CircularProgress style={{ color: "#fff" }} size={23} />
      ) : (
        <>{buttonText}</>
      )}
    </Button>
  );
};

export default SubmitButton;
