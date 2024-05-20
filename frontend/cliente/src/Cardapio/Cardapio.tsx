import React, { ReactElement } from "react";

import Header from "./components/Header/Header.tsx";
import Pratos from "./components/Pratos/Pratos.tsx";
import Footer from "./components/Footer/Footer.tsx";

function Cardapio(): ReactElement {
  return (
    <>
      <Header />

      <Pratos />

      <Footer />
    </>
  );
}

export default Cardapio;
