import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import ArrowBackBtn from "../../components/BackArrow";
import PartnerLink from "../../components/Dashboard/Partner/PartnerLink";
import PartnerStats from "../../components/Dashboard/Partner/PartnerStats";
import Loading from "../../components/Loading";
import SEO from "../../components/SEO";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import AuthContext from "../../context/Auth";

const partner = () => {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (!user.confirmed) {
        router.push("/confirm");
      }
      if (!user.roles.partner) {
        router.push("/dashboard");
      }
    }
  }, [user]);

  if (!user || !user.roles.partner) {
    return <Loading />;
  } else {
    return (
      <>
        <SEO title="Panel de Partner" />
        <DashboardHeader />
        <div className="partner__container">
          <ArrowBackBtn src="/dashboard" />
          <PartnerLink />
          <PartnerStats />
        </div>
      </>
    );
  }
};

export default partner;
