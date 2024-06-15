import "bootstrap/dist/css/bootstrap.min.css"
import { Button, CloseButton, FormControl, InputGroup } from "react-bootstrap"
import React from "react";

function QrCodeEntry({ nome }) {
  return (
    <div className="m-3 container border w-25 d-flex flex-column text-center">
      <b>{nome}</b>
      <Button className="m-3" variant="primary">Mostrar QRCode</Button>
    </div>
  )
}

export default function MesaCard({ numMesa, qrArray }) {

  function forQrs(array) {
    return array.map(qr => <QrCodeEntry nome={qr.nome} />);
  }
  
  return (
    <div className="card mx-auto w-100">
      <div className="card-header d-flex justify-content-between">Mesa {numMesa} <CloseButton/></div>
      <div className="d-flex overflow-auto w-100 align-items-center">
        { forQrs(JSON.parse(qrArray)) }
      </div>
      <InputGroup>
        <FormControl placeholder="Nome do cliente"></FormControl>
        <Button variant="success">Adicionar</Button>
      </InputGroup>
    </div>
  )
}