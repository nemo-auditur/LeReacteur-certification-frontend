import React from "react";

import Cookies from "js-cookie";

//import default global object
import answersTemplate from "../assets/answersTemplate";

const FinalScreen = props => {
  const { setPagination, Id, setProgressBar, setAnswers } = props;

  return (
    <>
      <h1 className="page-title">ET VOILÀ, LE FORMULAIRE EST TERMINÉ</h1>
      <div>
        Votre numéro de dossier est le : <b>{Id}</b>
      </div>
      <button
        className="back-button mt-mb-10 width-200"
        // remove all the cookies
        // send the user to the home page
        // reset the progress bar to "0"
        // reset global object with the default template
        onClick={() => {
          Cookies.remove("userData");
          Cookies.remove("progressBar");
          setPagination("home");
          setProgressBar(0);
          setAnswers(answersTemplate);
        }}
      >
        Faites une nouvelle simulation!
      </button>
    </>
  );
};

export default FinalScreen;
