import React, { useState } from "react";
import Logo from "../../components/Header/Logo";
import Header from "../../components/Header";
import parseCookies from "../../helpers/cookies";
import axiosClient from "../../config/axiosClient";
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
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { createPay } from "../../services/pays";
import ArrowBackBtn from "../../components/BackArrow";

const useStyles = makeStyles((theme: Theme) => ({
  dropDown: {
    height: "300px",
  },
}));

const pay = ({ user, userToken }) => {
  const [currencySelected, setCurrencySelected] = useState(null);
  const [creatingPay, setCreatingPay] = useState(false);
  const [checkoutLink, setCheckoutLink] = useState(null);

  const classes = useStyles();

  const createPayFunction = async () => {
    if (currencySelected !== null) {
      setCreatingPay(true);

      const amount = user.first_month ? 34.99 : 70;

      const response = await createPay(amount, currencySelected, userToken);

      if (response.status === 200) {
        setCreatingPay(false);
        setCheckoutLink(response.payUrl);
      }
    }
  };

  return (
    <>
      <Header classes="dashboard__header">
        <Logo classes="dashboard__logo" />
        <Nav plan={user.plan} name={user.name} />
      </Header>
      <div className="pay__container">
        <ArrowBackBtn src="/dashboard" />
        <h2>Plan Premium</h2>
        {user.first_month ? (
          <h3>
            <span>34.99 U$D</span> / mes
          </h3>
        ) : (
          <h3>
            <span>70 U$D</span> / Primer mes
          </h3>
        )}
        <h4>
          Cuenta: <strong>{user.email}</strong>
        </h4>
        <p>
          ¡Tenga en cuenta que, una vez realizado el pago, su plan puede tardar
          un tiempo en actualizarse!
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
          </>
        )}
      </div>
    </>
  );
};

export default pay;

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

      const response = authUser.data;

      if (response.plan === true) {
        return {
          redirect: {
            destination: "/dashboard",
            permanent: false,
          },
        };
      }

      return {
        props: { user: response, userToken: cookies.userToken },
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
