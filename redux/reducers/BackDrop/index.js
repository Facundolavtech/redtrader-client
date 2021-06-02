import * as t from "../../types/BackDrop";

const initialState = {
  active: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case t.HANDLE_BACKDROP:
      return {
        ...state,
        active: !state.active,
      };

    default:
      return state;
  }
}
