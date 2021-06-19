import React, { useContext, useEffect } from "react";
import { PlayArrow } from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import AuthContext from "../../../context/Auth";
import educators_ids from "../../../helpers/educators";
import useStreams from "../../../hooks/useStreams";
import { getEducators } from "../../../services/streams";
import ArrowBackBtn from "../../BackArrow";
import Streams from "./Streams";

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
      setEducators(
        response.educators.filter((educator) =>
          educators_ids.includes(educator.short_id)
        )
      );
    }
  };

  return (
    <div className="streams__container">
      <>
        {!lives || !educators ? (
          <Loading />
        ) : (
          <>
            <ArrowBackBtn src="/dashboard" />
            <div className="lives__title">
              <h2>Educadores</h2>
              <PlayArrow />
            </div>
            <div className="streams-list__container">
              {educators.map((educator) => (
                <Streams
                  key={educator.short_id}
                  educator={educator}
                  lives={lives}
                />
              ))}
            </div>
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
