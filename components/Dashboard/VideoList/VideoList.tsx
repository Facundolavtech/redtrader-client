import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { Lock, PlayCircleFilled } from "@material-ui/icons";
import VideoTemplate from "./VideoTemplate";

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <div className="video__container">{children}</div>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 350,
  },
  tabs: {
    width: "30%",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VideoList({ videos }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="primary"
      >
        {videos.map((video, index) => (
          <Tab
            key={index}
            label={video.title}
            {...a11yProps(index)}
            disabled={video.src === null ? true : false}
            icon={video.src === null ? <Lock /> : <PlayCircleFilled />}
          />
        ))}
      </Tabs>
      {videos.map((video, index) => (
        <TabPanel value={value} index={index} key={index}>
          <VideoTemplate title={video.title} src={video.src} key={index} />
        </TabPanel>
      ))}
    </div>
  );
}
