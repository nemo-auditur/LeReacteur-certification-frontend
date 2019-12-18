import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const UserInformation = props => {
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    copyGlobalObject
  } = props;

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
          }}
        />
        <label>
          J'accepte de recevoir par email des propositions de Meilleurtaux.
        </label>
      </div>
      <button
        onClick={() => {
          setPagination(pagination - 1);
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination(pagination + 1);
          copyGlobalObject(answers, setAnswers, keyUsersMailAdress, userEmail);
          copyGlobalObject(
            answers,
            setAnswers,
            keyEmailCheckIn,
            emailAcceptation
          );
          Cookies.set("userData", answers);
          Cookies.set("userPage", pagination);
          console.log(answers);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default UserInformation;
