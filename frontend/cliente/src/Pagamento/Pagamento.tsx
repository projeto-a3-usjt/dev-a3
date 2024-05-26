import React, { ReactElement } from "react";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { Container, Form, Button } from "react-bootstrap";

function Pagamento(): ReactElement {
  return (
    <Container>
      <Header />
      <Main />
      <Form className="mt-3">
        <Form.Group controlId="formPagamento">
          <Form.Label>Forma de pagamento:</Form.Label>
          <Form.Control as="select">
            <option>Pix</option>
            <option>Cartão de Crédito</option>
            <option>Dinheiro</option>
          </Form.Control>
        </Form.Group>
        <Button variant="warning" className="w-100 mt-3">
          Efetuar pagamento
        </Button>
      </Form>
      <Footer />
    </Container>
  );
}

export default Pagamento;
