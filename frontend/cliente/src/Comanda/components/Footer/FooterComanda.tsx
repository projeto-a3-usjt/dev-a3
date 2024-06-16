import React, { ReactElement, useState } from "react";
import { useCalculation } from "../../CalculandoComanda.tsx"; 

export function FooterComanda(): ReactElement {
  
  const { total } = useCalculation();

  return (
    <div className="d-flex justify-content-center">
      <div
        className="container d-flex justify-content-between align-items-center py-2 border position-fixed bottom-0"
        style={{ backgroundColor: "#F2EBE4" }}
      >
        <span className="fs-5">
          Total da conta: <strong>R${total}</strong>
        </span>
        <button className="btn btn-warning border border-dark fs-5">
          Fechar conta
        </button>
      </div>
    </div>
  );
}
