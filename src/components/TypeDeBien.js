import React from "react";

const TypeDuBien = props => {
  const { setPagination } = props;
  console.log(setPagination);
  return (
    <>
      <div>TypeDuBien</div>
      <div>{setPagination}</div>
    </>
  );
};

export default TypeDuBien;
