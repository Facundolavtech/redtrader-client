import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../context/Auth";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import SEO from "../../components/SEO";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import SelectPlan from "../../components/Dashboard/Checkout/SelectPlan";
import { resetCheckoutStateAction } from "../../redux/actions/Checkout";
import Checkout from "../../components/Dashboard/Checkout/Checkout";
import CheckoutStyleJSX from "../../components/StyleJSX/CheckoutStyleJSX";

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
      router.push("/dashboard");
      dispatch(resetCheckoutStateAction());
    }
  }, [checkout_link]);

  useEffect(() => {
    if (plan_selected) {
      window.scrollTo({ top: 0 });
    }
  }, [plan_selected]);

  if (user && !user.plan.active) {
    return (
      <>
        <SEO title={plan_name || "Seleccionar plan"} />
        <CheckoutStyleJSX />
        <DashboardHeader />
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
