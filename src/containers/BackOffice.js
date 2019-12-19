import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Link } from "react-router-dom";

const BackOffice = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    console.log("test");
    const response = await axios.get("http://localhost:8000/admintoggle");
    console.log("test1");
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            {data.map((devis, index) => {
              return (
                <Link to="./backofficereadone">
                  <div key={index}>
                    <div>{devis._id}</div>
                  </div>
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
