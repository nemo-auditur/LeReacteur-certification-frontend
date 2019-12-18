import React, { useState, useEffect } from "react";

// import of axios for request
import axios from "axios";

//import cookies
import Cookies from "js-cookie";

// import world countries list
import countries from "../assets/countriesList";

const SituationDuBien = props => {
  const { setPagination, answers, setAnswers, copyGlobalObject } = props;

  const keyAddresseOfProperty = "addressOfProperty";
  const keycountryOfProperty = "country";
  const keycityOrZipCode = "cityOrZipCode";

  const [countryOfProperty, setCountryOfProperty] = useState("France");
  const [list, setList] = useState([]);
  const [townOfProperty, setTownOfProperty] = useState();

  const fetchData = async () => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + countryOfProperty
    );
    setList(response.data.cities);
    console.log(response.data.cities);
  };

  const cityArray = [];
  for (let i = 0; i < list.length; i++) {
    const key = list[i];
    let city = key.city;
    cityArray.push(city);
  }

  const cityList = [];

  for (let i = 0; i < cityArray.length; i++) {
    cityList.push(
      <option value={cityArray[i]} key={i}>
        {cityArray[i]}
      </option>
    );
  }

  useEffect(() => {
    fetchData();
  }, [townOfProperty]);

  return (
    <>
      <h1>TypeDuBien</h1>
      <div>{JSON.stringify(answers)}</div>

      <form>
        <div>Dans quel pays se situe votre projet?</div>
        <select
          value={countryOfProperty}
          onChange={event => {
            setCountryOfProperty(event.target.value);
            setAnswers({
              ...answers,
              addressOfProperty: { country: countryOfProperty }
            });
          }}
        >
          {countries.map(country => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>
        <div>Ville ou code postal</div>
        <input
          value={townOfProperty}
          onChange={event => {
            setTownOfProperty(event.target.value);
          }}
          autoComplete={cityArray}
        />
        {townOfProperty !== undefined ? (
          <select
            size={5}
            value={townOfProperty}
            onChange={event => {
              setTownOfProperty(event.target.value);
              setAnswers({
                ...answers,
                addressOfProperty: { cityOrZipCode: townOfProperty }
              });
            }}
          >
            {cityList}
          </select>
        ) : null}
      </form>
      <button
        onClick={() => {
          setPagination("actualSituation");
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("projectAmout");
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default SituationDuBien;
