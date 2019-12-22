import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const BackOfficeReadOne = () => {
  // get id from url
  const { id } = useParams();

  // declare state
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // get data from backend for one specific Devis ID
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-certification-back.herokuapp.com/admintoggle/" + id
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle the deletion of one Devis
  const deleteDevis = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/admintoggle/delete/" + id
      );
      if (response.data) {
        alert(JSON.stringify(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Load data at the load of the page
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <div> En cours de chargement...</div>
      ) : (
        <>
          <div>
            <h1 className="page-title"> Numéro de dossier: {id}</h1>
            <div className="backoffice-title-detail">
              Informations sur le client
            </div>
            <div className="backoffice-text-input-container-grey">
              {" "}
              Contact du client: {data.usersMailAdress}
            </div>
            <div className="backoffice-text-input-container">
              Situation du client: {data.actualSituationOfOwner}
            </div>

            <div>
              <div className="backoffice-title-detail">
                Informations sur le biens
              </div>
              <div className="backoffice-text-input-container-grey">
                {" "}
                Type de bien: {data.typeOfProperty}
              </div>
              <div className="backoffice-text-input-container">
                {" "}
                État du bien: {data.conditionOfProperty}
              </div>
              <div className="backoffice-text-input-container-grey">
                {" "}
                Adresse du bien
              </div>
              <div className="backoffice-text-input-container">
                {" "}
                Pays: {data.addressOfProperty.country}
              </div>
              <div className="backoffice-text-input-container-grey">
                {" "}
                Ville: {data.addressOfProperty.cityOrZipCode}
              </div>
              <div className="backoffice-text-input-container">
                Destination de l'usage du bien: {data.useOfProperty}
              </div>
            </div>
            <div>
              <div className="backoffice-title-detail">Élements financiers</div>
              <div className="backoffice-text-input-container-grey">
                Montant de l'achat (estimation):
                {data.amountOfProject.estimateAmountOfAcquisition} €
              </div>
              <div className="backoffice-text-input-container">
                Montat des travaux envisagés (estimation):
                {data.amountOfProject.estimateAmountOfWorks} €
              </div>
              <div className="backoffice-text-input-container-grey">
                Frais de notaires: {data.amountOfProject.notaryFees} €
              </div>
              <div className="backoffice-text-input-container">
                Budget total: {data.amountOfProject.totalBudget} €
              </div>
            </div>
            <div className="center">
              <Link to={"/backoffice/"}>
                <span
                  onClick={() => {
                    deleteDevis();
                  }}
                >
                  Cliquez ici pour effacer un dossier!
                </span>
              </Link>
              <Link to={"/backoffice"}>
                <div className="mt-mb-10">Retour à l'accueil</div>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BackOfficeReadOne;
