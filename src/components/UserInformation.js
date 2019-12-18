import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const UserInformation = props => {
  const { setPagination, answers, setAnswers, copyGlobalObject } = props;

  const keyUsersMailAdress = "usersMailAdress";
  const keyEmailCheckIn = "emailCheckIn";

  const [userEmail, setUserEmail] = useState("test");
  const [emailAcceptation, setEmailAcceptation] = useState("");

  return (
    <>
      <h1>Vos Coordonnées</h1>
      <div>{JSON.stringify(answers)}</div>
      <div>Adresse e-mail emprunter</div>
      <form>
        <input
          type="text"
          name="mailAdress"
          onChange={event => {
            setUserEmail(event.target.value);
            console.log(userEmail);
          }}
        />
      </form>
      <div>
        <input
          type="checkbox"
          name="okForCommunication"
          onClick={event => {
            setEmailAcceptation(event.target.value);
            setAnswers({
              ...answers,
              usersMailAdress: userEmail
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
          setAnswers({
            ...answers,
            emailCheckIn: emailAcceptation
          });
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("finalPage");
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default UserInformation;
