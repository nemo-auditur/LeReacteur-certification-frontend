import React, { useState } from "react";

const TypeDuBien = props => {
  //get props from App
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    copyGlobalObject
  } = props;

  const typeOfProperty = "typeOfProperty";
  // Declare state for this page
  const [valueTypeOfProperty, setValueTypeOfProperty] = useState("Appartement");

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
          onChange={event => {
            setValueTypeOfProperty(event.target.value);
          }}
        />
        <div>Maison</div>
        <input
          type="radio"
          name="typeOfProperty"
          value="Appartement"
          onChange={event => {
            setValueTypeOfProperty(event.target.value);
          }}
        />
        <div>Appartement</div>
      </form>
      <button
        onClick={() => {
          setPagination(pagination + 1);
          copyGlobalObject(
            answers,
            setAnswers,
            typeOfProperty,
            valueTypeOfProperty
          );
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default TypeDuBien;
