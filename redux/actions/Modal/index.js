import * as t from "../../types/Modal";

export default function handleAuthModalAction() {
  return async (dispatch) => {
    dispatch(handleAuthModal());
  };
}

const handleAuthModal = () => ({
  type: t.HANDLE_AUTH_MODAL,
});

export function handleCloseAuthModalAction() {
  return async (dispatch) => {
    dispatch(handleCloseAuthModal());
  };
}

const handleCloseAuthModal = () => ({
  type: t.HANDLE_CLOSE_AUTH_MODAL,
});
