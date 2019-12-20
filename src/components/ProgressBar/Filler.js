import React from "react";

const Filler = props => {
  const { percentage } = props;
  return <div className="progress-bar" style={{ width: `${percentage}%` }} />;
};

export default Filler;
