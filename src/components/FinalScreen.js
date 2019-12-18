import React from "react";

//import cookies
import Cookies from "js-cookie";

const FinalScreen = props => {
  const { pagination, setPagination, answers } = props;
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
