import useAuth from "./useAuth";

const usePlan = () => {
  const { user, token } = useAuth();

  useEffect(() => {
    if (user.plan === false) {
      push("/pay");
    }
  }, [user]);

  return { user, token };
};

export default usePlan;
