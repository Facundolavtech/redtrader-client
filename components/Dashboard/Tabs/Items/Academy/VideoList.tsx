import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { Info, Lock, PlayCircleFilled, School } from "@material-ui/icons";
import VideoTemplate from "./VideoTemplate";
import AuthContext from "../../../../../context/Auth";
import { getVideos } from "../../../../../services/videos";
import { toast } from "react-toastify";
import LoadingVideos from "../../../../UI/LoadingVideos";
import TabTitle from "../../TabTitle";

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
  tabs: {
    width: "30%",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VideoList() {
  const classes = useStyles();
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

  return (
    <>
      <TabTitle name="Academia basica" icon={<School />} />
      <div className="videolist__container">
        {videos !== null && token ? (
          <>
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
                  disabled={!video.src}
                  icon={!video.src ? <Lock /> : <PlayCircleFilled />}
                />
              ))}
            </Tabs>
            {videos.map((video, index) => (
              <TabPanel value={value} index={index} key={index}>
                <VideoTemplate
                  title={video.title}
                  src={video.src}
                  key={index}
                />
              </TabPanel>
            ))}
          </>
        ) : (
          <LoadingVideos />
        )}
      </div>
      <div className="basic-bottom__message">
        <Info />
        <h2>
          Al terminar la Academia Basica, descarga <span>RedTrade APP</span> y
          comienza a generar ingresos con nuestras se??ales
        </h2>
      </div>
    </>
  );
}
