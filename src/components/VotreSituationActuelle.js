import React, { useState } from "react";

const VotreSituationActuelle = props => {
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    copyGlobalObject
  } = props;

  const keyActualSituationOfOwner = "actualSituationOfOwner";

  const [actualSituationOfOwner, setActualSituationOfOwner] = useState(
    "Propriétaire"
  );
  return (
    <>
      <h1>Votre situation actuelle</h1>
      <div>{JSON.stringify(answers)}</div>

      <form onSubmit={() => {}}>
        <input
          type="radio"
          name="SituationActuelle"
          value="Locataire"
          onChange={event => setActualSituationOfOwner(event.target.value)}
        />
        <div>Locataire</div>
        <input
          type="radio"
          name="SituationActuelle"
          value="Propriétaire"
          onChange={event => setActualSituationOfOwner(event.target.value)}
        />
        <div>Neuf</div>
        <input
          type="radio"
          name="SituationActuelle"
          value="Bénéficiaire d'un logement de fonction"
          onChange={event => setActualSituationOfOwner(event.target.value)}
        />
        <div>Bénéficiaire d'un logement de fonction</div>
        <input
          type="radio"
          name="SituationActuelle"
          value="Hébergé à titre gratuit"
          onChange={event => setActualSituationOfOwner(event.target.value)}
        />
        <div>Hébergé à titre gratuit</div>
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
            keyActualSituationOfOwner,
            actualSituationOfOwner
          );
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default VotreSituationActuelle;
