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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/admintoggle/" + id
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <div> En cours de chargement...</div>
      ) : (
        <>
          <div>dossier numéro {id}</div>
          <div>Ceci est un {data.typeOfProperty}</div>

          <Link to={"/backoffice/"}>
            <span
              onClick={() => {
                deleteDevis();
              }}
            >
              X
            </span>
          </Link>
          <Link to={"/backoffice"}>
            <div>Retour à l'accueil</div>
          </Link>
        </>
      )}
    </>
  );
};

export default BackOfficeReadOne;
