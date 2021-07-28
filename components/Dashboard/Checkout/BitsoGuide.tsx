import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import VideoTemplate from "../Tabs/Items/Academy/VideoTemplate";

const BitsoGuide = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <span onClick={() => setOpenModal(true)}>
        Miniguia - Como pagar con la billetera bitso en RedTrader
      </span>

      <Modal
        width="450px"
        open={openModal}
        close={handleCloseModal}
        title="Como pagar con bitso en RedTrader - Miniguia"
      >
        <h2 style={bitsoLinkStyles}>
          Registrate en bitso{" "}
          <a
            href="https://bitso.com/?ref=nbqge"
            target="_blank"
            style={{
              textDecoration: "underline",
              color: "#3a3a3a",
              fontWeight: 500,
            }}
          >
            aqui
          </a>
        </h2>
        <div className="bitso__guide">
          <VideoTemplate
            src="https://player.vimeo.com/video/564920694"
            title="Miniguia - Como pagar con Bitso en Redtrader"
          />
        </div>
      </Modal>
    </>
  );
};

export default BitsoGuide;

const bitsoLinkStyles: any = {
  fontWeight: 400,
  fontSize: "1.8em",
  textAlign: "center",
  marginBottom: "30px",
  color: "#787878",
  marginTop: "30px",
};
