import React, { useContext, useEffect, useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import AuthContext from "../../../../../context/Auth";
import { getVideos } from "../../../../../services/videos";
import { toast } from "react-toastify";
import LoadingVideos from "../../../../UI/LoadingVideos";
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
  const [videos, setVideos] = useState(null);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getVideosFn = async () => {
      const response = await getVideos(token);
      if (response.status === 200) {
        setVideos(response.videos);
      } else {
        toast.error("Ocurrio un error al cargar los videos");
        setVideos(null);
      }
    };

    getVideosFn();
  }, []);

  let basico = [];
  let intermedio = [];
  let avanzado = [];

  if (videos) {
    basico.push(videos[0], videos[1], videos[2]);
    intermedio.push(videos[3], videos[4], videos[5], videos[6]);
    avanzado.push(videos[7], videos[8], videos[9], videos[10]);
  }

  return (
    <>
      {videos !== null && token ? (
        <>
          <Tabs
            orientation="horizontal"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            centered
            aria-label="levels tabs"
            className="tabs"
          >
            <Tab label="Nivel Basico" {...a11yProps(0)} />
            <Tab label="Nivel Intermedio" {...a11yProps(1)} />
            <Tab label="Nivel Avanzado" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Template videos={basico} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Template videos={intermedio} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Template videos={avanzado} />
          </TabPanel>
        </>
      ) : (
        <LoadingVideos />
      )}
    </>
  );
}
