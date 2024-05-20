import React, { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="container d-flex justify-content-between align-items-center py-2 border position-fixed bottom-0"
        style={{ backgroundColor: "#F2EBE4" }}
      >
        <span className="fs-5">
          Total da conta: <strong>R$45,95</strong>
        </span>
        <button className="btn btn-warning border border-dark fs-5">
          Fechar conta
        </button>
      </div>
    </div>
  );
}

export default Footer;
