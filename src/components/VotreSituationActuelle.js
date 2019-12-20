import React, { useState } from "react";

const VotreSituationActuelle = props => {
  const {
    setPagination,
    answers,
    setAnswers,
    setProgressBar,
    progressBar
  } = props;

  const [actualSituationOfOwner, setActualSituationOfOwner] = useState(
    answers.actualSituationOfOwner
  );
  return (
    <>
      <h1>Votre situation actuelle</h1>
      <div>{JSON.stringify(answers)}</div>

      <form onSubmit={() => {}}>
        <div>Locataire</div>
        <input
          type="radio"
          name="SituationActuelle"
          value={actualSituationOfOwner}
          checked={answers.actualSituationOfOwner === "Locataire" ? true : ""}
          onChange={event => {
            setActualSituationOfOwner(event.target.value);
            setAnswers({
              ...answers,
              actualSituationOfOwner: event.target.value
            });
          }}
        />
        <div>Propriétaire</div>
        <input
          type="radio"
          name="SituationActuelle"
          value={actualSituationOfOwner}
          checked={
            answers.actualSituationOfOwner === "Propriétaire" ? true : ""
          }
          onChange={event => {
            setActualSituationOfOwner(event.target.value);
            setAnswers({
              ...answers,
              actualSituationOfOwner: event.target.value
            });
          }}
        />
        <div>Bénéficiaire d'un logement de fonction</div>

        <input
          type="radio"
          name="SituationActuelle"
          value={actualSituationOfOwner}
          checked={
            answers.actualSituationOfOwner ===
            "Bénéficiaire d'un logement de fonction"
              ? true
              : null
          }
          onChange={event => {
            setActualSituationOfOwner(event.target.value);
            setAnswers({
              ...answers,
              actualSituationOfOwner: event.target.value
            });
          }}
        />
        <div>Hébergé à titre gratuit</div>
        <input
          type="radio"
          name="SituationActuelle"
          value={actualSituationOfOwner}
          checked={
            answers.actualSituationOfOwner === "Hébergé à titre gratuit"
              ? true
              : null
          }
          onChange={event => {
            setActualSituationOfOwner(event.target.value);
            setAnswers({
              ...answers,
              actualSituationOfOwner: event.target.value
            });
          }}
        />
      </form>
      <button
        onClick={() => {
          setPagination("useOfGood");
          setProgressBar(Number(progressBar).toFixed(2) - 14.3);
          console.log(progressBar);
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("goodSituation");
          setProgressBar(Number(progressBar).toFixed(2) + 14.3);
          console.log(progressBar);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default VotreSituationActuelle;
