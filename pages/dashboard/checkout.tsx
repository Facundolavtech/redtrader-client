import React, { useContext, useEffect } from "react";
import ApplyCoupon from "../../components/ApplyCoupon";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import AuthContext from "../../context/Auth";
import SelectCurrencies from "../../components/Dashboard/Checkout/SelectCurrencies";
import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import SelectPlan from "../../components/Dashboard/Checkout/SelectPlan";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";
import { resetCheckoutStateAction } from "../../redux/actions/Checkout";
import SEO from "../../components/SEO";
import PlanInfo from "../../components/Dashboard/Checkout/PlanInfo";
import Tutorials from "../../components/Dashboard/Checkout/Tutorials";
import SelectMethod from "../../components/Dashboard/Checkout/SelectMethod";
import FinalPrice from "../../components/Dashboard/Checkout/FinalPrice";
import Price from "../../components/Dashboard/Checkout/Price";

const useStyles = makeStyles({
  paper: {
    boxShadow: "none",
    border: "1px solid rgb(230, 230, 230)",
    borderRadius: 3,
    marginTop: 30,
    padding: 20,
  },
});

const checkout = () => {
  const router = useRouter();

  const { user } = useContext(AuthContext);

  const { checkout_link, plan_selected, plan_name } = useSelector(
    (state: any) => state.checkout
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      if (user.plan.active) {
        router.push("/dashboard");
      }
      if (!user.confirmed) {
        router.push("/confirm");
      }
    }
  }, [user]);

  useEffect(() => {
    if (checkout_link) {
      window.open(checkout_link, "_blank");
    }
  }, [checkout_link]);

  const goBackToSelectPlans = () => {
    dispatch(resetCheckoutStateAction());
  };

  const classes = useStyles();

  if (user && !user.plan.active) {
    return (
      <>
        <SEO title={plan_name || "Seleccionar plan"} />
        <style jsx global>{`
          body {
            background-color: rgb(250, 250, 250) !important;
          }

          @media screen and (max-width: 768px) {
            body {
              background-color: rgb(255, 255, 255) !important;
            }
          }
        `}</style>
        <DashboardHeader />
        {!plan_selected ? (
          <SelectPlan />
        ) : (
          <>
            {/* <Button
              onClick={goBackToSelectPlans}
              className="goback-btn"
              disableRipple
            >
              <ArrowBackBtn src="" />
            </Button> */}

            <Container maxWidth="lg" className="checkout__container">
              <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                  <Paper className={classes.paper}>
                    <PlanInfo />
                    <Tutorials />
                  </Paper>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Paper className={classes.paper}>
                    <Price />
                    <SelectMethod />
                    <SelectCurrencies />
                    {!user.discount.active && !checkout_link && <ApplyCoupon />}
                    <FinalPrice />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <SEO title="Adquirir plan" />
        <Loading />
      </>
    );
  }
};

export default checkout;
