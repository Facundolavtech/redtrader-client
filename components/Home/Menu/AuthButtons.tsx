import { Button } from "@material-ui/core";

const AuthButtons = (props) => {
  const { handleModal, handleAuthForms, handleOpenMenu } = props;

  return (
    <>
      <li className="nav__login">
        <a
          onClick={() => {
            handleModal();
            handleAuthForms(true);
            handleOpenMenu();
          }}
        >
          Iniciar Sesión
        </a>
        <img src="/assets/img/lock.svg" />
      </li>
      <li
        className="nav__comenzar-btn"
        onClick={() => {
          handleModal();
          handleOpenMenu();
          handleAuthForms(false);
        }}
      >
        <Button>Comenzar</Button>
      </li>
    </>
  );
};

export default AuthButtons;