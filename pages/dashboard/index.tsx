import parseCookies from "../../helpers/cookies";
import axiosClient from "../../config/axiosClient";
import { getVideos } from "../../services/videos";
import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import Nav from "../../components/Dashboard/Nav";
import DashboardTabs from "../../components/Dashboard/Tabs";

const dashboard = ({ user, videos }) => {
  return (
    <>
      <Header classes={"dashboard__header"}>
        <Logo classes={"dashboard__logo"} />
        <Nav name={user.name} plan={user.plan} />
      </Header>
      <DashboardTabs videos={videos} plan={user.plan} />
    </>
  );
};

export default dashboard;

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx.req);

  if (!cookies.userToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    try {
      const authUser = await axiosClient.get("/users/auth", {
        headers: {
          Authorization: cookies.userToken,
        },
      });

      const videoList = await getVideos(cookies.userToken);

      const response = { user: authUser.data, videos: videoList };

      return {
        props: { user: response.user, videos: response.videos },
      };
    } catch (err) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
}
