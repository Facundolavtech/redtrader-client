import Header from "../components/Header";
import Logo from "../components/Header/Logo";
import { parseCookies } from "../helpers/cookies";

const dashboard = ({ hola }) => {
  return (
    <Header classes={"dashboard__header"}>
      <Logo classes={"dashboard__logo"} />
    </Header>
  );
};

export default dashboard;

export async function getServerSideProps(ctx) {
  const token = "hdwdwd";

  console.log(ctx.req);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: { hola: "hola" },
    };
  }
}
