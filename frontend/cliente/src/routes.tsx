import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.tsx";
import Cardapio from "./Cardapio/Cardapio.tsx";

function RoutesApp(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cardapio />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
