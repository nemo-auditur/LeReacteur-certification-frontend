import React from "react";

import ProgressBar from "../components/ProgressBar/ProgressBar";

const Footer = props => {
  const { progressBar } = props;
  return (
    <>
      <ProgressBar progressBar={progressBar} />
      <div>Test</div>
    </>
  );
};

export default Footer;
