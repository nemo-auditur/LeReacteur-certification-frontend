import React from "react";

const MontantDuProjet = props => {
  const { pagination, setPagination } = props;
  return (
    <>
      <div>MontantDuProjet</div>
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

export default MontantDuProjet;
