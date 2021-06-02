import * as t from "../../types/Modal";

const initialState = {
  auth_modal: {
    open: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case t.HANDLE_AUTH_MODAL:
      return {
        ...state,
        auth_modal: { ...state.auth_modal, open: !state.auth_modal.open },
      };
    case t.HANDLE_CLOSE_AUTH_MODAL:
      return {
        ...state,
        auth_modal: { open: false },
      };

    default:
      return state;
  }
}
