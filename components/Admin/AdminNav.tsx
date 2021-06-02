import React, { useState } from "react";
import {
  Drawer,
  List,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import NavItems from "./NavItems";
import useStyles from "./Styles";
import ArrowBackBtn from "../BackArrow";

export default function AdminNav() {
  const [tab, setTab] = useState(NavItems[0].value);
  const [selectedTab, setSelectedTab] = useState(0);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.paper,
        }}
        className="admin-nav__drawer"
      >
        <List>
          {NavItems.map(({ name, icon, value }, index) => (
            <>
              <ListItem
                button
                key={index}
                style={{ marginBottom: "5px", minHeight: "70px" }}
                onClick={() => {
                  setTab(value), setSelectedTab(index);
                }}
                className={selectedTab === index && "selected"}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </>
          ))}
        </List>
      </Drawer>
      <main className="admin-nav__content">
        <>
          <ArrowBackBtn src="/dashboard" />
          {tab}
        </>
      </main>
    </div>
  );
}
