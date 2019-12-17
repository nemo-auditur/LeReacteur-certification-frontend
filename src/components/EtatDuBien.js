import React, { useState } from "react";

const EtatDuBien = props => {
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    copyGlobalObject
  } = props;

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
          setPagination(pagination - 1);
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination(pagination + 1);
          copyGlobalObject(
            answers,
            setAnswers,
            keyConditionOfProperty,
            valueConditionOfProperty
          );
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default EtatDuBien;
