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
    if (user && !user.data.confirmed) {
      router.push("/confirm");
    }
    if (user && !user.data.roles.includes("admin")) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <>
      {user && user.data.roles.includes("admin") ? (
        <>
          <SEO title="Panel de Administrador" />
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
