import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.tsx";
import Cardapio from "./Cardapio/Cardapio.tsx";
import Comanda from "./Comanda/Comanda.jsx";

function RoutesApp(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cardapio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Comanda" element={<Comanda />} />

      

      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
