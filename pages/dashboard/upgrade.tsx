import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApplyCoupon from "../../components/ApplyCoupon";
import ArrowBackBtn from "../../components/BackArrow";
import PlanInfo from "../../components/Dashboard/Checkout/PlanInfo";
import SelectCurrencies from "../../components/Dashboard/Checkout/SelectCurrencies";
import Loading from "../../components/Loading";
import SEO from "../../components/SEO";
import PayBtn from "../../components/UI/Checkout/PayBtn";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import AuthContext from "../../context/Auth";
import { setPlanAction } from "../../redux/actions/Checkout";

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

  const { checkout_link, plan_name } = useSelector(
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

  return (
    <>
      {user &&
      user.plan.active &&
      !user.plan.plan_type.premium_plus &&
      plan_name ? (
        <>
          <SEO title="Actualizar plan" />

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

          <ArrowBackBtn src="/dashboard" />

          <div className="pay__container">
            <PlanInfo />
            <h4>
              Cuenta: <strong>{user.email}</strong>
            </h4>
            <p>
              ¡Tenga en cuenta que, una vez realizado el pago, su plan puede
              tardar un tiempo en actualizarse!
            </p>
            {checkout_link ? (
              <PayBtn />
            ) : (
              <>
                <SelectCurrencies />
                {!user.discount.active && <ApplyCoupon />}
              </>
            )}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default upgrade;
