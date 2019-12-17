import React from "react";

const UsageDuBien = props => {
  const { pagination, setPagination } = props;
  return (
    <>
      <div>UsageDuBien</div>
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

export default UsageDuBien;
