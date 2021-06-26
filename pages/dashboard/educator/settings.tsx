import React, { useContext, useEffect } from "react";
import Loading from "../../../components/Loading";
import DashboardHeader from "../../../components/UI/Header/DashboardHeader";
import AuthContext from "../../../context/Auth";
import EducatorSettings from "../../../components/Dashboard/EducatorSettings";
import { useRouter } from "next/router";
import SEO from "../../../components/SEO";

const settings = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (!user.data.confirmed) {
        router.push("/confirm");
      }

      if (!user.data.roles.includes("educator")) {
        router.push("/dashboard");
      }
    }
  }, [user]);

  return (
    <>
      {user && user.data.roles.includes("educator") ? (
        <>
          <SEO title="Panel de Educador" />
          <DashboardHeader />
          <EducatorSettings />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default settings;
