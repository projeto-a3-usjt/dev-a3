import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { login, getQrs, getMesas } from "./servidor";
import { socket } from "./ConexaoMesa/conexaoWebScoket";
import MesaCard from "./componentes/MesaCard";

export default function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [accType, setAccType] = useState(0);
  const [qrs, setQrs] = useState([]);
  const [mesas, setMesas] = useState([]);
  
  async function handleLogin(event) {
    event.preventDefault();
    let form = event.nativeEvent.target;

    let result = await login(form[0].value, form[1].value);
    let json = await result.json()
    if (result.ok) {
      setQrs((await getQrs()).data);
      setMesas((await getMesas()).data);
      setSuccess(json.nome);
      setAccType(json.tipoConta.data[0])
    } else {
      setError(json.message);
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

  function forMesas(mesas, qrs) {
    // besteira
    let retarray = []
    let qrarray = []
    for (let mesa of mesas) {
      for (let qr of qrs) {
        if (mesa.idMesa = qr.idMesa.idMesa) {
          qrarray.push(qr)
        }
      }
      retarray.push(<MesaCard numMesa={mesa.idMesa} qrArray={JSON.stringify(qrs)}/>)
      qrarray = []
    }
    return retarray
  }
  
  if (success) {
    return (
      <div className="container mx-auto align-items-center text-center">
        <h1 className="m-5">Olá, {success}!</h1>
        {!!accType && <h2 className="m-4">Você tem privilégios de administração.</h2>}
        { forMesas(mesas, qrs) }
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
