import { useState, useEffect, useContext } from "react";
import ArrowBackBtn from "../../components/BackArrow";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import AuthContext from "../../context/Auth";
import DashboardHeader from "../../components/UI/Header/DashboardHeader";
import setPlanDetailsFunction from "../../utils/setPlanDetails";
import SEO from "../../components/SEO";

const plan = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [userPlanExpireDate, setUserPlanExpireDate] = useState(null);
  const [expireDate, setExpireDate] = useState(null);
  const [planDetails, setPlanDetails] = useState(null);

  useEffect(() => {
    if (user) {
      setPlanDetailsFunction(user.plan.plan_type, setPlanDetails);

      if (!user.confirmed) {
        router.push("/confirm");
      }
      if (user.plan.active === false) {
        router.push("/dashboard");
      }
      if (user.plan.expire !== null) {
        setUserPlanExpireDate(new Date(user.plan.expire));
      }
    }
  }, [user]);

  useEffect(() => {
    userPlanExpireDate !== null &&
      setExpireDate(userPlanExpireDate.toLocaleDateString());
  }, [userPlanExpireDate]);

  return (
    <>
      <SEO title="Informacion del plan" />

      {user && user.plan.active && planDetails !== null ? (
        <>
          <DashboardHeader />
          <div className="info-plan__container">
            <ArrowBackBtn src="/dashboard" />
            <div className="info-plan__img">
              <img src="/assets/img/infoplan-img.jpg" alt="Trading img" />
            </div>
            <div className="info-plan__info">
              <h2>Informacion de tu plan</h2>
              <span>{user.email}</span>
              <h3>{planDetails.name}</h3>
              <p>
                Precio mensual: <span>{planDetails.monthly} U$D</span>
              </p>
              <p className="expiresIn__info">
                Tu plan expira el:{" "}
                {expireDate ? (
                  <span>{expireDate}</span>
                ) : (
                  <span>Sin expiracion</span>
                )}
              </p>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default plan;
