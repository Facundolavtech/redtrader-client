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
    if (user && !user.data.confirmed) {
      router.push("/confirm");
    }
  }, [user]);

  return (
    <>
      <SEO title="Cambiar contraseña" />

      {user && user.data.confirmed ? (
        <>
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
