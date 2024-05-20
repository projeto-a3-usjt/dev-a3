import React, { ReactElement } from "react";
import styled from "styled-components";

import RImage from "../../../media/img/R.png";

function Header(): ReactElement {
  const NavBar = styled.nav``;

  return (
    <>
      <div
        className="container d-flex flex-column"
        style={{ backgroundColor: "#F2EBE4" }}
      >
        <div className="d-flex justify-content-between m-2">
          <div className="d-flex gap-2">
            <div>
              <img src={RImage} width="60px" className="bg-warning" />
            </div>
            <div>
              <div>
                <span className="fs-5 fw-bold">Restaurante</span>
              </div>
              <div className="d-flex gap-3">
                <span>
                  <strong>MESA:</strong> 00
                </span>
                <span>
                  <strong>NOME:</strong> Josevildo
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-warning border border-dark">
              Chamar Garçom
            </button>
          </div>
        </div>
      </div>
      <NavBar className="container d-flex align-items-center bg-light border border-top-2">
        <div
          className="d-flex align-items-center gap-5 my-1 mx-3"
          style={{
            listStyleType: "none",
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "thin",
            scrollbarColor: "#cccccc #f0f0f0",
          }}
        >
          <a href="" className="link-underline-light text-muted">
            Entradas
          </a>
          <a href="" className="link-underline-light text-muted">
            Executivos
          </a>
          <a href="" className="link-underline-light text-muted">
            Sobremesas
          </a>
          <a href="" className="link-underline-light text-muted">
            Bebidas
          </a>
          <a href="" className="link-underline-light text-muted">
            Coqueteis
          </a>
          <a href="" className="link-underline-light text-muted">
            Especial do dia
          </a>
        </div>
      </NavBar>
    </>
  );
}

export default Header;
