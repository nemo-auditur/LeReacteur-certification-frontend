import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const BackOfficeReadAll = props => {
  const deleteDevis = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/admintoggle/delete/" + props._id
      );
      console.log(response.data);
      if (response.data) {
        alert(JSON.stringify(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to={"/backofficereadone/" + props._id} {...props}>
        <div>{props.usersMailAdress}</div>
      </Link>
      <Link to={"/backoffice/"}>
        <span
          onClick={() => {
            deleteDevis();
          }}
        >
          X
        </span>
      </Link>
    </>
  );
};

export default BackOfficeReadAll;
