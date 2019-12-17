import React from "react";

const SituationDuBien = props => {
  const { pagination, setPagination } = props;
  return (
    <>
      <div>SituationDuBien</div>
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

export default SituationDuBien;
