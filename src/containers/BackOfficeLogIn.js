import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

// import link
import { Link } from "react-router-dom";

import axios from "axios";

const BackOfficeLogIn = props => {
  const { adminConnected, setAdminConnected } = props;
  const [password, setPassword] = useState("");
  return (
    <>
      <div>Hello grand master</div>
      <form
        onSubmit={async event => {
          event.preventDefault();
          try {
            console.log("test");
            const response = await axios.post("http://localhost:8000/login", {
              email: "grandadmin@lereacteur.io",
              password: password
            });
            if (response.data.token) {
              Cookies.set("token", response.data.token);
              setAdminConnected(true);
            }
          } catch (error) {
            alert(error.message);
          }
        }}
      >
        <span>Mot de passe</span>
        <input
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
            <input type="submit" value={"Se connecter"} />
          </>
        )}
      </form>
    </>
  );
};

export default BackOfficeLogIn;
