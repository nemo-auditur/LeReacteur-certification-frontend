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
            <span>Bienvenue sur le BackOffice du MeilleurTaux</span>
            {data.map(devis => {
              return (
                <Link to={"/backofficereadone/" + devis._id}>
                  <BackOfficeReadAll {...devis} />
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
