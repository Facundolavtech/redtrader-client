import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import SEO from "../../components/SEO";
import AuthContext from "../../context/Auth";
import { confirmAccount } from "../../services/confirmAccount";

const params = () => {
  const router = useRouter();
  const { id, token } = router.query;

  const { user, authUser } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.data.confirmed) {
      router.push("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    if (id && token) {
      confirmAccountFunction();
    }
  }, [id, token]);

  const confirmAccountFunction = async () => {
    const response = await confirmAccount(id, token);

    if (response === 200) {
      router.push("/checkout");
      authUser();
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <SEO title="Confirmar cuenta" />
      <div className="confirm__container">
        <CircularProgress style={{ color: "#fff" }} size={23} />
      </div>
    </>
  );
};

export default params;
