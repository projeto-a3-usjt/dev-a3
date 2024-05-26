import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.tsx";
import Cardapio from "./Cardapio/Cardapio.tsx";
import Comanda from "./Comanda/Comanda.jsx";
import Pagamento from "./Pagamento/Pagamento.tsx";

function RoutesApp(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cardapio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comanda" element={<Comanda />} />
        <Route path="/pagamento" element={<Pagamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
