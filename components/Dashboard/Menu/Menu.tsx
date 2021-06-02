import React from "react";
import { AccountCircle } from "@material-ui/icons";
import { Button, Menu } from "@material-ui/core";
import RootMenus from "./RootMenus";
import { handleMenuAction } from "../../../redux/actions/UserMenu";
import { useDispatch, useSelector } from "react-redux";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = useSelector((state: any) => state.usermenu.open);

  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(handleMenuAction());
  };

  return (
    <div className="dashboard__menu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(e) => {
          handleClick(e), handleMenu();
        }}
        variant="contained"
        color="primary"
      >
        <AccountCircle />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleMenu}
      >
        <RootMenus />
      </Menu>
    </div>
  );
};

export default UserMenu;
