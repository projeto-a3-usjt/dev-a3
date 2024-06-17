import { findHash } from '../Conexao/servidor.ts'
import React, { ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "./components/Header/Header.tsx";
import Pratos from "./components/Pratos/Pratos.tsx";
import Footer from "./components/Footer/Footer.tsx";

function Cardapio(): ReactElement {
  const [params] = useSearchParams();
  const [validHash, setValidHash] = useState(false);
  const [data, setData] = useState({})

  useEffect(() => {
    async function validarHash() {
      const hash = params.get("c");
      const r = await findHash(hash);
      if (r) {
        setValidHash(true);
        setData({mesa: r.data.idMesa.idMesa, nome: r.data.nome})
      }
    }

    validarHash();
  }, [params]);

  if (validHash) {
    return (
      <>
        <Header dados={data}/>
        <Pratos />
        <Footer />
      </>
    );
  } else {
    return <h1>Não encontrado</h1>;
  }
}

export default Cardapio;
