import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApplyCoupon from "../../components/ApplyCoupon";
import ArrowBackBtn from "../../components/BackArrow";
import BitsoGuide from "../../components/Dashboard/Checkout/BitsoGuide";
import PlanInfo from "../../components/Dashboard/Checkout/FinalPrice";
import SelectCurrencies from "../../components/Dashboard/Checkout/SelectCurrencies";
import CriptoVideos from "../../components/Dashboard/CriptoVideos";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal/Modal";
import SEO from "../../components/SEO";
import HowToPayBtn from "../../components/UI/Checkout/HowToPayBtn";
import PayBtn from "../../components/UI/Checkout/PayBtn";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import AuthContext from "../../context/Auth";
import { setPlanAction } from "../../redux/actions/Checkout";

const upgrade = () => {
  const [openModal, setOpenModal] = useState(false);
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

  const handleCloseModal: Function = () => {
    setOpenModal(false);
  };

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
          <div className="pay__container upgrade__container">
            <ArrowBackBtn src="/dashboard" />
            <PlanInfo />
            <HowToPayBtn />
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
            <BitsoGuide />
            <Modal
              open={openModal}
              close={handleCloseModal}
              title="Como pagar con criptomonedas"
            >
              <CriptoVideos />
            </Modal>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default upgrade;
