// declare React
import React from "react";

//declare router
import { Link } from "react-router-dom";

// import assets : logo meilleur taux
import HomeLogo from "../assets/images/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-home">
          <img
            className="home-logo"
            src={HomeLogo}
            alt="meilleur taux home log"
          />
          <span className="header-text">
            Crédit immobilier : 5mn pour obtenir le meilleux taux
          </span>
        </div>
        <div>
          <Link to="/backofficelogin">
            <span>Accès BackOffice</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
