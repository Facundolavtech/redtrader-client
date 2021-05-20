import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import Nav from "../../components/Dashboard/Nav";
import { useState, useEffect } from "react";
import ArrowBackBtn from "../../components/BackArrow";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";

const plan = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [userPlanExpireDate, setUserPlanExpireDate] = useState(null);
  const [expireDate, setExpireDate] = useState(null);

  useEffect(() => {
    setUserInfo(user);
    if (user !== null && user.plan === false) {
      router.push("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    if (
      userInfo !== null &&
      userInfo.plan_details &&
      userInfo.plan_details.expire !== null
    ) {
      setUserPlanExpireDate(new Date(userInfo.plan_details.expire));
    }
  }, [userInfo]);

  useEffect(() => {
    userPlanExpireDate !== null &&
      setExpireDate(userPlanExpireDate.toLocaleDateString());
  }, [userPlanExpireDate]);

  return (
    <>
      {userInfo !== null ? (
        <>
          <Header classes={"dashboard__header"}>
            <Logo classes={"dashboard__logo"} />
            <Nav
              name={userInfo.name}
              plan={userInfo.plan}
              shortId={userInfo.short_id}
              admin={userInfo.isSuperAdmin}
              educator={userInfo.role_educator}
            />
          </Header>
          <div className="info-plan__container">
            <ArrowBackBtn src="/dashboard" />
            <div className="info-plan__img">
              <img src="/assets/img/infoplan-img.jpg" alt="Trading img" />
            </div>
            <div className="info-plan__info">
              <h2>Informacion de tu plan</h2>
              <span>{userInfo.email}</span>
              <h3>Plan Premium</h3>
              <p>
                Valor mensual: <span>34.99 U$D</span>
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
