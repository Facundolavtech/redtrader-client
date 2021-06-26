import React, { useContext, useEffect } from "react";
import ChangePasswordForm from "../../components/Dashboard/ChangePassword";
import Loading from "../../components/Loading";
import AuthContext from "../../context/Auth";
import { useRouter } from "next/router";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import SEO from "../../components/SEO";

const changepassword = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      if (!user.data.confirmed) {
        router.push("/confirm");
      }
      if (!user.plan) {
        router.push("/checkout");
      }
    }
  }, [user]);

  return (
    <>
      {user && user.data.confirmed && user.plan ? (
        <>
          <SEO title="Cambiar contraseña" />
          <DashboardHeader />
          <ChangePasswordForm />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default changepassword;
