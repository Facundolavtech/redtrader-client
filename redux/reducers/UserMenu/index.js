import * as t from "../../types/UserMenu";

const initialState = {
  open: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case t.HANDLE_MENU:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
}
