import React from "react";
import Nav from "../../../components/Dashboard/Nav";
import Header from "../../../components/Header";
import Logo from "../../../components/Header/Logo";
import axiosClient from "../../../config/axiosClient";
import parseCookies from "../../../helpers/cookies";
import AdminNav from "../../../components/Admin/AdminNav";

const index = ({ user, token }) => {
  return (
    <>
      <Header classes={"dashboard__header"}>
        <Logo classes={"dashboard__logo"} />
        <Nav
          name={user.name}
          plan={user.plan}
          shortId={user.short_id}
          admin={user.isSuperAdmin}
        />
      </Header>
      <AdminNav id={user._id} token={token} />
    </>
  );
};

export default index;

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

      if (!authUser.data.isSuperAdmin) {
        return {
          redirect: {
            destination: "/dashboard",
            permanent: false,
          },
        };
      }

      const response = { user: authUser.data };

      return {
        props: { user: response.user, token: cookies.userToken },
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
