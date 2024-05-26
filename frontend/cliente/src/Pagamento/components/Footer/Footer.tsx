import React, { ReactElement } from "react";
import { Button } from 'react-bootstrap';

function Footer(): ReactElement {
  return (
    <div className="d-flex justify-content-between mt-3">
      <Button variant="secondary" className="w-100">Voltar para o cardápio</Button>
    </div>
  );
}

export default Footer;
