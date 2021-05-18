import { Button, CircularProgress } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Logo from "../../components/Header/Logo";
import useAuth from "../../hooks/useAuth";
import { confirmAccount } from "../../services/user";

const params = () => {
  const router = useRouter();
  const { id, token } = router.query;
  const [accountConfirmed, setAccountConfirmed] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user !== null && user.confirmed === true) {
      router.push("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      try {
        const response = await confirmAccount(id, token);

        if (response.status === 200) {
          setLoading(false);
          toast.success(response.msg);
          setAccountConfirmed(true);
        } else {
          setLoading(false);
          toast.error(response);
          setErrorMsg(response);
          router.push("/");
        }
      } catch (error) {
        setLoading(false);
        toast.error("Ocurrio un error");
        router.push("/");
      }
    })();
  }, []);

  return (
    <div className="confirm__container">
      <Logo classes="" />
      {loading ? (
        <CircularProgress style={{ color: "#fff" }} size={23} />
      ) : (
        <>
          {accountConfirmed ? (
            <>
              <h2>¡Haz confirmado la cuenta!</h2>
              <Link href="/dashboard">
                <Button variant="contained" color="primary">
                  Ir al dashboard
                </Button>
              </Link>
            </>
          ) : (
            <h2>{errorMsg}</h2>
          )}
        </>
      )}
    </div>
  );
};

export default params;