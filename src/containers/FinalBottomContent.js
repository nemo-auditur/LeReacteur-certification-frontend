import React from "react";

import Footer from "./Footer";

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
