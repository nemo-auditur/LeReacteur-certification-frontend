import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const VotreSituationActuelle = props => {
  const { setPagination, answers, setAnswers } = props;

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
          setPagination("useOfGood");
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("goodSituation");
          setAnswers({
            ...answers,
            actualSituationOfOwner: actualSituationOfOwner
          });
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default VotreSituationActuelle;
