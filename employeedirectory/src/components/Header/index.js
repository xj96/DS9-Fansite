import React from "react";
import logo from "../../images/HotBurger.png";
import "./style.css"

function Header() {
  return (
    <div>
      <header>
        {/* logo image */}
        <div>
          <img
            src={logo}
            alt="Hot Burger Logo"
            width="100px"
            height="100px"
          ></img>
        </div>

        {/* title of the company */}
        <div>
          <h1>Hot Burger</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
