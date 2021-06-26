import DashboardTabs from "../../components/Dashboard/Tabs";
import { useContext, useEffect } from "react";
import Loading from "../../components/Loading";
import AuthContext from "../../context/Auth";
import { useRouter } from "next/router";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import SEO from "../../components/SEO";

const dashboard = () => {
  const router = useRouter();
  const { user, authUser } = useContext(AuthContext);

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

  useEffect(() => {
    authUser();
  }, []);

  return (
    <>
      {user && user.data.confirmed && user.plan ? (
        <>
          <SEO title="Dashboard" />
          <DashboardHeader />
          <DashboardTabs />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default dashboard;
