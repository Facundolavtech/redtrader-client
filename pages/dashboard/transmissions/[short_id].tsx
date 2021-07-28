import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import SEO from "../../../components/SEO";
import CheckoutStyleJSX from "../../../components/StyleJSX/CheckoutStyleJSX";
import DashboardHeader from "../../../components/UI/Header/DashboardHeader";
import EducatorTitle from "../../../components/UI/Lives/EducatorTitle";
import AuthContext from "../../../context/Auth";
import { getTransmissions } from "../../../services/transmission";
import { useState } from "react";
import { getEducator } from "../../../services/streams";
import Loading from "../../../components/Loading";
import Modal from "../../../components/Modal/Modal";
import VideoTemplate from "../../../components/Dashboard/Tabs/Items/Academy/VideoTemplate";

const short_id = () => {
  const router = useRouter();
  const { token, user } = useContext(AuthContext);
  const [transmissions, setTransmissions] = useState(null);
  const [educatorInfo, setEducatorInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [transmissionSelected, setTransmissionSelected] = useState(null);

  useEffect(() => {
    if (token && typeof router.query.short_id !== "undefined") {
      getTransmissionsFunction();
      getEducatorFunction();
    }
  }, [token, router.query]);

  useEffect(() => {
    if (user) {
      if (!user.data.plan) {
        router.push("/");
      }
      if (!user.data.confirmed) {
        router.push("/confirm");
      }
    }
  }, [user]);

  const getTransmissionsFunction = async () => {
    const response = await getTransmissions(token, router.query.short_id);

    if (response.status === 200) {
      setTransmissions(response.transmissions);
    } else {
      router.push("/dashboard/lives");
    }
  };

  const getEducatorFunction = async () => {
    const response = await getEducator(router.query.short_id, token);

    if (response.status === 200) {
      setEducatorInfo(response.educator);
    } else {
      router.push("/dashboard/lives");
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTransmissionSelected(null);
  };

  return (
    <>
      <CheckoutStyleJSX />

      {user && user.data.confirmed && user.data.plan ? (
        <>
          {educatorInfo && transmissions ? (
            <>
              <SEO title={`Clases de ${educatorInfo.name}`} />
              <DashboardHeader />
              <Container maxWidth="lg" style={{ marginTop: "40px" }}>
                <Grid container spacing={3}>
                  <Grid item lg={12} xs={12}>
                    <EducatorTitle
                      title={`${educatorInfo.name} (${transmissions.length})`}
                      thumb={educatorInfo.thumbnail}
                      name={educatorInfo.name}
                      borderBottom={true}
                    />
                  </Grid>
                  {transmissions.length > 0 ? (
                    <>
                      {transmissions.map((transmission) => (
                        <Grid
                          item
                          xs={12}
                          lg={3}
                          spacing={2}
                          key={transmission._id}
                        >
                          <div
                            className="transmission__card"
                            onClick={() => {
                              handleOpenModal();
                              setTransmissionSelected(transmission);
                            }}
                          >
                            <h2>
                              Clase {transmission.data.transmission_number}{" "}
                              <PlayArrow />
                            </h2>
                            <img
                              src="/assets/img/logo.png"
                              alt="logo redtrader"
                            />
                            <h3>{transmission.data.description}</h3>
                          </div>
                        </Grid>
                      ))}
                    </>
                  ) : (
                    <Grid item xs={12} lg={12}>
                      <h2 className="empty__transmissions-msg">
                        Este educador aun no tiene clases grabadas
                      </h2>
                    </Grid>
                  )}
                </Grid>
              </Container>
              {transmissionSelected && (
                <Modal
                  close={handleCloseModal}
                  open={openModal}
                  width="95%"
                  title={`Clase ${transmissionSelected.data.transmission_number}`}
                >
                  <div className="transmission__video">
                    <VideoTemplate
                      title={`Clase ${transmissionSelected.data.transmission_number}`}
                      src={transmissionSelected.data.src}
                    />
                  </div>
                </Modal>
              )}
            </>
          ) : (
            <CircularProgress />
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default short_id;
