import React, { useState } from "react";

const VotreSituationActuelle = props => {
  const { setPagination, answers, setAnswers } = props;

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
          value="Locataire"
          checked={answers.actualSituationOfOwner === "Locataire" ? true : null}
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
          value="Propriétaire"
          checked={
            answers.actualSituationOfOwner === "Propriétaire" ? true : null
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
          value="Bénéficiaire d'un logement de fonction"
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
          value="Hébergé à titre gratuit"
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
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("goodSituation");
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default VotreSituationActuelle;
