import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <div className="btnContainer">←</div>
      </Link>
      <div className="btnContainer">
        <h3>X</h3>
      </div>
    </div>
  );
};

export default Header;
