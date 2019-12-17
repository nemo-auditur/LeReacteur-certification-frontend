import React from "react";

const EtatDuBien = props => {
  const { pagination, setPagination } = props;
  return (
    <>
      <div>EtatDuBien</div>
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

export default EtatDuBien;
