import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { School, Telegram } from "@material-ui/icons";
import VideoList from "../VideoList";
import TelegramTab from "../Telegram";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DashboardTabs({ videos, plan }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          <Tab label="Academia" icon={<School />} {...a11yProps(0)} />
          <Tab
            label="Señales de telegram"
            icon={<Telegram />}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="videolist__container">
          <VideoList videos={videos} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="telegram__container">
          <TelegramTab plan={plan} />
        </div>
      </TabPanel>
    </div>
  );
}
