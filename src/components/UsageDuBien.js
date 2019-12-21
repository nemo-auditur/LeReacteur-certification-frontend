import React from "react";

// import bottom content
import BottomContent from "../containers/BottomContent";

const UsageDuBien = props => {
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    progressBar,
    setProgressBar
  } = props;

  // declare previous and next pages
  const previousPage = "stateOfGood";
  const nextPage = "actualSituation";
  setProgressBar(30);

  return (
    <>
      <div className="mb-150">
        <h1 className="page-title">USAGE DU BIEN</h1>
        <div className="button-display">
          <div
            className={
              answers.useOfProperty === "Résidence principale"
                ? "three-choices-button-on"
                : "three-choices-button-off"
            }
            onClick={event => {
              setAnswers({
                ...answers,
                useOfProperty: "Résidence principale"
              });
              setPagination("actualSituation");
            }}
          >
            <input
              className={"input-text-align"}
              type="radio"
              name="UsageDuBien"
              value="Résidence principale"
              checked={
                answers.useOfProperty === "Résidence principale" ? true : null
              }
              readOnly
            />
            RÉSIDENCE PRINCIPALE
          </div>

          <div
            className={
              answers.useOfProperty === "Résidence secondaire"
                ? "three-choices-button-on"
                : "three-choices-button-off"
            }
            onClick={event => {
              setAnswers({
                ...answers,
                useOfProperty: "Résidence secondaire"
              });
              setPagination("actualSituation");
            }}
          >
            <input
              type="radio"
              name="UsageDuBien"
              value="Résidence secondaire"
              checked={
                answers.useOfProperty === "Résidence secondaire" ? true : null
              }
              onChange={event => {
                setAnswers({
                  ...answers,
                  useOfProperty: event.target.value
                });
              }}
            />
            RÉSIDENCE SECONDAIRE
          </div>
          <div
            className={
              answers.useOfProperty === "Investissemet locatif"
                ? "three-choices-button-on"
                : "three-choices-button-off"
            }
            onClick={event => {
              setAnswers({
                ...answers,
                useOfProperty: "Investissemet locatif"
              });
            }}
          >
            <input
              type="radio"
              name="UsageDuBien"
              value="Investissemet locatif"
              checked={
                answers.useOfProperty === "Investissemet locatif" ? true : null
              }
              onChange={event => {
                setAnswers({
                  ...answers,
                  useOfProperty: event.target.value
                });
              }}
            />
            INVESTISSEMENT LOCATIF
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
        param={answers.useOfProperty}
      />
    </>
  );
};

export default UsageDuBien;
