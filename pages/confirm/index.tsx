import { useState } from "react";
import Logo from "../../components/Header/Logo";
import axiosClient from "../../config/axiosClient";
import parseCookies from "../../helpers/cookies";
import { CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify";
import { sendConfirmAccountEmail } from "../../services/user";

const confirm = ({ email }) => {
  const [emailSended, setEmailSended] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  const sendNewConfirmEmail = async () => {
    if (!email) return;

    try {
      setSendingEmail(true);
      const response = await sendConfirmAccountEmail(email);

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
    <div className="confirm__container">
      <Logo classes="" />
      <h2>
        Te hemos enviado un email para confirmar tu cuenta a
        <br />
        <span>{email}</span>
      </h2>

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
    </div>
  );
};

export default confirm;

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx.req);

  if (!cookies.userToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    try {
      const authUser = await axiosClient.get("/users/auth", {
        headers: {
          Authorization: cookies.userToken,
        },
      });

      if (authUser.data.confirmed) {
        return {
          redirect: {
            destination: "/dashboard",
            permanent: false,
          },
        };
      }

      return {
        props: { email: authUser.data.email },
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
}
