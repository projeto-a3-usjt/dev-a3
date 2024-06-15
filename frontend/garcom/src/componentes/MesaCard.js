import "bootstrap/dist/css/bootstrap.min.css"
import { delByMesa, newQr } from "../servidor";
import { QRCode } from "react-qr-code"
import { Button, CloseButton, FormControl, InputGroup, Modal } from "react-bootstrap"
import React, { useState, useRef } from "react";

function QrCodeEntry({ nome, hash }) {

  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)
  
  return (
    <>
      <div className="m-3 container border vw-w-25 d-flex flex-column text-center">
        <b>{nome}</b>
        <Button className="m-3" variant="primary" onClick={handleShow}>Mostrar QRCode</Button>
      </div>

      { !!showModal &&
        <Modal size="lg" show={showModal} onHide={handleClose} backdrop="static" centered>
          <Modal.Header closeButton>
            <Modal.Title>{nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <QRCode style={{width: "100%", height: "100%"}} value={"https://localhost:3002/?c=" + hash}/>
          </Modal.Body>
          <Modal.Footer>{"https://localhost:3002/?c=" + hash}</Modal.Footer>
        </Modal>
      }
    </>
  )
}

export default function MesaCard({ numMesa, qrArray }) {

  const [qrs, setQrs] = useState(JSON.parse(qrArray))
  
  const inputRef = useRef(null)
  
  async function handleAdd() {
    const value = inputRef.current.value

    if (value.trim()) {
      let qr = await newQr(numMesa, value)
      setQrs([...qrs, qr])
      inputRef.current.value = ''
    }
  }

  async function handleWipe() {
    await delByMesa(numMesa)
    setQrs([])
  }
  
  return (
    <div className="card mx-auto w-100 m-4">
      <div className="card-header d-flex justify-content-between">Mesa {numMesa} <CloseButton onClick={handleWipe}/></div>
      <div className="d-flex overflow-auto w-100 align-items-center">
        { qrs.map(qr => <QrCodeEntry nome={qr.nome} hash={qr.hash} />) }
      </div>
      <InputGroup>
        <FormControl placeholder="Nome do cliente" ref={inputRef}></FormControl>
        <Button variant="success" onClick={handleAdd}>Adicionar</Button>
      </InputGroup>
    </div>
  )
}