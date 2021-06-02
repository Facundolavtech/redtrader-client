import React, { useContext, useEffect, useState } from "react";
import ArrowBackBtn from "../../components/BackArrow";
import AuthModal from "../../components/Modal/Modal";
import CriptoVideos from "../../components/Dashboard/CriptoVideos";
import ApplyCoupon from "../../components/ApplyCoupon";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import AuthContext from "../../context/Auth";
import HowToPayBtn from "../../components/UI/Checkout/HowToPayBtn";
import PayBtn from "../../components/UI/Checkout/PayBtn";
import SelectCurrencies from "../../components/Dashboard/Checkout/SelectCurrencies";
import { useDispatch, useSelector } from "react-redux";
import PlanInfo from "../../components/Dashboard/Checkout/PlanInfo";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import SelectPlan from "../../components/Dashboard/Checkout/SelectPlan";
import { Button } from "@material-ui/core";
import { resetCheckoutStateAction } from "../../redux/actions/Checkout";
import SEO from "../../components/SEO";

const checkout = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const { user } = useContext(AuthContext);

  const { checkout_link, plan_selected } = useSelector(
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

  const handleCloseModal: Function = () => {
    setOpenModal(false);
  };

  const goBackToSelectPlans = () => {
    dispatch(resetCheckoutStateAction());
  };

  return (
    <>
      <SEO title="Checkout" />

      {user && !user.plan.active ? (
        <>
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
              <div className="pay__container">
                <Button
                  onClick={goBackToSelectPlans}
                  className="goback-btn"
                  disableRipple
                >
                  <ArrowBackBtn src="" />
                </Button>
                <HowToPayBtn onClickFunction={setOpenModal} />
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
              <AuthModal
                open={openModal}
                close={handleCloseModal}
                title="Como pagar con criptomonedas"
              >
                <CriptoVideos />
              </AuthModal>
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default checkout;
