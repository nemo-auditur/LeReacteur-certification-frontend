import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const UsageDuBien = props => {
  const {
    setPagination,
    answers,
    setAnswers,
    setProgressBar,
    progressBar
  } = props;

  const [valueUseOfProperty, setValueUseOfProperty] = useState(
    answers.useOfProperty || ""
  );

  return (
    <>
      <h1>Usage du bien</h1>
      <div>{JSON.stringify(answers)}</div>
      <form onSubmit={() => {}}>
        <div>Résidence principale</div>
        <input
          type="radio"
          name="UsageDuBien"
          value={valueUseOfProperty}
          checked={answers.useOfProperty === "Résidence principale" ? true : ""}
          onChange={event => {
            setValueUseOfProperty(event.target.value);
            setAnswers({
              ...answers,
              useOfProperty: event.target.value
            });
          }}
        />
        <div>Résidence secondaire</div>

        <input
          type="radio"
          name="UsageDuBien"
          value={valueUseOfProperty}
          checked={answers.useOfProperty === "Résidence secondaire" ? true : ""}
          onChange={event => {
            setValueUseOfProperty(event.target.value);
            setAnswers({
              ...answers,
              useOfProperty: event.target.value
            });
          }}
        />
        <div>Investissement locatif</div>

        <input
          type="radio"
          name="UsageDuBien"
          value={valueUseOfProperty}
          checked={
            answers.useOfProperty === "Investissemet locatif" ? true : ""
          }
          onChange={event => {
            setValueUseOfProperty(event.target.value);
            setAnswers({
              ...answers,
              useOfProperty: event.target.value
            });
          }}
        />
      </form>
      <button
        onClick={() => {
          setPagination("stateOfGood");
          setProgressBar(Number(progressBar).toFixed(2) - 14.3);
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("actualSituation");
          Cookies.set("userData", JSON.stringify(answers));
          setProgressBar(Number(progressBar).toFixed(2) + 14.3);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default UsageDuBien;
