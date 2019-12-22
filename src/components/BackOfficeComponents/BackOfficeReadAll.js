import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const BackOfficeReadAll = props => {
  const { devis } = props;

  //  Call the backend to delete on Devis
  const deleteDevis = async () => {
    try {
      console.log("test");
      const response = await axios.get(
        "https://lereacteur-certification-back.herokuapp.com/admintoggle/delete/" +
          props._id
      );
      console.log("restponse");
      if (response.data) {
        alert(JSON.stringify(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="list-of-files">
        <div className="d-flex backoffice-text-input-container-grey ">
          <Link
            to={"/backofficereadone/" + devis._id}
            {...props}
            style={{ textDecoration: "none" }}
          >
            <div className="d-flex backoffice-text-input-container-grey ">
              <div className="backoffice-first-element-array-title">
                {devis.addressOfProperty.cityOrZipCode}
              </div>
              <div className="backoffice-array-title">
                {devis.usersMailAdress}
              </div>
              <div className="backoffice-array-title">
                {devis.typeOfProperty}
              </div>
              <div className="backoffice-array-title">
                {devis.conditionOfProperty}
              </div>
              <div className="backoffice-array-title">
                {devis.amountOfProject.totalBudget}
              </div>
            </div>
          </Link>
          <Link to={"/backoffice/"} style={{ textDecoration: "none" }}>
            <div className="backoffice-array-title">
              {/* deleted on devis if clicked */}
              <span
                onClick={() => {
                  deleteDevis();
                }}
              >
                X
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BackOfficeReadAll;
