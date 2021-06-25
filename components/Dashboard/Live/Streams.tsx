import Link from "next/link";
import React from "react";

const Stream = ({ educator, lives }) => {
  if (lives.find((live) => live.short_id === educator.short_id)) {
    return <Online educator={educator} />;
  } else {
    return <Offline educator={educator} />;
  }
};

export default Stream;

export const Offline = ({ educator }) => {
  return (
    <div key={educator.short_id} className="stream__card stream__offline">
      <span className="stream__name">{educator.name}</span>
      <span className="stream__live-label">Offline</span>
      <div className="stream__thumbnail">
        <img src={educator.thumbnail} />
      </div>
      <div className="schedules">
        {educator.schedules.map((schedule) => (
          <p>{schedule}</p>
        ))}
      </div>
    </div>
  );
};

export const Online = ({ educator }) => {
  return (
    <div key={educator.short_id} className="stream__card">
      <span className="stream__name">{educator.name}</span>
      <div className="livenow">
        <div className="blob"></div>
      </div>
      <Link href={`/dashboard/live/${educator.short_id}`}>
        <div className="stream__thumbnail">
          <img src={educator.thumbnail} />
        </div>
      </Link>
      <Link href={`/dashboard/live/${educator.short_id}`}>
        <button className="stream__enter-btn">Ingresar</button>
      </Link>
    </div>
  );
};
