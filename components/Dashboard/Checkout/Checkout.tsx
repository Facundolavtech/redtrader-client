import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import AuthContext from "../../../context/Auth";
import ApplyCoupon from "../../ApplyCoupon";
import CouponApplied from "./CouponApplied";
import PlanInfo from "./PlanInfo";
import Price from "./Price";
import SelectCurrencies from "./SelectCurrencies";
import SelectMethod from "./SelectMethod";
import Tutorials from "./Tutorials";

const useStyles = makeStyles({
  paper: {
    boxShadow: "none",
    border: "1px solid rgb(230, 230, 230)",
    borderRadius: 3,
    marginTop: 30,
    padding: 20,
  },
});

const Checkout = () => {
  const classes = useStyles();

  const { user } = useContext(AuthContext);

  const { checkout_link } = useSelector((state: any) => state.checkout);

  return (
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
            {user.discount.active && <CouponApplied />}
            <SelectMethod />
            <SelectCurrencies />
            {!user.discount.active && !checkout_link && <ApplyCoupon />}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
