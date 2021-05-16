import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import Nav from "../../components/Dashboard/Nav";
import axiosClient from "../../config/axiosClient";
import parseCookies from "../../helpers/cookies";
import { useState, useEffect } from "react";
import ArrowBackBtn from "../../components/BackArrow";

const plan = ({ user }) => {
  const expireDate = new Date(user.plan_details.expire);

  const [planExpireDate] = useState({
    day: expireDate.toLocaleDateString(),
  });

  return (
    <>
      <Header classes={"dashboard__header"}>
        <Logo classes={"dashboard__logo"} />
        <Nav
          name={user.name}
          plan={user.plan}
          shortId={user.short_id}
          admin={user.isSuperAdmin}
          educator={user.role_educator}
        />
      </Header>
      <div className="info-plan__container">
        <ArrowBackBtn src="/dashboard" />
        <div className="info-plan__img">
          <img src="/assets/img/infoplan-img.jpg" alt="Trading img" />
        </div>
        <div className="info-plan__info">
          <h2>Informacion de tu plan</h2>
          <span>{user.email}</span>
          <h3>Plan Premium</h3>
          <p>
            Valor mensual: <span>34.99 U$D</span>
          </p>
          <p className="expiresIn__info">
            Tu plan expira el: <span>{planExpireDate.day}</span>
          </p>
          <h4>
            Recuerda renovarlo dentro de la primer semana de caducado el plan
            para evitar ser expulsado del grupo de señales
          </h4>
        </div>
      </div>
    </>
  );
};

export default plan;

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

      if (!authUser.data.confirmed) {
        return {
          redirect: {
            destination: "/confirm",
            permanent: false,
          },
        };
      }

      if (!authUser.data.plan) {
        return {
          redirect: {
            destination: "/dashboard",
            permanent: false,
          },
        };
      }

      const response = authUser.data;

      return {
        props: { user: response, token: cookies.userToken },
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

// const formatExpirePlanTime = (time, state, setStateFn) => {
//   let hour;
//   if (time.slice("").length === 8) {
//     hour = time.slice(0, 2);
//   } else {
//     hour = time.slice(0, 1);
//   }

//   const formatedTime = `${hour} hs`;

//   setStateFn({ ...state, time: formatedTime });
// };
