import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const UsageDuBien = props => {
  const { setPagination, answers, setAnswers } = props;

  const [valueUseOfProperty, setValueUseOfProperty] = useState(
    "Résidence secondaire"
  );

  return (
    <>
      <h1>Usage du bien</h1>
      <div>{JSON.stringify(answers)}</div>
      <form onSubmit={() => {}}>
        <input
          type="radio"
          name="UsageDuBien"
          value="Résidence principale"
          onChange={event => {
            setValueUseOfProperty(event.target.value);
          }}
        />
        <div>Résidence principale</div>
        <input
          type="radio"
          name="UsageDuBien"
          value="Résidence secondaire"
          onChange={event => {
            setValueUseOfProperty(event.target.value);
          }}
        />
        <div>Résidence secondaire</div>
        <input
          type="radio"
          name="UsageDuBien"
          value="Investissemet locatif"
          onChange={event => {
            setValueUseOfProperty(event.target.value);
          }}
        />
        <div>Investissement locatif</div>
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
          setAnswers({
            ...answers,
            useOfProperty: valueUseOfProperty
          });
          Cookies.set("userData", JSON.stringify(answers));
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default UsageDuBien;
