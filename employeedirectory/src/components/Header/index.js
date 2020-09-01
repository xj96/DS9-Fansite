import React from "react";
import logo from "../../images/1280px-DS9_Titel.svg.png";
import "./style.css"

function Header() {
  return (
    <div className="container">
      <header>
        {/* logo image */}
        <div className="col-12">
          <img
            src={logo}
            alt="DS9 Logo"
            width="720px"
            height="100%"
          ></img>
        </div>

        {/* title of the company */}
        <div>
          <h1>Star-Trek: DS9 Officer's List & Notable People</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
