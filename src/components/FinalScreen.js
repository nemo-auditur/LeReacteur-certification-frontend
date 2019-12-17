import React from "react";

const FinalScreen = props => {
  const { pagination, setPagination, answers, setAnswers } = props;
  return (
    <>
      <div>FinalScreen</div>
      <div>{JSON.stringify(answers)}</div>
      <button
        onClick={() => {
          setPagination(pagination - 1);
        }}
      >
        Précédent
      </button>
    </>
  );
};

export default FinalScreen;
