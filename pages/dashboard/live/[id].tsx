import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getEducator } from "../../../services/streams";
import { CircularProgress } from "@material-ui/core";
import LiveStream from "../../../components/Dashboard/Live/LiveStream";
import Loading from "../../../components/Loading";
import AuthContext from "../../../context/Auth";
import { toast } from "react-toastify";
import DashboardHeader from "../../../components/UI/Header/DashboardHeader";
import SEO from "../../../components/SEO";

const id = () => {
  const {
    query: { id },
  } = useRouter();

  const router = useRouter();
  const [educatorInfo, setEducatorInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      getEducatorFunction();
    }
  }, []);

  useEffect(() => {
    if (user && !user.confirmed) {
      router.push("/");
    }
    if (user && !user.plan.active) {
      router.push("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    {
      if (typeof id === "undefined") {
        router.push("/dashboard/lives");
      }
    }
  }, [id]);

  const getEducatorFunction = async () => {
    const response = await getEducator(id, token);

    if (response.status === 200) {
      setEducatorInfo(response.educator);
      setLoading(false);
    } else {
      toast.error("Ocurrio un error");
      router.push("/lives");
    }
  };

  return (
    <>
      <SEO title="RedTrader Live" />

      {user && user.plan.active ? (
        <>
          <DashboardHeader />
          {loading && !educatorInfo ? (
            <div
              style={{
                marginTop: "100px",
                overflow: "hidden",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CircularProgress
                style={{ color: "#f50606", marginTop: "100px" }}
                size={40}
              />
            </div>
          ) : (
            <LiveStream educator={educatorInfo} />
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default id;
