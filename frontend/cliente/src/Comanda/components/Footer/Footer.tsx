import React, { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <>
      <footer
        className="fim"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#f8f8f8",
          borderTop: "1px solid #ccc",
          position: "fixed",
          bottom: " 0",
          height: "100px",
          width: "100%",
          boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span
          className="total"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginLeft:"10%",
          }}
        >
          Total da Conta: R$100,00
        </span>
        <button
          className="close-account-btn"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            marginRight: "10%",
            marginLeft:"10%",
          }}
        >
          Fechar a Conta
        </button>
      </footer>
    </>
  );
}
export default Footer;
