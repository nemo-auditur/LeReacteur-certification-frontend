import React from "react";

import Cookies from "js-cookie";

import answersTemplate from "../assets/answersTemplate";

const FinalScreen = props => {
  const { setPagination, Id, setProgressBar, setAnswers } = props;
  console.log(Id);

  return (
    <>
      <h1 className="page-title">ET VOILÀ, LE FORMULAIRE EST TERMINÉ</h1>
      <div>
        Votre numéro de dossier est le : <b>{Id}</b>
      </div>
      <button
        className="back-button mt-mb-10 width-200"
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
