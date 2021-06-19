import React from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
import CreatePaymentBtn from "../../UI/Checkout/CreatePaymentBtn";
import currencies from "../../../helpers/criptocurrencies";
import { useDispatch, useSelector } from "react-redux";
import { setCurrencyAction } from "../../../redux/actions/Checkout";

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
      <p className="select__currency-title">
        Elige la moneda con la que deseas pagar
      </p>
      <div className="currencies__container">
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
          <CreatePaymentBtn />
        </FormControl>
      </div>
    </>
  );
};

export default SelectCurrencies;
