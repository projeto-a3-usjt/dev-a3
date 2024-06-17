import React, { ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { socket } from "../Conexao/conexaoWebSocket.ts";

function Home(): ReactElement {
  async function conexaoMesa() {
    socket.connect();
  }

  async function enviaMensagem() {
    socket.emit("mesa01", "olaaa");
  }

  async function desconectaMesa() {
    socket.disconnect();
  }
  return (
    <div className="container mx-auto vh-100 d-flex border align-items-center">
      <div className="card mx-auto w-50 shadow">
        <div className="card-header">Conectando a uma Mesa</div>
        <div className="row p-4 justify-content-center">
          <button className="mt-2 btn btn-primary" onClick={conexaoMesa}>
            Conectar Mesa 5
          </button>
          <button className="mt-2 btn btn-primary" onClick={enviaMensagem}>
            Chamar Garçom!
          </button>
          <button className="mt-2 btn btn-primary" onClick={desconectaMesa}>
            Desconectar Mesa 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
