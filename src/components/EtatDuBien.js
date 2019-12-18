import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const EtatDuBien = props => {
  const { setPagination, answers, setAnswers, copyGlobalObject } = props;

  const keyConditionOfProperty = "conditionOfProperty";

  const [valueConditionOfProperty, setValueConditionOfProperty] = useState(
    "Neuf"
  );

  return (
    <>
      <h1>Etat du bien</h1>
      <div>{JSON.stringify(answers)}</div>
      <div>{valueConditionOfProperty}</div>
      <form onSubmit={() => {}}>
        <input
          type="radio"
          name="EtatDuBien"
          value="Ancien"
          onChange={event => {
            setValueConditionOfProperty(event.target.value);
          }}
        />
        <div>Ancien</div>
        <input
          type="radio"
          name="EtatDuBien"
          value="Neuf"
          onChange={event => {
            setValueConditionOfProperty(event.target.value);
          }}
        />
        <div>Neuf</div>
      </form>
      <button
        onClick={() => {
          setPagination("home");
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("useOfGood");
          setAnswers({
            ...answers,
            conditionOfProperty: valueConditionOfProperty
          });
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default EtatDuBien;
