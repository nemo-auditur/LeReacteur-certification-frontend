import React from "react";

// import bottom content
import BottomContent from "../containers/BottomContent";

const VotreSituationActuelle = props => {
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    progressBar,
    setProgressBar
  } = props;

  // declare previous and next pages
  const previousPage = "useOfGood";
  const nextPage = "goodSituation";
  setProgressBar(45);

  return (
    <>
      <div className="mb-150">
        <h1 className="page-title">VOTRE SITUATION ACTUELLE</h1>
        <div className="button-display">
          <div
            className={
              answers.actualSituationOfOwner === "Locataire"
                ? "for-choices-button-on"
                : "for-choices-button-off"
            }
            onClick={event => {
              setAnswers({
                ...answers,
                actualSituationOfOwner: "Locataire"
              });
              setPagination("goodSituation");
            }}
          >
            <input
              type="radio"
              name="SituationActuelle"
              value="Locataire"
              checked={
                answers.actualSituationOfOwner === "Locataire" ? true : null
              }
              readOnly
            />
            LOCATAIRE
          </div>

          <div
            className={
              answers.actualSituationOfOwner === "Propriétaire"
                ? "for-choices-button-on"
                : "for-choices-button-off"
            }
            onClick={event => {
              setAnswers({
                ...answers,
                actualSituationOfOwner: "Propriétaire"
              });
              setPagination("goodSituation");
            }}
          >
            <input
              type="radio"
              name="SituationActuelle"
              value="Propriétaire"
              checked={
                answers.actualSituationOfOwner === "Propriétaire" ? true : null
              }
              readOnly
            />
            PROPRIÉTAIRE
          </div>

          <div
            className={
              answers.actualSituationOfOwner ===
              "Bénéficiaire d'un logement de fonction"
                ? "for-choices-button-on"
                : "for-choices-button-off"
            }
            onClick={event => {
              setAnswers({
                ...answers,
                actualSituationOfOwner: "Bénéficiaire d'un logement de fonction"
              });
              setPagination("goodSituation");
            }}
          >
            <input
              className="input-text-align"
              type="radio"
              name="SituationActuelle"
              value="Bénéficiaire d'un logement de fonction"
              checked={
                answers.actualSituationOfOwner ===
                "Bénéficiaire d'un logement de fonction"
                  ? true
                  : null
              }
              readOnly
            />
            BÉNÉFICIAIRE D'UN LOGEMENT DE FONCTION{" "}
          </div>
          <div
            className={
              answers.actualSituationOfOwner === "Hébergé à titre gratuit"
                ? "for-choices-button-on"
                : "for-choices-button-off"
            }
            onClick={event => {
              setAnswers({
                ...answers,
                actualSituationOfOwner: "Hébergé à titre gratuit"
              });
              setPagination("goodSituation");
            }}
          >
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
                setAnswers({
                  ...answers,
                  actualSituationOfOwner: event.target.value
                });
              }}
            />
            HÉBERGÉ À TITRE GRATUIT
          </div>
        </div>
      </div>
      <BottomContent
        answers={answers}
        pagination={pagination}
        setPagination={setPagination}
        previous={previousPage}
        next={nextPage}
        progressBar={progressBar}
        param={answers.actualSituationOfOwner}
      />
    </>
  );
};

export default VotreSituationActuelle;
