export function handleMenuAction() {
  return async (dispatch) => {
    dispatch(handleMenu());
  };
}

const handleMenu = () => ({
  type: "HANDLE_MENU",
});
