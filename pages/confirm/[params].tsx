import { Button, CircularProgress } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Logo from "../../components/Header/Logo";
import axiosClient from "../../config/axiosClient";
import parseCookies from "../../helpers/cookies";
import { confirmAccount } from "../../services/user";

const params = () => {
  const router = useRouter();
  const { id, token } = router.query;

  const [accountConfirmed, setAccountConfirmed] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

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
        }
      } catch (error) {
        setLoading(false);
        toast.error("Ocurrio un error");
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

      if (authUser.data.confirmed) {
        return {
          redirect: {
            destination: "/dashboard",
            permanent: false,
          },
        };
      }

      return {
        props: {},
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
}
