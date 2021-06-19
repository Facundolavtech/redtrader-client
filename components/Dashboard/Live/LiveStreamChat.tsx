import { Button, CircularProgress, TextField } from "@material-ui/core";
import { Group, People, Send } from "@material-ui/icons";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../context/Auth";
import useSocket from "../../../hooks/useSocket";
import { getLiveStreams } from "../../../services/streams";
import getChatMessages from "../../../utils/getChatMessages";

const LiveStreamChat = ({ stream_key, educatorId }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const inputTextRef = useRef(null);

  const [formFields, setFormFields] = useState({
    message: "",
  });

  const [messages, setMessages] = useState(null);
  const [usersWatching, setUsersWatching] = useState(0);
  const [healthyStream, setHealthyStream] = useState(null);

  const socket = useSocket();

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const { message } = formFields;

  useEffect(() => {
    if (socket) {
      socket.emit("join_room", educatorId);

      socket.on("message", (name, short_id, message) => {
        setMessages([...messages, { name, id: short_id, msg: message }]);
        getChatMessages(educatorId, name, short_id, message);
      });

      socket.on("update_connections", ({ clients }) => {
        setUsersWatching(clients);
      });

      return () => socket.off();
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }

    if (user && socket) {
      socket.emit("new_message", educatorId, user.name, user.short_id, message);
    }

    setFormFields({
      message: "",
    });

    inputTextRef.current.focus();
  };

  useEffect(() => {
    setMessages(JSON.parse(sessionStorage.getItem(educatorId)) || []);

    const getStreamHealth = async () => {
      const response = await getLiveStreams();

      if (response.live && typeof response.live[stream_key] !== "undefined") {
        setHealthyStream(
          response.live[stream_key].subscribers.length > 0 ? true : false
        );
      } else {
        setHealthyStream(false);
      }
    };

    const getStreamHealthInterval = setInterval(() => getStreamHealth(), 15000);

    return () => clearInterval(getStreamHealthInterval);
  }, []);

  useEffect(() => {
    if (healthyStream === false) {
      router.push("/dashboard/lives");
    }
  }, [healthyStream]);

  return (
    <div className="chat__container">
      <div className="chat__header">
        <h2>
          Chat en vivo <Group />
        </h2>
        {/* <span>
          <>
            <People />
            {usersWatching}
          </>
        </span> */}
      </div>
      <div className="chat__messages">
        {!messages ? (
          <CircularProgress size={25} color="primary" />
        ) : (
          <>
            {messages.length > 0 ? (
              <>
                {messages.map(({ name, id, msg }, index) => (
                  <div key={index} className="message">
                    {educatorId === id && (
                      <strong className="profesor__badge">Educador/a</strong>
                    )}
                    <span>
                      {name} ({id}):
                    </span>{" "}
                    <h3>{msg}</h3>
                  </div>
                ))}
              </>
            ) : null}
          </>
        )}
      </div>
      <div className="chat__input-text">
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            color="primary"
            type="text"
            placeholder="Ingresa un mensaje..."
            name="message"
            value={formFields.message}
            onChange={handleChange}
            ref={inputTextRef}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default LiveStreamChat;
