import React, { useState, useEffect } from "react";

// import axios to send the file to backend
import axios from "axios";

const UserInformation = props => {
  const { setPagination, answers, setAnswers, setUserId } = props;

  const [userEmail, setUserEmail] = useState(answers.usersMailAdress || "");
  const [emailAcceptation, setEmailAcceptation] = useState(false);

  // Send the "devis" to database et get the file _id
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:8000/devisvalide", {
        ...answers
      });
      await setUserId(response.data._id);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <h1>Vos Coordonnées</h1>
      <div>{JSON.stringify(answers)}</div>
      <div>Adresse e-mail emprunter</div>
      <form>
        <input
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
      </form>
      <div>
        <input
          type="checkbox"
          name="okForCommunication"
          value={emailAcceptation}
          onChange={event => {
            {
              emailAcceptation === false
                ? setEmailAcceptation(true)
                : setEmailAcceptation(false);
            }
            setAnswers({
              ...answers,
              emailCheckIn: event.target.value
            });
          }}
        />
        <label>
          J'accepte de recevoir par email des propositions de Meilleurtaux.
        </label>
      </div>
      <button
        onClick={() => {
          setPagination("projectAmout");
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("finalPage");
          fetchData();
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default UserInformation;
