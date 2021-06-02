import React, { useContext, useEffect } from "react";
import AdminNav from "../../../components/Admin/AdminNav";
import { useRouter } from "next/router";
import Loading from "../../../components/Loading";
import AuthContext from "../../../context/Auth";
import DashboardHeader from "../../../components/UI/Header/DashboardHeader";
import SEO from "../../../components/SEO";

const index = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && !user.confirmed) {
      router.push("/");
    }
    if (user && !user.roles.admin) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <>
      <SEO title="Panel de Administrador" />
      {user && user.roles.admin ? (
        <>
          <DashboardHeader />
          <AdminNav />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default index;
