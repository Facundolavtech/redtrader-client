import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { School, AccountBalance, LiveTv, Smartphone } from "@material-ui/icons";
import VideoList from "../VideoList";
import SignalsTab from "../Signals";
import BrokersTab from "../Brokers";
import LiveTab from "../Live/LiveTab";

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
  tabs: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
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
      <AppBar position="static" color="default" className="tabs__appbar">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
        >
          <Tab label="Academia" icon={<School />} {...a11yProps(0)} />
          <Tab label="Red Trade App" icon={<Smartphone />} {...a11yProps(1)} />
          <Tab label="RedTrader Live" icon={<LiveTv />} {...a11yProps(2)} />
          <Tab label="Brokers" icon={<AccountBalance />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="videolist__container">
          <VideoList videos={videos} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="signals__tab__container">
          <SignalsTab plan={plan} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="lives__container">
          <LiveTab plan={plan} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="brokers__container">
          <BrokersTab />
        </div>
      </TabPanel>
    </div>
  );
}
