import React from "react";
import Link from "next/link";
import { removeToken } from "../../../services/auth";
import { useRouter } from "next/router";
import {
  AccountCircle,
  VpnKey,
  Info,
  ExitToApp,
  AddShoppingCart,
  OfflineBolt,
  LiveTv,
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
      fontWeight: 400,
      textTransform: "uppercase",
      color: theme.palette.secondary.main,
      outline: "none",
      textAlign: "center",
      margin: "10px auto 20px auto",
      borderBottom: `1px solid #e2e2e2`,
    },

    menuItem: {
      maxWidth: "200px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      fontWeight: 400,
      fontSize: "1em",
      display: "flex",
      justifyContent: "center",
      padding: "6px 30px",
      margin: "auto",
      width: "90%",
      marginBottom: "5px",

      "&:first-of-type": {
        fontSize: "1em",
        marginTop: "10px",
        fontWeight: 500,
      },
    },
    menuItemIcon: {
      marginLeft: "5px",
    },
  })
);

const UserMenu = ({ plan, shortId, admin, educator }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    removeToken().then(() => {
      router.push("/");
    });
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
        {shortId ? (
          <h3 className="menu__shortid">
            Tu id: <span>{shortId}</span>
          </h3>
        ) : null}
        {admin ? (
          <>
            <h3
              style={{
                textAlign: "center",
                fontWeight: 500,
                color: "#2b2b2b",
              }}
            >
              Administrador
            </h3>
            <Link href="/dashboard/admin">
              <MenuItem
                className={classes.menuItem}
                onClick={handleClose}
                style={{
                  background: "#f50606",
                  color: "#fff",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                {"Panel de Admin"}
                <OfflineBolt className={classes.menuItemIcon} />
              </MenuItem>
            </Link>
          </>
        ) : (
          <>
            {educator ? (
              <>
                <h3
                  style={{
                    textAlign: "center",
                    fontWeight: 500,
                    color: "#2b2b2b",
                  }}
                >
                  Educador
                </h3>
                <Link href="/dashboard/educator/settings">
                  <MenuItem
                    className={classes.menuItem}
                    onClick={handleClose}
                    style={{
                      background: "#0431c7",
                      color: "#fff",
                      borderRadius: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    {"Panel de Educador"}
                    <LiveTv className={classes.menuItemIcon} />
                  </MenuItem>
                </Link>
              </>
            ) : (
              <>
                {plan && <h3 className="activePlan__badge">Plan activo</h3>}
                <Link href={plan ? "/dashboard/plan" : "/dashboard/pay"}>
                  <MenuItem
                    className={classes.menuItem}
                    onClick={handleClose}
                    style={{
                      background: !plan ? "rgb(48, 216, 14)" : "",
                      color: !plan ? "#fff" : "rgb(48, 216, 14)",
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
                </Link>
              </>
            )}
          </>
        )}
        <Link href="/dashboard/password">
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            Cambiar contraseña
            <VpnKey className={classes.menuItemIcon} />
          </MenuItem>
        </Link>
        <MenuItem
          className={classes.menuItem}
          onClick={() => (handleClose(), logout())}
          style={{
            background: "#fff",
            color: "rgb(236, 2, 2)",
            borderTop: "1px solid rgba(36, 36, 36, 0.11)",
            padding: "12px 0",
            marginTop: "30px",
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
