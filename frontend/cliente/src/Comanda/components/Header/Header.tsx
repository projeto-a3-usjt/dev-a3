import React, { ReactElement } from "react";

function Header(): ReactElement {
  return (
    <header
      style={{
        backgroundImage: `url(${require("../../../media/img/headerComanda.PNG")})`,
        height: "40vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >

    </header>
  );
}
export default Header;
