import React, { useContext, useEffect } from "react";
import { PlayArrow } from "@material-ui/icons";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { useState } from "react";
import AuthContext from "../../../context/Auth";
import useStreams from "../../../hooks/useStreams";
import { getEducators } from "../../../services/streams";
import ArrowBackBtn from "../../BackArrow";
import Streams from "./Streams";
import FilterEducators from "../../../helpers/FilterEducators";

const LivesList = () => {
  const { token } = useContext(AuthContext);
  const { liveStreams } = useStreams(token);

  const [lives, setLives] = useState(null);
  const [educators, setEducators] = useState(null);

  useEffect(() => {
    if (liveStreams) {
      setLives(liveStreams);
    }
  }, [liveStreams]);

  useEffect((): any => {
    const unsubscribe = getEducatorsFunction();

    return () => unsubscribe;
  }, []);

  const getEducatorsFunction = async () => {
    const response = await getEducators(token);

    if (response.status === 200) {
      setEducators(FilterEducators(response.educators));
    }
  };

  return (
    <div className="streams__container">
      <>
        {!lives || !educators ? (
          <Loading />
        ) : (
          <>
            <Container maxWidth="lg">
              <Grid container spacing={5}>
                <Grid item lg={12} xs={12} md={12}>
                  <div className="lives__title">
                    <h2>Educadores</h2>
                    <PlayArrow />
                  </div>
                </Grid>
                {educators.map((educator) => (
                  <Grid item xs={12} md={3} lg={3}>
                    <Streams
                      key={educator.short_id}
                      educator={educator}
                      lives={lives}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </>
        )}
      </>
    </div>
  );
};

export default LivesList;

const Loading = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        style={{ color: "#f50606", marginTop: "100px" }}
        size={40}
      />
    </div>
  );
};
