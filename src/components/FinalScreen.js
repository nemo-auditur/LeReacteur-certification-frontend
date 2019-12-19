import React from "react";

const FinalScreen = props => {
  const { setPagination, answers, Id } = props;
  console.log(Id);

  return (
    <>
      <div>FinalScreen</div>
      <div>{JSON.stringify(answers)}</div>
      <div>{Id}</div>
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
