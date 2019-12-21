import React from "react";

import Footer from "./Footer";

const BottomContent = props => {
  const {
    pagination,
    setPagination,
    previous,
    next,
    progressBar,
    param,
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
        {param === "" || param <= 0 ? (
          <div className="blank-button"></div>
        ) : (
          <button
            className="next-button"
            onClick={() => {
              setPagination(next);
            }}
          >
            Suivant
          </button>
        )}
      </div>
    </>
  );
};

export default BottomContent;
