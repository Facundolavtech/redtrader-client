import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { PlayCircleFilled } from "@material-ui/icons";
import LoadingVideos from "../../../../../UI/LoadingVideos";
import VideoTemplate from "../../Academy/VideoTemplate";
import AuthContext from "../../../../../../context/Auth";
import { getArbitrageVideos } from "../../../../../../services/videos";
import notes from "../../../../../../helpers/arbitrageNotes";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  className?: any;
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

export default function Template({ level }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [videos, setVideos] = useState(null);
  const { token } = useContext(AuthContext);
  const [note, setNote] = useState(null);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect((): any => {
    setVideos(null);
    if (level && !videos) {
      getVideos();
    }

    return () => null;
  }, [level]);

  useEffect((): any => {
    videos !== null && getVideoNote();
  }, [value]);

  const getVideos = async () => {
    const response: any = await getArbitrageVideos(token, level);

    if (response.status === 200) {
      setVideos(response.videos);
    }
  };

  const getVideoNote = () => {
    const foundNote = notes.find((note) => note.index === videos[value].order);
    foundNote ? setNote(foundNote) : setNote(null);
  };

  return (
    <>
      <div className="videolist__container">
        {videos !== null ? (
          <>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="arbitrage video tab"
              className={classes.tabs}
              indicatorColor="primary"
            >
              {videos.map(({ title, order }, index) => (
                <Tab
                  key={order}
                  label={title}
                  {...a11yProps(index)}
                  icon={<PlayCircleFilled />}
                  className={notes.map(
                    (note) => note.index === order && "note__badge"
                  )}
                />
              ))}
            </Tabs>
            {videos.map(({ title, order, src }, index) => (
              <TabPanel value={value} index={index} key={order}>
                <VideoTemplate title={title} src={src} key={order} />
              </TabPanel>
            ))}
          </>
        ) : (
          <LoadingVideos />
        )}
      </div>
      {note !== null && (
        <>
          <h2 className="notes__title">Notas</h2>
          <div
            dangerouslySetInnerHTML={{ __html: note.title }}
            className="note__title"
          ></div>
          <div
            style={{ marginBottom: "50px" }}
            dangerouslySetInnerHTML={{ __html: note.body }}
            className="note__body"
          ></div>
        </>
      )}
    </>
  );
}
