import { getVideos } from "../../services/videos";
import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import Nav from "../../components/Dashboard/Nav";
import DashboardTabs from "../../components/Dashboard/Tabs";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  useEffect(() => {
    const getVideosFunction = async () => {
      const token = await localStorage.getItem("userToken");

      const response = await getVideos(token);

      setVideos(response);
    };

    getVideosFunction();
  }, []);

  return (
    <>
      {userInfo ? (
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
          <DashboardTabs
            videos={videos !== null ? videos : []}
            plan={userInfo.plan}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default dashboard;
