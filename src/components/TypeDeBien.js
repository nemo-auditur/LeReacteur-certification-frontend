import React from "react";

const TypeDuBien = props => {
  const { pagination, setPagination } = props;

  return (
    <>
      <div>TypeDuBien</div>
      <div>{pagination}</div>
      <button
        onClick={() => {
          setPagination(pagination + 1);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default TypeDuBien;
