import { useState } from "react";
import Logo from "../../components/Header/Logo";
import axiosClient from "../../config/axiosClient";
import parseCookies from "../../helpers/cookies";
import { CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify";
import {
  sendConfirmAccountEmail,
  getConfirmAccountToken,
} from "../../services/user";
import ArrowBackBtn from "../../components/BackArrow";

const confirm = () => {
  const [emailSended, setEmailSended] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  // const sendNewConfirmEmail = async () => {
  //   if (!email && !token) return;

  //   try {
  //     setSendingEmail(true);
  //     const response = await sendConfirmAccountEmail(email);

  //     if (response.status === 200) {
  //       setEmailSended(true);
  //     } else {
  //       setSendingEmail(false);
  //       toast.error(response);
  //     }
  //   } catch (error) {
  //     setSendingEmail(false);
  //     toast.error("Ocurrio un error");
  //   }
  // };

  return (
    <div className="confirm__container">
      {/* <Logo classes="" />
      <ArrowBackBtn src="/" />
      <h2>
        Te hemos enviado un email para confirmar tu cuenta a
        <br />
        <span>{email}</span>
      </h2>

      {token === true ? (
        <h3 style={{ color: "#228f01" }}>
          Revisa tu casilla de correo no deseado o spam
          <span style={{ color: "#333", fontWeight: 400 }}>
            Podras reenviar el email de confirmacion en 20 minutos
          </span>
        </h3>
      ) : (
        <h3>
          {!emailSended && !token ? (
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
      )} */}
      confirm
    </div>
  );
};

export default confirm;

// export async function getServerSideProps(ctx) {
//   const cookies = parseCookies(ctx.req);

//   if (!cookies.userToken) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   } else {
//     try {
//       const authUser = await axiosClient.get("/users/auth", {
//         headers: {
//           Authorization: cookies.userToken,
//         },
//       });

//       if (authUser.data.confirmed) {
//         return {
//           redirect: {
//             destination: "/dashboard",
//             permanent: false,
//           },
//         };
//       }

//       const getToken = await getConfirmAccountToken(authUser.data._id);

//       if (getToken.status === 200) {
//         return {
//           props: { email: authUser.data.email, token: false },
//         };
//       } else {
//         return {
//           props: { email: authUser.data.email, token: true },
//         };
//       }
//     } catch (error) {
//       return {
//         redirect: {
//           destination: "/",
//           permanent: false,
//         },
//       };
//     }
//   }
// }
