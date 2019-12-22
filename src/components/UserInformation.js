import React, { useState } from "react";

// import axios to send the file to backend
import axios from "axios";

//import assets
import EmailImage from "../assets/images/visuel-desktop-email.jpg";

// import bottom content
import FinalBottomContent from "../containers/FinalBottomContent";

const UserInformation = props => {
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    setUserId,
    setProgressBar,
    progressBar
  } = props;

  // declare previous and next pages
  const previousPage = "projectAmount";
  const nextPage = "finalPage";

  setProgressBar(80);

  const [userEmail, setUserEmail] = useState(answers.usersMailAdress || "");
  const [emailAcceptation, setEmailAcceptation] = useState(false);

  // Send the "devis" to database et get the file _id
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-certification-back.herokuapp.com/devisvalide",
        {
          ...answers
        }
      );
      await setUserId(response.data._id);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="mb-150">
        <h1 className="page-title">Vos Coordonnées</h1>
        <div className="email-image-container">
          <div className="email-empty-blank-space"></div>
          <div className="email-text-space">
            Un devis vous sera envoyé par mail avec un récapitulatif de votre
            demande.
          </div>
          <img className="email-image" src={EmailImage} alt="desktop email" />
        </div>
        <div className="text-input-container-grey mt-mb-10">
          <div className="text-input-description">
            Adresse e-mail emprunteur
          </div>
          <input
            className="email-input"
            type="text"
            name="mailAdress"
            value={userEmail}
            onChange={event => {
              setUserEmail(event.target.value);
              setAnswers({
                ...answers,
                usersMailAdress: event.target.value
              });
            }}
          />
        </div>

        <div>
          <input
            type="checkbox"
            name="okForCommunication"
            value={emailAcceptation}
            onChange={event => {
              setEmailAcceptation(!emailAcceptation);
              setAnswers({
                ...answers,
                emailCheckIn: event.target.value
              });
              console.log(event.target.value);
            }}
          />
          <label>
            J'accepte de recevoir par email des propositions de Meilleurtaux.
          </label>
        </div>
      </div>
      <FinalBottomContent
        answers={answers}
        pagination={pagination}
        setPagination={setPagination}
        previous={previousPage}
        next={nextPage}
        progressBar={progressBar}
        param={answers.usersMailAdress}
        param2={answers.emailCheckIn}
        setUserId={setUserId}
        fetchData={fetchData}
      />
    </>
  );
};

export default UserInformation;
