import * as t from "../../types/Auth";

export default function handleAuthFormsAction(payload) {
  return async (dispatch) => {
    dispatch(handleAuthForms(payload));
  };
}

const handleAuthForms = (payload) => ({
  type: t.HANDLE_AUTH_FORMS,
  payload,
});
