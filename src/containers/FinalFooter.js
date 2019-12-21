import React from "react";

import Footer from "./Footer";

const BottomContent = props => {
  const {
    answers,
    pagination,
    setPagination,
    previous,
    next,
    progressBar,
    param,
    fetchData
  } = props;

  console.log("finalfooter");
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
        {param !== "" ? (
          <button
            className="next-button"
            onClick={() => {
              setPagination(next);
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

export default BottomContent;
