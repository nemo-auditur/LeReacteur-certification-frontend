import React, { useState, useEffect } from "react";

// import of axios for request
import axios from "axios";

// import world countries list
import countryList from "../assets/countriesList";

const SituationDuBien = props => {
  const {
    setPagination,
    answers,
    setAnswers,
    setProgressBar,
    progressBar
  } = props;

  const [countryOfProperty, setCountryOfProperty] = useState(
    answers.addressOfProperty.country || ""
  );
  const [townOfProperty, setTownOfProperty] = useState(
    answers.addressOfProperty.country || ""
  );
  const [list, setList] = useState([]);

  // #### Get DATA from VICOPO API ####
  const fetchData = async () => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + townOfProperty
    );
    setList(response.data.cities);
  };

  // #### HANDLE COUNTRIES ####

  // Create empty array to store countryList
  const countryListOption = [];
  // Get values from every keys
  const countryListValues = Object.values(countryList);

  //Store in the empty array the list
  for (let i = 0; i < countryListValues.length; i++) {
    countryListOption.push(
      <option value={countryListValues[i]}>{countryListValues[i]}</option>
    );
  }

  // #### HANDLE CITIES ####
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

  // #### useEffect to refresh cities data while typing ####
  useEffect(() => {
    fetchData();
  }, [townOfProperty]);

  return (
    <>
      <h1>TypeDuBien</h1>
      <div>{JSON.stringify(answers)}</div>

      <div>Dans quel pays se situe votre projet?</div>
      <select
        value={countryOfProperty}
        onChange={event => {
          setCountryOfProperty(event.target.value);
          setAnswers({
            ...answers,
            addressOfProperty: {
              country: event.target.value
            }
          });
        }}
      >
        {countryListOption}
      </select>
      <div>Ville ou code postal</div>
      <input
        value={townOfProperty}
        onChange={event => {
          setTownOfProperty(event.target.value);
        }}
        // autoComplete={cityArray}
      />

      <select
        size={5}
        value={townOfProperty}
        onChange={event => {
          setTownOfProperty(event.target.value);
          setAnswers({
            ...answers,
            addressOfProperty: {
              country: countryOfProperty,
              cityOrZipCode: event.target.value
            }
          });
        }}
      >
        {cityList}
      </select>

      <button
        onClick={() => {
          setPagination("actualSituation");
          setProgressBar(Number(progressBar).toFixed(2) - 14.3);
          console.log(progressBar);
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("projectAmout");
          setProgressBar(Number(progressBar).toFixed(2) + 14.3);
          console.log(progressBar);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default SituationDuBien;
