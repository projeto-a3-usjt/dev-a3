import React, { ReactElement } from "react";

import Calzone from "../../../media/img/calzone.jpg";
import MistoQuente from "../../../media/img/misto-quente.jpg";
import Pizza from "../../../media/img/pizza.jpg";
import Lasanha from "../../../media/img/lasanha.jpg";
import Risole from "../../../media/img/risole.jpg";
import Risoto from "../../../media/img/risoto.jpg";
import PetitGateau from "../../../media/img/petit-gateau.jpg";
import Agua from "../../../media/img/agua.jpg";
import BatidaDeMorango from "../../../media/img/batida-de-morango.jpeg";
import Parmegiana from "../../../media/img/parmegiana.jpg";

function Pratos(): ReactElement {
  return (
    <>
      <div
        className="container d-flex flex-column my-3 gap-3"
        style={{ paddingBottom: "70px" }}
      >
        <h1 style={{ borderBottom: "1px solid" }}>Entradas</h1>
        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={Calzone} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Calzone</span>
              <span>Delicioso calzone com presunto e queijo</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$20,00</span>
          </div>
        </div>

        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={MistoQuente} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Misto Quente</span>
              <span>Delicioso misto quente com presunto e queijo</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$30,00</span>
          </div>
        </div>

        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={Pizza} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Pizza</span>
              <span>Deliciosa pizza com presunto e queijo</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$40,00</span>
          </div>
        </div>

        <h1 style={{ borderBottom: "1px solid", paddingTop: "20px" }}>
          Executivos
        </h1>
        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={Lasanha} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Lasanha</span>
              <span>Deliciosa lasanha com presunto e queijo</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$60,00</span>
          </div>
        </div>

        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={Risole} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Porção de risoles</span>
              <span>Deliciosos risoles com presunto e queijo</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$35,00</span>
          </div>
        </div>

        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={Risoto} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Risoto</span>
              <span>Delicioso risoto com presunto e queijo</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$54,00</span>
          </div>
        </div>

        <h1 style={{ borderBottom: "1px solid", paddingTop: "20px" }}>
          Sobremesas
        </h1>
        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={PetitGateau} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Petit Gâteau</span>
              <span>Delicioso petit gâteau com calda de chocolate</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$22,00</span>
          </div>
        </div>

        <h1 style={{ borderBottom: "1px solid", paddingTop: "20px" }}>
          Bebidas
        </h1>
        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={Agua} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Água</span>
              <span>Deliciosa água refrescante</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$5,00</span>
          </div>
        </div>

        <h1 style={{ borderBottom: "1px solid", paddingTop: "20px" }}>
          Coquetéis
        </h1>
        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={BatidaDeMorango} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Batida de morango</span>
              <span>Deliciosa batida de morango com gelo</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$28,00</span>
          </div>
        </div>

        <h1 style={{ borderBottom: "1px solid", paddingTop: "20px" }}>
          Especial do dia
        </h1>
        <div
          className="d-flex gap-2 p-3 rounded justify-content-between"
          style={{
            backgroundColor: "#F4F4F4",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="d-flex gap-4">
            <img src={Parmegiana} width="100px" className="rounded" />
            <div className="d-flex flex-column">
              <span className="fs-1">Filé à parmegiana</span>
              <span>
                Nosso carro chefe, acompanhado com arroz de batatas fritas
              </span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <span className="fs-3 fw-bold text-end">R$70,00</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pratos;
