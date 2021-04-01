import {
  Button,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
} from "@material-ui/core";
import { Person, VpnKey, Email } from "@material-ui/icons";

export function Login({ changeModalTitleFunction }) {
  return (
    <>
      <div className="auth-modal__logo">
        <img src="favicon.png" />
      </div>
      <form className="auth__form">
        <FormControl fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">
            Correo electronico
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">
            Contraseña
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth className="submit__button">
          <Button variant="contained" color="primary" type="submit">
            Ingresar
          </Button>
        </FormControl>
        <button
          onClick={() => changeModalTitleFunction("Registrarse")}
          className="changeForm__button"
        >
          Aun no tienes cuenta? <span>Registrate</span>
        </button>
      </form>
    </>
  );
}

export function Register({ changeModalTitleFunction }) {
  return (
    <>
      <div className="auth-modal__logo">
        <img src="favicon.png" />
      </div>
      <form className="auth__form">
        <FormControl fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">Nombre</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">
            Correo electronico
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">
            Contraseña
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth className="submit__button">
          <Button variant="contained" color="primary" type="submit">
            Registrarse
          </Button>
        </FormControl>
        <button
          onClick={() => changeModalTitleFunction("Iniciar Sesion")}
          className="changeForm__button"
        >
          Ya tienes una cuenta? <span>Iniciar Sesion</span>
        </button>
      </form>
    </>
  );
}
