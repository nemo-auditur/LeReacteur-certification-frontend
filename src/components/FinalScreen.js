import React from "react";

const FinalScreen = props => {
  const { pagination, setPagination } = props;
  return (
    <>
      <div>FinalScreen</div>
      <button
        onClick={() => {
          setPagination(pagination - 1);
        }}
      >
        Précédent
      </button>
      ;
    </>
  );
};

export default FinalScreen;
