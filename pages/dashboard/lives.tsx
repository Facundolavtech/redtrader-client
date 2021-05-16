import React from "react";
import LivesList from "../../components/Dashboard/Live/LivesList";
import Nav from "../../components/Dashboard/Nav";
import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import axiosClient from "../../config/axiosClient";
import parseCookies from "../../helpers/cookies";

const lives = ({ user, token }) => {
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
      <LivesList token={token} />
    </>
  );
};

export default lives;

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
            destination: "/dashboard/pay",
            permanent: false,
          },
        };
      }

      const response = { user: authUser.data, token: cookies.userToken };

      return {
        props: { user: response.user, token: response.token },
      };
    } catch (err) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
}
