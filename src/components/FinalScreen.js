import React from "react";

const FinalScreen = props => {
  const { setPagination, answers } = props;
  return (
    <>
      <div>FinalScreen</div>
      <div>{JSON.stringify(answers)}</div>
      <button
        onClick={() => {
          setPagination("userInformation");
        }}
      >
        Précédent
      </button>
    </>
  );
};

export default FinalScreen;
