import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import AuthContext from "../../../context/Auth";
import handleAuthFormsAction from "../../../redux/actions/Auth";
import handleAuthModalAction from "../../../redux/actions/Modal";

const ComenzarButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const handleModal = () => {
    dispatch(handleAuthModalAction());
  };

  const handleAuthForms = (payload) => {
    dispatch(handleAuthFormsAction(payload));
  };

  return (
    <Button
      variant="contained"
      onClick={() => {
        user && user.confirmed ? router.push("/dashboard") : handleModal(),
          handleAuthForms(false);
      }}
      disableRipple
    >
      Comenzar
    </Button>
  );
};

export default ComenzarButton;
