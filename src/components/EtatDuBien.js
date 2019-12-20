import React from "react";

const EtatDuBien = props => {
  const {
    setPagination,
    answers,
    setAnswers,
    setProgressBar,
    progressBar
  } = props;

  return (
    <>
      <h1>Etat du bien</h1>
      <div>{JSON.stringify(answers)}</div>
      <form onSubmit={() => {}}>
        <input
          type="radio"
          name="EtatDuBien"
          value="Ancien"
          checked={answers.conditionOfProperty === "Ancien" ? true : ""}
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
          checked={answers.conditionOfProperty === "Neuf" ? true : ""}
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
          setProgressBar(Number(progressBar).toFixed(2) - 14.3);
          console.log(progressBar);
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("useOfGood");
          setProgressBar(Number(progressBar).toFixed(2) + 14.3);
          console.log(progressBar);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default EtatDuBien;
