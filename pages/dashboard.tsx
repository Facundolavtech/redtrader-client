import Header from "../components/Header";
import Logo from "../components/Header/Logo";
import parseCookies from "../helpers/cookies";

const dashboard = ({ hola }) => {
  return (
    <Header classes={"dashboard__header"}>
      <Logo classes={"dashboard__logo"} />
    </Header>
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
    //Funcion de auth user y devolver poor props los datos
    // try {
    // } catch (error) {}

    return {
      props: { hola: "hola" },
    };
  }
}
