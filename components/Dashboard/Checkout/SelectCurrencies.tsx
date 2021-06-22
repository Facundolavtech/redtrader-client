import React from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
import currencies from "../../../helpers/criptocurrencies";
import { useDispatch, useSelector } from "react-redux";
import { setCurrencyAction } from "../../../redux/actions/Checkout";
import CreatePayment from "./CreatePayment";

const useStyles = makeStyles((theme: Theme) => ({
  dropDown: {
    height: "300px",
  },
}));

const SelectCurrencies = () => {
  const styles = useStyles();

  const { currency } = useSelector((state: any) => state.checkout);
  const dispatch = useDispatch();

  const handleCurrency = (value) => {
    dispatch(setCurrencyAction(value));
  };

  return (
    <>
      <div className="currencies__container">
        <p className="select__currency-title">
          Elige la moneda con la que deseas pagar
        </p>
        <FormControl variant="filled">
          <InputLabel id="demo-simple-select-label">
            Elegi la criptomoneda
          </InputLabel>
          <Select
            MenuProps={{ classes: { paper: styles.dropDown } }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency || ""}
            onChange={(e) => {
              handleCurrency(e.target.value);
            }}
          >
            {currencies.map((currency, index) => (
              <MenuItem key={index} value={currency.name}>
                <img src={currency.img} alt="cripto_img" />
                {currency.name}
              </MenuItem>
            ))}
          </Select>
          <CreatePayment />
        </FormControl>
      </div>
    </>
  );
};

export default SelectCurrencies;
