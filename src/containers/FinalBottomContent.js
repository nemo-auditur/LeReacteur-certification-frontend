//import react
import React from "react";

import Footer from "./Footer";

// specific footer for the last page in order to send the "Devis" to the backend for storing it in DB
// and send the email to the User

const FinalBottomContent = props => {
  const {
    pagination,
    setPagination,
    previous,
    next,
    progressBar,
    param,
    fetchData,
    param2
  } = props;

  return (
    <>
      <div className="bottom-content">
        {pagination === "home" ? (
          <div className="blank-button"></div>
        ) : (
          <button
            className="back-button "
            onClick={() => {
              setPagination(previous);
            }}
          >
            Précédent
          </button>
        )}
        <Footer progressBar={progressBar} />
        {/* display next button if all required params are filled */}
        {param !== "" && param2 === "false" ? (
          <button
            className="next-button"
            onClick={() => {
              setPagination(next);
              fetchData();
            }}
          >
            Suivant
          </button>
        ) : (
          <div className="blank-button"></div>
        )}
      </div>
    </>
  );
};

export default FinalBottomContent;
