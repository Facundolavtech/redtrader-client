import { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import {
  getConfirmAccountToken,
  sendConfirmAccountEmail,
} from "../../services/confirmAccount";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import SEO from "../../components/SEO";
import SignUpStepper from "../../components/Steppers/SignUpStepper";
import AuthContext from "../../context/Auth";

const confirm = () => {
  const router = useRouter();
  const [emailSended, setEmailSended] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [confirmAccountToken, setConfirmAccountToken] = useState(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      getConfirmToken();
      if (user.data.confirmed) {
        router.push("/checkout");
      }
    }
  }, [user]);

  const getConfirmToken = async () => {
    const response = await getConfirmAccountToken(user.data._id);

    if (response === 200) {
      setConfirmAccountToken(true);
    } else {
      setConfirmAccountToken(false);
    }
  };

  const sendNewConfirmEmail = async () => {
    setSendingEmail(true);
    const response = await sendConfirmAccountEmail(user.data.email);

    if (response === 200) {
      setEmailSended(true);
    } else {
      setSendingEmail(false);
    }
  };

  return (
    <>
      {user && !user.data.confirmed && confirmAccountToken !== null ? (
        <>
          <SEO title="Confirmar cuenta" />
          <SignUpStepper step={1} />
          <div className="confirm__container">
            <h2>
              Te hemos enviado un email para confirmar tu cuenta a
              <br />
              <span>{user.email}</span>
            </h2>

            {confirmAccountToken ? (
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
                    ??Quieres reenviar el email de confirmacion?{" "}
                    <button onClick={sendNewConfirmEmail}>
                      {sendingEmail ? (
                        <CircularProgress style={{ color: "#fff" }} size={23} />
                      ) : (
                        "Click aqu??"
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
        <Loading />
      )}
    </>
  );
};

export default confirm;
