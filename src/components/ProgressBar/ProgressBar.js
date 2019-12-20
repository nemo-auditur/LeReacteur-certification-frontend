import React from "react";

import Filler from "./Filler";

const ProgressBar = props => {
  const { progressBar } = props;
  return (
    <div className="progress-bar">
      <Filler percentage={progressBar} />
    </div>
  );
};

export default ProgressBar;
