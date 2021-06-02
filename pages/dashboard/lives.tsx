import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import LivesList from "../../components/Dashboard/Live/LivesList";
import Loading from "../../components/Loading";
import AuthContext from "../../context/Auth";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import SEO from "../../components/SEO";

const lives = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && !user.plan.active) {
      router.push("/dashboard");
    }
    if (user && !user.confirmed) {
      router.push("/confirm");
    }
  }, [user]);

  return (
    <>
      <SEO title="RedTrader Live" />

      {user && user.plan.active ? (
        <>
          <DashboardHeader />
          <LivesList />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default lives;
