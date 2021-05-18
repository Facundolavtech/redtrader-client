import { useEffect, useState } from "react";
import Logo from "../../components/Header/Logo";
import { CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify";
import {
  sendConfirmAccountEmail,
  getConfirmAccountToken,
} from "../../services/user";
import ArrowBackBtn from "../../components/BackArrow";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";

const confirm = () => {
  const router = useRouter();
  const [emailSended, setEmailSended] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [confirmAccountToken, setConfirmAccountToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const { user } = useAuth();

  useEffect(() => {
    if (user !== null) {
      setUserInfo(user);
    }
  }, [user]);

  useEffect(() => {
    if (userInfo && userInfo.confirmed) {
      router.push("/");
    } else {
      try {
        getConfirmAccountToken(userInfo._id)
          .then((res) => {
            if (res.status === 200) {
              setConfirmAccountToken(false);
            } else {
              setConfirmAccountToken(true);
            }
          })
          .catch(() => {
            setConfirmAccountToken(true);
          });
      } catch (error) {
        return;
      }
    }
  }, [userInfo]);

  const sendNewConfirmEmail = async () => {
    try {
      setSendingEmail(true);
      const response = await sendConfirmAccountEmail(userInfo.email);

      if (response.status === 200) {
        setEmailSended(true);
      } else {
        setSendingEmail(false);
        toast.error(response);
      }
    } catch (error) {
      setSendingEmail(false);
      toast.error("Ocurrio un error");
    }
  };

  return (
    <>
      {userInfo && confirmAccountToken !== null ? (
        <>
          <div className="confirm__container">
            <Logo classes="" />
            <ArrowBackBtn src="/" />
            <h2>
              Te hemos enviado un email para confirmar tu cuenta a
              <br />
              <span>{userInfo.email}</span>
            </h2>

            {confirmAccountToken === true ? (
              <h3 style={{ color: "#228f01" }}>
                Revisa tu casilla de correo no deseado o spam
                <span style={{ color: "#333", fontWeight: 400 }}>
                  Podras reenviar el email de confirmacion en 20 minutos
                </span>
              </h3>
            ) : (
              <h3>
                {!emailSended ? (
                  <>
                    ¿Quieres reenviar el email de confirmacion?{" "}
                    <button onClick={sendNewConfirmEmail}>
                      {sendingEmail ? (
                        <CircularProgress style={{ color: "#fff" }} size={23} />
                      ) : (
                        "Click aquí"
                      )}
                    </button>
                  </>
                ) : (
                  "Email enviado"
                )}
              </h3>
            )}
          </div>
        </>
      ) : (
        "Cargando"
      )}
    </>
  );
};

export default confirm;
