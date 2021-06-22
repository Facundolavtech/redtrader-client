import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const SelectMethod = () => {
  const [value, setValue] = useState("criptocurrencies");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl className="select__method">
      <FormLabel>Selecciona un metodo de pago</FormLabel>
      <RadioGroup
        aria-label="payment_method"
        name="payment_method"
        value={value}
        onChange={handleRadioChange}
      >
        <Grid direction="row" alignItems="center">
          <FormControlLabel
            value="criptocurrencies"
            control={<Radio />}
            label="Criptomonedas"
          />
          <img src="/assets/img/criptocurrencies-method.png" />
        </Grid>
        <Grid>
          <FormControlLabel
            disabled
            value="cards"
            control={<Radio />}
            label="Credito/Debito (Proximamente)"
          />
          <img src="/assets/img/cards-method.png" />
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default SelectMethod;
