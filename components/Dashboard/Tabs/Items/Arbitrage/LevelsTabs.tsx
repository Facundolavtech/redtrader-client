import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import Template from "./Levels/Template";

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
      id={`leveltab-${index}`}
      aria-labelledby={`leveltab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="arbitrage__videos__container">{children}</div>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `leveltab-${index}`,
    "aria-controls": `level-tabpanel-${index}`,
  };
}

export default function VideoList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        orientation="horizontal"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        aria-label="levels tabs"
        className="tabs"
      >
        <Tab label="Nivel Basico" {...a11yProps(0)} />
        <Tab label="Nivel Intermedio" {...a11yProps(1)} />
        <Tab label="Nivel Avanzado" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Template level="basic" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Template level="intermediate" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Template level="advanced" />
      </TabPanel>
    </>
  );
}
