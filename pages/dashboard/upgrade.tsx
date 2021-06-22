import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import SEO from "../../components/SEO";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import AuthContext from "../../context/Auth";
import {
  resetCheckoutStateAction,
  setPlanAction,
} from "../../redux/actions/Checkout";
import Checkout from "../../components/Dashboard/Checkout/Checkout";
import CheckoutStyleJSX from "../../components/StyleJSX/CheckoutStyleJSX";

const upgrade = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (!user.plan.active || user.plan.plan_type.premium_plus) {
        router.push("/dashboard");
      }
      if (!user.confirmed) {
        router.push("/confirm");
      }
    }
  }, [user]);

  const { checkout_link, plan_name, plan_selected } = useSelector(
    (state: any) => state.checkout
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setPlanAction({
        price: 34.99,
        plan_name: "Plan Premium Plus",
        upgrade: true,
      })
    );
  }, []);

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

  return (
    <>
      <SEO title="Actualizar plan" />
      {user &&
      user.plan.active &&
      !user.plan.plan_type.premium_plus &&
      plan_name ? (
        <>
          <CheckoutStyleJSX />
          <DashboardHeader />
          <Checkout />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default upgrade;
