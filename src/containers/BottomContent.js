//import React
import React from "react";

//import Footer
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
        {/* Dislay "previous button exepted for the 1st page" */}
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
        {/* handle progressbar */}
        <Footer progressBar={progressBar} />
        {/* display next button if all required params are filled */}
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
