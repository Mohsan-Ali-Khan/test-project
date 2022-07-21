import React, { useState } from "react";
import Burger from "../components/Burger/Burger";
import Menu from "../components/Menu/Menu";
import OrderSummaryModal from "../components/Modals/OrderSummaryModal";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Burger />
      <Menu setOpenModal={setModalOpen} />
      {modalOpen && <OrderSummaryModal setOpenModal={setModalOpen} />}
    </>
  );
}

export default Home;
