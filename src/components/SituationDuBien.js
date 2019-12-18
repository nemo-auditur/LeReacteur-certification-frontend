import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const SituationDuBien = props => {
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    copyGlobalObject
  } = props;

  const keyAddresseOfProperty = "addressOfProperty";
  const keycountryOfProperty = "country";
  const keycityOrZipCode = "cityOrZipCode";

  const [countryOfProperty, setCountryOfProperty] = useState("France");
  const [townOfProperty, seTownOfProperty] = useState("Paris");
  return (
    <>
      <h1>TypeDuBien</h1>
      <div>{JSON.stringify(answers)}</div>

      <form>
        <div>Dans quel pays se situe votre projet?</div>
        <input
          type="text"
          name="countryOfProperty"
          onChange={event => {
            setCountryOfProperty(event.target.value);
          }}
        />
        <div>Ville ou code postal</div>
        <input
          type="text"
          name="townOfProperty"
          onChange={event => {
            seTownOfProperty(event.target.value);
          }}
        />
      </form>
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
          copyGlobalObject(
            answers,
            setAnswers,
            keyAddresseOfProperty,
            countryOfProperty,
            keycountryOfProperty
          );
          copyGlobalObject(
            answers,
            setAnswers,
            keyAddresseOfProperty,
            townOfProperty,
            keycityOrZipCode
          );
          Cookies.set("userData", JSON.stringify(answers));
          Cookies.set("userPage", pagination);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default SituationDuBien;
