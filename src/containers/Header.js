import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>Header</div>
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <Link to="/backofficelogin">
        <span>Accès BackOffice</span>
      </Link>
    </>
  );
};

export default Header;
