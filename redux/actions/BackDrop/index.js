import * as t from "../../types/BackDrop";

export function handleBackdropAction() {
  return async (dispatch) => {
    dispatch(handleBackdrop());
  };
}

const handleBackdrop = () => ({
  type: t.HANDLE_BACKDROP,
});
