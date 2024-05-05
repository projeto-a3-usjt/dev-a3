import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { login } from "./servidor";
import { socket } from "./ConexaoMesa/conexaoWebScoket";

export default function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    let form = event.nativeEvent.target;

    let result = await login(form[0].value, form[1].value);
    if (result.ok) {
      setSuccess(form[0].value);
    } else {
      let erro = await result.json();
      setError(erro.message);
    }
  }

  async function conexaoMesa() {
    socket.connect();
  }

  socket.on("msgToGarcom", (message) => {
    alert(message);
  });

  async function desconectaMesa() {
    socket.disconnect();
  }

  if (success) {
    return (
      <div className="container mx-auto vh-100 d-flex border align-items-center">
        <h1 className="text-center m-5">Olá, {success}!</h1>
        <div className="card mx-auto w-50 shadow">
          <div className="card-header">Conetando a uma Mesa</div>
          <div className="row p-4 justify-content-center">
            <button className="mt-2 btn btn-primary" onClick={conexaoMesa}>
              Conectar Mesa 5
            </button>

            <button className="mt-2 btn btn-primary" onClick={desconectaMesa}>
              Desconectar Mesa 5
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mx-auto vh-100 d-flex border align-items-center">
      <div className="card mx-auto w-50 shadow">
        <div className="card-header">Login</div>
        <form className="p-4 row" onSubmit={handleLogin}>
          <label className="form-label">
            {" "}
            Nome de usuário
            <input className="form-control" name="username"></input>
          </label>
          <label className="form-label">
            {" "}
            Senha
            <input className="form-control" name="senha"></input>
          </label>
          <button className="w-25 m-3 btn btn-primary">Entrar</button>
          {error && <p className="alert alert-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
}
