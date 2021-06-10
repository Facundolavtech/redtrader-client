import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import RootMenus from "../Menu/RootMenus";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "right";

export default function DrawerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      className={clsx(classes.list)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="dashboard__menu-container">
        <RootMenus />
      </div>
    </div>
  );

  return (
    <>
      <Button
        onClick={toggleDrawer("right", true)}
        className="dashboard__drawer-open-btn"
      >
        Menu <Menu />
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
