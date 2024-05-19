import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.tsx";
import Cardapio from "./Cardapio/Cardapio.tsx";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
