import React from "react";

const UserInformation = props => {
  const { pagination, setPagination } = props;
  return (
    <>
      <div>UserInformation</div>
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

export default UserInformation;
