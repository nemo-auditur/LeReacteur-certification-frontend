import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import BackOfficeReadAll from "../components/BackOfficeComponents/BackOfficeReadAll";

const BackOffice = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admintoggle");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <>
      {isLoading === true ? (
        <>
          <span>En chargement...</span>
        </>
      ) : (
        <>
          <div>
            <h1 className="page-title">
              Bienvenue sur le BackOffice du MeilleurTaux
            </h1>
            <div className="d-flex backoffice-text-input-container-grey ">
              <div className="backoffice-first-element-array-title">Ville</div>
              <div className="backoffice-array-title">Adresse mail</div>
              <div className="backoffice-array-title">Type de bien</div>
              <div className="backoffice-array-title">État du bien</div>
              <div className="backoffice-array-title">Montant de l'emprunt</div>
              <div className="backoffice-array-title">Effacer le dossier</div>
            </div>
            <div className="blank-div-height-50"></div>

            {data.map((devis, index) => {
              return (
                <Link to={"/backofficereadone/" + devis._id} key={index}>
                  <BackOfficeReadAll devis={devis} />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default BackOffice;
