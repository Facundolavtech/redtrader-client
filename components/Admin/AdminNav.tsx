import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import NavItems from "./NavItems";
import Plan from "./Tabs/Plan/Plan";
import Admin from "./Tabs/Admin/Admin";
import DeleteAccount from "./Tabs/DeleteAccount/DeleteAccount";
import UpdateCoupon from "./Tabs/Coupons/UpdateCoupon";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    paper: {
      marginTop: "80px",
      width: 260,
      borderRight: "1px solid rgba(73, 73, 73, 0.05)",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      marginLeft: 260,
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function AdminNav({ id, token }) {
  const tabList = [
    {
      value: <Plan id={id} />,
    },
    { value: <Admin id={id} /> },
    { value: <UpdateCoupon id={id} token={token} /> },
    { value: <DeleteAccount id={id} /> },
  ];

  const [tab, setTab] = useState(tabList[0].value);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.paper,
        }}
      >
        <List>
          {NavItems.map(({ name, icon }, index) => (
            <>
              <ListItem
                button
                key={index}
                style={{ marginBottom: "5px", minHeight: "70px" }}
                onClick={() => setTab(tabList[index].value)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>{tab}</main>
    </div>
  );
}
