import React from "react";

const VotreSituationActuelle = props => {
  const { pagination, setPagination } = props;
  return (
    <>
      <div>VotreSituationActuelle</div>
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
        }}
      >
        Suivant
      </button>
      ;
    </>
  );
};

export default VotreSituationActuelle;
