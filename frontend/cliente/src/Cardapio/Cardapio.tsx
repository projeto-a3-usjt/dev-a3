import React, { ReactElement } from "react";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

function Cardapio(): ReactElement {
  return (
    <>
      <Header />

      <div>Cardápio</div>

      <Footer />
    </>
  );
}

export default Cardapio;
