import React, { useState } from "react";
import CriptoVideos from "../../../Dashboard/CriptoVideos";
import Modal from "../../../Modal/Modal";

const HowToPayWithBitso = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal: Function = () => {
    setOpenModal(false);
  };
  return (
    <>
      <span onClick={() => setOpenModal(true)}>
        Como pagar con criptomonedas
      </span>
      <Modal
        width="450px"
        open={openModal}
        close={handleCloseModal}
        title="Como pagar con criptomonedas"
      >
        <CriptoVideos />
      </Modal>
    </>
  );
};

export default HowToPayWithBitso;
