import React from "react";

const UserInformation = props => {
  const { pagination, setPagination, answers, setAnswers } = props;
  return (
    <>
      <h1>Vos Coordonnées</h1>
      <div>{JSON.stringify(answers)}</div>

      <div>Adresse e-mail emprunter</div>
      <input type="email" name="userEmailAdress" />
      <div>
        <input type="checkbox" name="okForCommunication" />
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
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default UserInformation;
