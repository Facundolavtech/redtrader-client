import { ListItem, ListItemText } from "@material-ui/core";
import { List } from "@material-ui/icons";
import React from "react";

const PartnerList = () => {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default PartnerList;
