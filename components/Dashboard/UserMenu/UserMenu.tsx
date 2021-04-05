import React, { useState } from "react";
import { removeToken } from "../../../services/auth";
import { useRouter } from "next/router";
import {
  AccountCircle,
  VpnKey,
  Info,
  ExitToApp,
  AddShoppingCart,
} from "@material-ui/icons";
import {
  createStyles,
  makeStyles,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    menuTitle: {
      width: "90%",
      paddingBottom: "10px",
      fontSize: "1.3em",
      fontWeight: 500,
      textTransform: "uppercase",
      color: theme.palette.secondary.main,
      outline: "none",
      textAlign: "center",
      margin: "10px auto 20px auto",
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },

    menuItem: {
      maxWidth: "200px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      fontWeight: 500,
      fontSize: "1.1em",
      display: "flex",
      justifyContent: "center",
      padding: "6px 20px",
      margin: "auto",
      width: "90%",
      marginBottom: "10px",

      "&:first-of-type": {
        marginTop: "10px",
      },
    },
    menuItemIcon: {
      marginLeft: "5px",
    },
  })
);

const UserMenu = ({ plan }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    removeToken();
    router.push("/");
  };

  const classes = useStyles();

  return (
    <div className="dashboard__menu ">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        <AccountCircle />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <h2 className={classes.menuTitle}>Menu</h2>
        <MenuItem
          className={classes.menuItem}
          onClick={handleClose}
          style={{
            background: !plan ? "green" : "",
            color: !plan ? "#fff" : "green",
            borderRadius: !plan ? "5px" : "",
          }}
        >
          {plan ? "Informacion del plan" : "Adquirir plan"}
          {plan ? (
            <Info className={classes.menuItemIcon} />
          ) : (
            <AddShoppingCart className={classes.menuItemIcon} />
          )}
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          Cambiar contraseña
          <VpnKey className={classes.menuItemIcon} />
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={() => (handleClose(), logout())}
          style={{
            background: "#fff",
            color: "rgb(236, 2, 2)",
            borderTop: "1px solid rgba(36, 36, 36, 0.11)",
            padding: "8px 0",
            marginTop: "20px",
          }}
        >
          Cerrar sesion
          <ExitToApp className={classes.menuItemIcon} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
