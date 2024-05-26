import React, { ReactElement } from "react";
import { Container, Row, Col, Table } from 'react-bootstrap';

function Main(): ReactElement {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="p-3 border rounded">
            <h5 className="text-center">Restaurante Tal</h5>
            <p className="text-center">Recibo de Josevildo</p>
            <Table bordered size="sm">
              <tbody>
                <tr>
                  <td>1x Calzone</td>
                  <td className="text-end">R$20.00</td>
                </tr>
                <tr>
                  <td>2x Porção de risoles</td>
                  <td className="text-end">R$40.00</td>
                </tr>
                <tr>
                  <td>5x Pizza <br /><small>+ Com mais presunto e queijo</small></td>
                  <td className="text-end">R$100.00</td>
                </tr>
                <tr>
                  <td>12x Corona Long Neck 224ml</td>
                  <td className="text-end">R$80.00</td>
                </tr>
                <tr>
                  <td>1x Nome de prato que é grande demais pra uma linha</td>
                  <td className="text-end">R$1.00</td>
                </tr>
                <tr>
                  <td className="fw-bold">Total</td>
                  <td className="text-end fw-bold">R$241.00</td>
                </tr>
                <tr>
                  <td>Taxa de serviço</td>
                  <td className="text-end">R$5.00</td>
                </tr>
                <tr>
                  <td className="fw-bold">Subtotal</td>
                  <td className="text-end fw-bold">R$246.00</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
