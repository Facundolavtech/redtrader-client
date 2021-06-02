import { Button, CircularProgress } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import SEO from "../../components/SEO";
import AuthContext from "../../context/Auth";
import { confirmAccount } from "../../services/confirmAccount";

const params = () => {
  const router = useRouter();
  const { id, token } = router.query;
  const [loading, setLoading] = useState(true);
  const [accountConfirmed, setAccountConfirmed] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.confirmed) {
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
      setAccountConfirmed(true);
      setLoading(false);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <SEO title="Confirmar cuenta" />

      {!accountConfirmed ? (
        <div className="confirm__container">
          {loading && <CircularProgress style={{ color: "#fff" }} size={23} />}
        </div>
      ) : (
        <div className="confirm__container">
          <h2 style={{ fontSize: "1.3em" }}>Cuenta confirmada</h2>
          <Link href="/">
            <Button
              variant="contained"
              color="primary"
              style={{ width: "240px", textTransform: "unset", height: "45px" }}
            >
              Volver al inicio
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default params;
