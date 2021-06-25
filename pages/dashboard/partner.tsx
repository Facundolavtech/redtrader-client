import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import ArrowBackBtn from "../../components/BackArrow";
import PartnerLink from "../../components/Dashboard/Partner/PartnerLink";
import PartnerStats from "../../components/Dashboard/Partner/PartnerStats";
import Loading from "../../components/Loading";
import SEO from "../../components/SEO";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import AuthContext from "../../context/Auth";
import usePartner from "../../hooks/usePartner";
import { Grid } from "@material-ui/core";
import NextReset from "../../components/Dashboard/Partner/NextReset";

const partner = () => {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  const { partnerInfo } = usePartner();

  useEffect(() => {
    if (user) {
      if (!user.data.confirmed) {
        router.push("/confirm");
      }
      if (!user.data.roles.includes("partner")) {
        router.push("/dashboard");
      }
    }
  }, [user]);

  if (!user || !user.data.roles.includes("partner") || !partnerInfo) {
    return <Loading />;
  } else {
    return (
      <>
        <SEO title="Panel de Partner" />
        <DashboardHeader />
        <div className="partner__container">
          <ArrowBackBtn src="/dashboard" />
          <Grid container spacing={3} direction="row" justify="flex-end">
            <Grid item xs={12} md={6} lg={6}>
              <NextReset next_reset={partnerInfo.next_reset} />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item md={6} xs={12}>
              <PartnerLink partner={partnerInfo} />
            </Grid>
            <Grid item md={6} xs={12}>
              <PartnerStats partner={partnerInfo} />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
};

export default partner;
