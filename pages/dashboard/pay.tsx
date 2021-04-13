import React, { useState } from "react";
import Logo from "../../components/Header/Logo";
import Header from "../../components/Header";
import parseCookies from "../../helpers/cookies";
import axiosClient from "../../config/axiosClient";
import Nav from "../../components/Dashboard/Nav";
import currencies from "../../helpers/criptocurrencies";
import { Button, CircularProgress } from "@material-ui/core";
import { createPay } from "../../services/pays";

const plan = ({ user, userToken }) => {
  const [currencySelected, setCurrencySelected] = useState(null);
  const [creatingPay, setCreatingPay] = useState(false);
  const [checkoutLink, setCheckoutLink] = useState(null);

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
          ¡Tenga en cuenta que el plan puede tardar en actualizarse aun cuando
          haya realizado el pago!
        </p>
        {checkoutLink !== null ? (
          <>
            <p className="pay__btn-title">
              Paga tu factura clickeando el siguiente boton
            </p>
            <a href={checkoutLink} target="_blank">
              <img src="https://www.coinpayments.net/images/pub/buynow-wide-blue.png" />
            </a>
          </>
        ) : (
          <>
            <p className="select__currency-title">
              Elige la moneda con la que deseas pagar
            </p>
            <div className="currencies__container">
              {currencies.map((currency, index) => (
                <button
                  key={index}
                  className="currency__btn"
                  style={{
                    background: currencySelected === currency.name && "#c0c0c0",
                  }}
                  onClick={(e) => setCurrencySelected(currency.name)}
                >
                  <span>{currency.name}</span>
                  <img src={currency.img} alt="cripto_img" />
                </button>
              ))}
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

export default plan;

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
