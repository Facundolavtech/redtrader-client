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
      if (!user.roles.includes("educator")) {
        router.push("/dashboard");
      }
    }
  }, [user]);

  return (
    <>
      <SEO title="Panel de Educador" />
      {user && user.roles.includes("educator") ? (
        <>
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
