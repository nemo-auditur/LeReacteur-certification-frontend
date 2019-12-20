import React, { useState } from "react";

const TypeDuBien = props => {
  //get props from App
  const {
    setPagination,
    answers,
    setAnswers,
    setProgressBar,
    progressBar
  } = props;

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
          check={answers.typeOfProperty === "Maison" ? true : ""}
          onChange={event => {
            setValueTypeOfProperty(event.target.value);
          }}
        />
        <div>Maison</div>
        <input
          type="radio"
          name="typeOfProperty"
          value="Appartement"
          check={answers.typeOfProperty === "Appartement" ? true : ""}
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
          setProgressBar(Number(progressBar).toFixed(2) + 14.3);
          console.log(progressBar);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default TypeDuBien;
