import React, { useState } from "react";

const TypeDuBien = props => {
  //get props from App
  const { setPagination, answers, setAnswers } = props;

  // Declare state for this page
  const [valueTypeOfProperty, setValueTypeOfProperty] = useState(
    answers.typeOfProperty
  );

  return (
    <>
      <h1>TypeDuBien</h1>
      <div>{JSON.stringify(answers)}</div>
      <div>{valueTypeOfProperty}</div>
      <form>
        <input
          type="radio"
          name="typeOfProperty"
          value="Maison"
          check={answers.typeOfProperty === "Maison" ? true : null}
          onChange={event => {
            setValueTypeOfProperty(event.target.value);
          }}
        />
        <div>Maison</div>
        <input
          type="radio"
          name="typeOfProperty"
          value="Appartement"
          check={answers.typeOfProperty === "Appartement" ? true : null}
          onChange={event => {
            setValueTypeOfProperty(event.target.value);
          }}
        />
        <div>Appartement</div>
      </form>
      <button
        onClick={() => {
          setPagination("stateOfGood");
          setAnswers({
            ...answers,
            typeOfProperty: valueTypeOfProperty
          });
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default TypeDuBien;
