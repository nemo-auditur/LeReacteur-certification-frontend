import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

// import link
import { Link } from "react-router-dom";

//import axios
import axios from "axios";

const BackOfficeLogIn = props => {
  const { adminConnected, setAdminConnected } = props;

  // declare state fto handle password
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="backoffice-login-container">
        <div>Hello grand master</div>
        <form
          className="backoffice-form"
          // Request to ask access to backend
          onSubmit={async event => {
            event.preventDefault();
            try {
              const response = await axios.post(
                "https://lereacteur-certification-back.herokuapp.com/login",
                {
                  email: "grandadmin@lereacteur.io",
                  password: password
                }
              );
              if (response.data.token) {
                Cookies.set("token", response.data.token);
                setAdminConnected(true);
              }
            } catch (error) {
              alert(error.message);
            }
          }}
        >
          <span className="mt-mb-10">Mot de passe</span>
          <input
            className="property-location-country-list mt-mb-10"
            type="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          ></input>
          {adminConnected === true ? (
            <>
              <Link to={"/backoffice"}>
                <input type="submit" value={"Se connecter"} />
              </Link>
            </>
          ) : (
            <>
              <input
                className="next-button mt-mb-10"
                type="submit"
                value={"Se connecter"}
              />
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default BackOfficeLogIn;
