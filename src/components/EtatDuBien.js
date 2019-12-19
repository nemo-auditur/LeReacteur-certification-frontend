import React, { useState } from "react";

const EtatDuBien = props => {
  const { setPagination, answers, setAnswers } = props;

  return (
    <>
      <h1>Etat du bien</h1>
      <div>{JSON.stringify(answers)}</div>
      <form onSubmit={() => {}}>
        <input
          type="radio"
          name="EtatDuBien"
          value="Ancien"
          checked={answers.conditionOfProperty === "Ancien" ? true : null}
          onChange={event => {
            setAnswers({
              ...answers,
              conditionOfProperty: event.target.value
            });
          }}
        />
        <div>Ancien</div>
        <input
          type="radio"
          name="EtatDuBien"
          value="Neuf"
          checked={answers.conditionOfProperty === "Neuf" ? true : null}
          onChange={event => {
            setAnswers({
              ...answers,
              conditionOfProperty: event.target.value
            });
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
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default EtatDuBien;
