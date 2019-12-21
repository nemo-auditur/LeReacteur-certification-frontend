import React from "react";

const Filler = props => {
  const { percentage } = props;
  return <div className="filler" style={{ width: `${percentage}%` }} />;
};

export default Filler;
