import { Button, CircularProgress } from "@material-ui/core";
import { ArrowBack, LiveTv } from "@material-ui/icons";
import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "../../../context/Auth";
import useStreams from "../../../hooks/useStreams";
import ArrowBackBtn from "../../BackArrow";

const LivesList = () => {
  const { token } = useContext(AuthContext);

  const { liveStreams } = useStreams(token);

  const streams =
    liveStreams !== null ? (
      liveStreams.length > 0 ? (
        <div className="streams-list__container">
          {liveStreams.map((stream) => (
            <div key={stream.short_id} className="stream__card">
              <span className="stream__name">{stream.name}</span>
              <span className="stream__live-label">En Vivo</span>
              <Link href={`/dashboard/live/${stream.short_id}`}>
                <div className="stream__thumbnail">
                  <img src={stream.educator_info.educator_thumb} />
                </div>
              </Link>
              <Link href={`/dashboard/live/${stream.short_id}`}>
                <button className="stream__enter-btn">Ingresar</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-educators__message">
          <h2>No hay educadores online en este momento</h2>
          <Link href="/dashboard">
            <Button color="primary" disableRipple>
              <ArrowBack /> Volver al dashboard
            </Button>
          </Link>
        </div>
      )
    ) : (
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

  return (
    <div className="streams__container">
      <>
        {liveStreams !== null && liveStreams.length > 0 ? (
          <>
            <ArrowBackBtn src="/dashboard" />
            <div className="educators__title">
              <LiveTv />
              <h2>Educadores en vivo</h2>
            </div>
          </>
        ) : null}
        {streams}
      </>
    </div>
  );
};

export default LivesList;
