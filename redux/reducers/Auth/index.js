import * as t from "../../types/Auth";

export default function (state = { signInForm: true }, action) {
  switch (action.type) {
    case t.HANDLE_AUTH_FORMS:
      return {
        ...state,
        signInForm: action.payload,
      };

    default:
      return state;
  }
}
