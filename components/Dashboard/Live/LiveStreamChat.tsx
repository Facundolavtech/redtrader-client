import { Button, TextField } from "@material-ui/core";
import { People, Send } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { getLiveStreams } from "../../../services/streams";

const LiveStreamChat = ({ stream_key }) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const [usersWatch, setUsersWatch] = useState(0);

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormFields({
      message: "",
    });
  };

  useEffect(() => {
    (async () => {
      const response = await getLiveStreams();

      if (response.live && typeof response.live[stream_key] !== "undefined") {
        setUsersWatch(response.live[stream_key].subscribers.length);
        console.log(response.live[stream_key].subscribers.length);
      } else {
        setUsersWatch(0);
      }
    })();
  }, []);

  return (
    <div className="chat__container">
      <div className="chat__header">
        <h2>Chat en vivo</h2>
        <span>
          <People /> {usersWatch}
        </span>
      </div>
      <div className="chat__input-text">
        <form onSubmit={handleSubmit}>
          <TextField
            color="primary"
            type="text"
            placeholder="Ingresa un mensaje..."
            name="message"
            value={formFields.message}
            onChange={handleChange}
          />
          <Button type="submit">
            <Send />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LiveStreamChat;
