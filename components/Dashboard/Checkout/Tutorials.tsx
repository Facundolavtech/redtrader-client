import React from "react";
import { Help } from "@material-ui/icons";
import HowToPayWithBitso from "../../UI/Checkout/HowToPayBtn";
import BitsoGuide from "./BitsoGuide";

const Tutorials = () => {
  return (
    <>
      <div className="tutorials">
        <h3>
          <Help /> Tutoriales
        </h3>
        <BitsoGuide />
        <HowToPayWithBitso />
      </div>
    </>
  );
};

export default Tutorials;
