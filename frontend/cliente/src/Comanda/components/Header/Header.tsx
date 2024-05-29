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
      <div>
        <button>
          <span className="" style={{}}>
            &#8592;
          </span>
        </button>
      </div>
    </header>
  );
}
export default Header;
