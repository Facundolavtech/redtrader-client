import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const useSocket = () => {
  const SERVER = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = io(SERVER, {
      transports: ["websocket"],
      upgrade: false,
    });

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;

    // should only run once and not on every re-render,
    // so pass an empty array
  }, []);

  return socket;
};

export default useSocket;
