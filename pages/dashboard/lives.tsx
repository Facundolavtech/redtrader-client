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
    if (user && !user.plan) {
      router.push("/checkout");
    }
    if (user && !user.data.confirmed) {
      router.push("/confirm");
    }
  }, [user]);

  return (
    <>
      {user && user.data.confirmed && user.plan ? (
        <>
          <SEO title="RedTrader Live" />
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
