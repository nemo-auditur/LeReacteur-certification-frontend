import React, { useState } from "react";

//import component
import BottomContent from "../containers/BottomContent";

const EtatDuBien = props => {
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    setProgressBar,
    progressBar
  } = props;

  const [valueConditionOfProperty, setValueConditionOfProperty] = useState(
    answers.conditionOfProperty
  );

  // page situation
  const previousPage = "home";
  const nextPage = "useOfGood";

  setProgressBar(15);

  return (
    <>
      <div className="mb-150">
        <h1 className="page-title">ETAT DU BIEN</h1>
        <div className="button-display">
          <div
            className={
              answers.conditionOfProperty === "Ancien"
                ? "two-choices-button-on"
                : "two-choices-button-off"
            }
            onClick={event => {
              setAnswers({
                ...answers,
                conditionOfProperty: "Ancien"
              });
              setValueConditionOfProperty(true);
              setPagination("useOfGood");
            }}
          >
            <input
              type="radio"
              name="EtatDuBien"
              value="Ancien"
              checked={answers.conditionOfProperty === "Ancien" ? true : null}
              readOnly
            />
            ANCIEN
          </div>
          <div
            className={
              answers.conditionOfProperty === "Neuf"
                ? "two-choices-button-on"
                : "two-choices-button-off"
            }
            onClick={event => {
              setAnswers({
                ...answers,
                conditionOfProperty: "Neuf"
              });
              setValueConditionOfProperty(true);
              setPagination("useOfGood");
            }}
          >
            <input
              type="radio"
              name="EtatDuBien"
              value="Neuf"
              checked={answers.conditionOfProperty === "Neuf" ? true : null}
              readOnly
            />
            NEUF
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
        param={answers.conditionOfProperty}
      />
    </>
  );
};

export default EtatDuBien;
