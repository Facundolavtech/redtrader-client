import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "../context/Auth";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import SEO from "../components/SEO";
import SelectPlan from "../components/Dashboard/Checkout/SelectPlan";
import { resetCheckoutStateAction } from "../redux/actions/Checkout";
import Checkout from "../components/Dashboard/Checkout/Checkout";
import CheckoutStyleJSX from "../components/StyleJSX/CheckoutStyleJSX";
import SignUpStepper from "../components/Steppers/SignUpStepper";

const checkout = () => {
  const router = useRouter();

  const { user } = useContext(AuthContext);

  const { checkout_link, plan_selected, plan_name } = useSelector(
    (state: any) => state.checkout
  );

  useEffect(() => {
    if (user) {
      if (user.plan) {
        router.push("/dashboard");
      }
      if (!user.data.confirmed) {
        router.push("/confirm");
      }
    }
  }, [user]);

  useEffect(() => {
    if (checkout_link) {
      router.replace(checkout_link);
      resetCheckoutStateAction();
    }
  }, [checkout_link]);

  useEffect(() => {
    if (plan_selected) {
      window.scrollTo({ top: 0 });
    }
  }, [plan_selected]);

  if (user && !user.plan) {
    return (
      <>
        <SEO title={plan_name || "Seleccionar plan"} />
        <CheckoutStyleJSX />
        {!user.data.first_month_payed && <SignUpStepper step={2} />}
        {!plan_selected ? <SelectPlan /> : <Checkout />}
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
