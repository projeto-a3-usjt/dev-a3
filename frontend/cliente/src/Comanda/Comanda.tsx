import React, { ReactElement } from "react";

import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";
function Comanda(): ReactElement {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default Comanda;
