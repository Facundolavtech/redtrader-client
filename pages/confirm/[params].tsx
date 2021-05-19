import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Logo from "../../components/Header/Logo";
import useAuth from "../../hooks/useAuth";
import { confirmAccount } from "../../services/user";

const params = () => {
  const router = useRouter();
  const { id, token } = router.query;
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user !== null && user.confirmed === true) {
      router.push("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    if (id && token) {
      confirmAccountFunction();
    }
  }, [id, token]);

  const confirmAccountFunction = async () => {
    try {
      const response = await confirmAccount(id, token);

      if (response.status === 200) {
        setLoading(false);
        toast.success(response.msg);
        router.push("/dashboard");
      } else {
        setLoading(false);
        toast.error(response);
        router.push("/");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Ocurrio un error");
      router.push("/");
    }
  };

  return (
    <div className="confirm__container">
      <Logo classes="" />
      {loading && <CircularProgress style={{ color: "#fff" }} size={23} />}
    </div>
  );
};

export default params;
