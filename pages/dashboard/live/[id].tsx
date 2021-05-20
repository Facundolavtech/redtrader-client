import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import { getEducator } from "../../../services/streams";
import Header from "../../../components/Header";
import Logo from "../../../components/Header/Logo";
import Nav from "../../../components/Dashboard/Nav";
import { CircularProgress } from "@material-ui/core";
import LiveStream from "../../../components/Dashboard/Live/LiveStream";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading";

const id = () => {
  const {
    push,
    query: { id },
  } = useRouter();

  const [educatorInfo, setEducatorInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [tokenState, setTokenState] = useState(null);

  useEffect(() => {
    setUserInfo(user);
    if (user !== null && user.plan === false) {
      push("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    setTokenState(token);
  }, [token]);

  useEffect(() => {
    if (tokenState !== null) {
      getEducatorFunction();
    }
  }, [tokenState]);

  useEffect(() => {
    {
      if (typeof id === "undefined") {
        push("/dashboard/lives");
      }
    }
  }, [id]);

  const getEducatorFunction = async () => {
    const response = await getEducator(id, tokenState);

    console.log(response);

    if (response.status === 200) {
      setEducatorInfo(response.educator);
      setLoading(false);
    } else {
      console.log(response);
    }
  };

  return (
    <>
      {userInfo !== null && tokenState !== null ? (
        <>
          <Header classes={"dashboard__header"}>
            <Logo classes={"dashboard__logo"} />
            <Nav
              name={userInfo.name}
              plan={userInfo.plan}
              shortId={userInfo.short_id}
              admin={userInfo.isSuperAdmin}
              educator={userInfo.role_educator}
            />
          </Header>
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
