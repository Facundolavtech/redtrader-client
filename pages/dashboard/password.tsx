import React, { useEffect, useState } from "react";
import Link from "next/link";
import axiosClient from "../../config/axiosClient";
import parseCookies from "../../helpers/cookies";
import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import Nav from "../../components/Dashboard/Nav";
import ChangePasswordForm from "../../components/Dashboard/ChangePassword";
import { ArrowBack } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const password = ({ user, token }) => {
  return (
    <>
      <Header classes={"dashboard__header"}>
        <Logo classes={"dashboard__logo"} />
        <Nav name={user.name} plan={user.plan} shortId={user.short_id} />
      </Header>
      <ChangePasswordForm userId={user._id} token={token} />
    </>
  );
};

export default password;

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

      const response = authUser.data;

      return {
        props: { user: response, token: cookies.userToken },
      };
    } catch (error) {}
  }
}
