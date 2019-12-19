import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const UsageDuBien = props => {
  const { setPagination, answers, setAnswers } = props;

  const [valueUseOfProperty, setValueUseOfProperty] = useState(
    answers.useOfProperty || null
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
          value="Résidence principale"
          checked={
            answers.useOfProperty === "Résidence principale" ? true : null
          }
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
          value="Résidence secondaire"
          checked={
            answers.useOfProperty === "Résidence secondaire" ? true : null
          }
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
          value="Investissemet locatif"
          checked={
            answers.useOfProperty === "Investissemet locatif" ? true : null
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
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("actualSituation");
          Cookies.set("userData", JSON.stringify(answers));
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default UsageDuBien;
