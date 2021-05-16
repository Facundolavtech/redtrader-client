import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosClient from "../../../config/axiosClient";
import parseCookies from "../../../helpers/cookies";
import { getEducator } from "../../../services/streams";
import Header from "../../../components/Header";
import Logo from "../../../components/Header/Logo";
import Nav from "../../../components/Dashboard/Nav";
import { CircularProgress } from "@material-ui/core";
import LiveStream from "../../../components/Dashboard/Live/LiveStream";

const name = ({ user, token }) => {
  const {
    push,
    query: { id },
  } = useRouter();

  const [educatorInfo, setEducatorInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getEducator(id, token);

      if (response.status === 200) {
        setEducatorInfo(response.educator);
        setLoading(false);
      } else {
        push("/dashboard");
      }
    })();
  }, []);

  return (
    <>
      <Header classes={"dashboard__header"}>
        <Logo classes={"dashboard__logo"} />
        <Nav
          name={user.name}
          plan={user.plan}
          shortId={user.short_id}
          admin={user.isSuperAdmin}
          educator={user.role_educator}
        />
      </Header>
      {loading ? (
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
  );
};

export default name;

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

      if (!authUser.data.confirmed) {
        return {
          redirect: {
            destination: "/confirm",
            permanent: false,
          },
        };
      }

      if (!authUser.data.plan) {
        return {
          redirect: {
            destination: "/dashboard/pay",
            permanent: false,
          },
        };
      }

      const response = { user: authUser.data, token: cookies.userToken };

      return {
        props: { user: response.user, token: response.token },
      };
    } catch (err) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
}
