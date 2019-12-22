import React from "react";

import ProgressBar from "../components/ProgressBar/ProgressBar";

// Container for the progressBar
const Footer = props => {
  const { progressBar } = props;
  return (
    <>
      <ProgressBar progressBar={progressBar} />
    </>
  );
};

export default Footer;
