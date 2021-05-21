import React, { useEffect, useState } from "react";
import Logo from "../../components/Header/Logo";
import Header from "../../components/Header";
import Nav from "../../components/Dashboard/Nav";
import currencies from "../../helpers/criptocurrencies";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { createPay } from "../../services/pays";
import ArrowBackBtn from "../../components/BackArrow";
import AuthModal from "../../components/Modal/Modal";
import CriptoVideos from "../../components/Dashboard/CriptoVideos";
import ApplyCoupon from "../../components/ApplyCoupon";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";

const useStyles = makeStyles((theme: Theme) => ({
  dropDown: {
    height: "300px",
  },
}));

const pay = () => {
  const router = useRouter();
  const [currencySelected, setCurrencySelected] = useState(null);
  const [creatingPay, setCreatingPay] = useState(false);
  const [checkoutLink, setCheckoutLink] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { user, token } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [tokenState, setTokenState] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    setUserInfo(user);
    if (user !== null && user.plan === true) {
      router.push("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    setTokenState(token);
  }, [token]);

  let amount;

  if (userInfo !== null) {
    if (userInfo.discount.active) {
      amount = userInfo.first_month
        ? 34.99 - (34.99 * userInfo.discount.percent) / 100
        : 70 - (70 * userInfo.discount.percent) / 100;
    } else {
      amount = userInfo.first_month ? 34.99 : 70;
    }
  }

  async function createPayFunction() {
    if (currencySelected !== null) {
      setCreatingPay(true);

      const response = await createPay(amount, currencySelected, tokenState);

      if (response.status === 200) {
        setCreatingPay(false);
        setCheckoutLink(response.payUrl);
      }
    }
  }

  const handleCloseModal: Function = () => {
    setOpenModal(false);
  };

  return (
    <>
      {userInfo !== null && tokenState !== null ? (
        <>
          <style jsx global>{`
            body {
              background-color: rgb(250, 250, 250) !important;
            }

            @media screen and (max-width: 768px) {
              body {
                background-color: rgb(255, 255, 255) !important;
              }
            }
          `}</style>
          <Header classes="dashboard__header">
            <Logo classes="dashboard__logo" />
            <Nav
              plan={userInfo.plan}
              name={userInfo.name}
              shortId={userInfo.short_id}
              admin={userInfo.isSuperAdmin}
              educator={userInfo.role_educator}
            />
          </Header>
          <div className="pay__container">
            <button
              onClick={() => setOpenModal(true)}
              className="howtopay__btn"
            >
              <span>?</span> Tutorial - Como pagar con criptomonedas
            </button>

            <ArrowBackBtn src="/dashboard" />
            <h2>Plan Premium</h2>
            <h3>
              {userInfo.discount.active && (
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#8a8a8a",
                    marginRight: "15px",
                    fontSize: "1.5em",
                    fontWeight: "lighter",
                  }}
                >
                  {userInfo.first_month ? 34.99 : 70} U$D
                </span>
              )}
              <span>{amount.toFixed(2)} U$D</span> /{" "}
              {userInfo.first_month ? "Mes" : "Primer mes"}
              {userInfo.discount.active && (
                <h4 className="coupon__name">
                  <span>Cupon: </span>"{userInfo.discount.coupon_name}"{" "}
                  <span>{userInfo.discount.percent}% de descuento</span>
                </h4>
              )}
            </h3>
            <h4>
              Cuenta: <strong>{userInfo.email}</strong>
            </h4>
            <p>
              ¡Tenga en cuenta que, una vez realizado el pago, su plan puede
              tardar un tiempo en actualizarse!
            </p>
            {checkoutLink !== null ? (
              <>
                <p className="pay__btn-title">
                  Paga tu factura clickeando el siguiente boton
                </p>
                <a href={checkoutLink} target="_blank" className="pay__btn-img">
                  <img src="/assets/img/coinpayments-paybtn.png" />
                </a>
              </>
            ) : (
              <>
                <p className="select__currency-title">
                  Elige la moneda con la que deseas pagar
                </p>
                <div className="currencies__container">
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Elegi la criptomoneda
                    </InputLabel>
                    <Select
                      MenuProps={{ classes: { paper: classes.dropDown } }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currencySelected}
                      onChange={(e) => setCurrencySelected(e.target.value)}
                    >
                      {currencies.map((currency, index) => (
                        <MenuItem key={index} value={currency.name}>
                          <img src={currency.img} alt="cripto_img" />
                          {currency.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={currencySelected === null}
                  onClick={currencySelected ? createPayFunction : null}
                >
                  {creatingPay ? (
                    <CircularProgress style={{ color: "#fff" }} size={23} />
                  ) : (
                    "Generar factura"
                  )}
                </Button>
                {!userInfo.discount.active && (
                  <ApplyCoupon userToken={tokenState} />
                )}
              </>
            )}
          </div>
          <AuthModal
            open={openModal}
            close={handleCloseModal}
            title="Como pagar con criptomonedas"
          >
            <CriptoVideos />
          </AuthModal>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default pay;
