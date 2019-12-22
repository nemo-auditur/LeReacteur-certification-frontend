import React from "react";

//import component
import BottomContent from "../containers/BottomContent";

const TypeDuBien = props => {
  //get props from App
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    progressBar,
    setProgressBar
  } = props;

  //determine previous and next page for the footer
  const previousPage = null;
  const nextPage = "stateOfGood";

  //
  setProgressBar(0);

  return (
    <>
      <div className="mb-150">
        <h1 className="page-title">TYPE DU BIEN</h1>
        <div className="button-container">
          <div
            className={
              answers.typeOfProperty === "Maison"
                ? "two-choices-button-on"
                : "two-choices-button-off"
            }
            value="Maison"
            // Store value to the global object + page manager
            onClick={event => {
              setAnswers({
                ...answers,
                typeOfProperty: "Maison"
              });
              setPagination("stateOfGood");
            }}
          >
            <input
              type="radio"
              name="typeOfProperty"
              value="Maison"
              checked={answers.typeOfProperty === "Maison" ? true : null}
              readOnly
            />
            MAISON
          </div>
          <div
            className={
              answers.typeOfProperty === "Appartement"
                ? "two-choices-button-on"
                : "two-choices-button-off"
            }
            // Store value to the global object + page manager
            onClick={event => {
              setAnswers({
                ...answers,
                typeOfProperty: "Appartement"
              });
              setPagination("stateOfGood");
            }}
          >
            <input
              type="radio"
              name="typeOfProperty"
              value="Appartement"
              checked={answers.typeOfProperty === "Appartement" ? true : null}
              readOnly
            />
            APPARTEMENT
          </div>
        </div>
      </div>
      <BottomContent
        answers={answers}
        pagination={pagination}
        setPagination={setPagination}
        previous={previousPage}
        next={nextPage}
        progressBar={progressBar}
        param={answers.typeOfProperty}
      />
    </>
  );
};

export default TypeDuBien;
