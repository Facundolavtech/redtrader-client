import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import AuthContext from "../../../context/Auth";
import {
  generateStreamKey,
  generateStreamPassword,
} from "../../../services/educator";
import ArrowBackBtn from "../../BackArrow";

const EducatorSettings = () => {
  const { user, token } = useContext(AuthContext);
  const [showStreamPW, setShowStreamPW] = useState(false);
  const [stream_key, setStream_key] = useState(user.educator_info.stream_key);
  const [stream_pw, setStream_pw] = useState(user.stream_pw);

  const handleClickShowStreamPw = () => {
    setShowStreamPW(!showStreamPW);
  };

  const newStreamKey = async () => {
    const response = await generateStreamKey(token);

    if (response.status === 200) {
      setStream_key(response.stream_key);
    }
  };

  const newStreamPassword = async () => {
    const response = await generateStreamPassword(token);

    if (response.status === 200) {
      setStream_pw(response.stream_pw);
    }
  };

  return (
    <>
      <div className="stream-settings__keys__container">
        <ArrowBackBtn src="/dashboard" />
        <h1>Configuracion del Streaming</h1>
        <div className="keys__fields">
          <FormControl>
            <TextField
              disabled
              label="Llave de Transmision"
              value={stream_key}
            />
            <Button className="renew__btn" onClick={newStreamKey}>
              Solicitar nueva
            </Button>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="standard-adornment-streampw">
              Clave de transmision
            </InputLabel>
            <Input
              disabled
              id="standard-adornment-streampw"
              type={showStreamPW ? "text" : "password"}
              value={stream_pw}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowStreamPw}
                  >
                    {showStreamPW ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button className="renew__btn" onClick={newStreamPassword}>
              Solicitar nueva
            </Button>
          </FormControl>
        </div>
      </div>
      <div className="stream-settings__instructions">
        <div className="steps step1">
          <h2>Paso 1</h2>
          <p>
            Descarga OBS desde{" "}
            <a href="https://obsproject.com/download" target="_blank">
              Este enlace
            </a>{" "}
            y sigue el proceso de instalacion
          </p>
        </div>
        <div className="steps step2">
          <h2>Paso 2</h2>
          <p>
            Una vez iniciado el OBS, Dirigete a la ventana de{" "}
            <span>"Ajustes"</span>
          </p>
          <img src="/assets/img/streamsetup-01.png" />
          <p>
            Luego ve a la seccion de <span>"Emision"</span>
          </p>
          <img src="/assets/img/streamsetup-02.png" />
          <p>
            En el menu desplegable de <span>"Servicios"</span>, elige
            <strong>Personalizado</strong>
          </p>
        </div>
        <div className="steps step3">
          <h2>Paso 3</h2>
          <p>
            En el campo <span>"Servidor"</span>, colocar el siguiente enlace
            ¡sin dejar ningun espacio en blanco!
          </p>
          <span>rtmp://redtrader-api.com:1935/live</span>
          <p>
            En el campo <span>Clave de Transimision</span> colocar lo siguiente
          </p>
          <span>
            {stream_key}?stream_pw={stream_pw}
          </span>
          <p className="end">
            Click en Aceptar y listo, selecciona una escena y comienza a
            transmitir en vivo para la comunidad de RedTrader
          </p>
        </div>
      </div>
    </>
  );
};

export default EducatorSettings;
