import React, { useState, useEffect } from "react";

// import of axios for request
import axios from "axios";

// import world countries list
import countryList from "../assets/countriesList";

import BottomContent from "../containers/BottomContent";

const SituationDuBien = props => {
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    setProgressBar,
    progressBar
  } = props;

  // declare previous and next pages
  const previousPage = "actualSituation";
  const nextPage = "projectAmount";
  setProgressBar(60);

  const [selectOpen, setSelectOpen] = useState(false);

  const [countryOfProperty, setCountryOfProperty] = useState(
    answers.addressOfProperty.country || "France"
  );
  const [townOfProperty, setTownOfProperty] = useState(
    answers.addressOfProperty.cityOrZipCode
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
      <option key={i} value={countryListValues[i]}>
        {countryListValues[i]}
      </option>
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
      <div className="mb-100">
        <h1 className="page-title">OÙ SE SITUE LE BIEN À FINANCER?</h1>
        <div className="property-location-country-container">
          <div className="property-location-country-question">
            Dans quel pays se situe votre projet?
          </div>
          <select
            className="property-location-country-list"
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
        </div>
        <div className="text-input-container">
          <div className="text-input-description">Ville ou code postal</div>
          <div className="property-location-city-choice-container">
            <input
              className="text-input-inline"
              value={townOfProperty}
              onChange={event => {
                setTownOfProperty(event.target.value);
                setSelectOpen(true);
              }}
            />
            {selectOpen === true ? (
              <select
                className="property-location-city-select"
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
                onClick={() => {
                  setSelectOpen(false);
                }}
              >
                {cityList}
              </select>
            ) : null}
          </div>
        </div>

        <div className="property-location-city-explaination">
          <div>
            La connaissance du code postal du bien permettra de calculer les
            frais de notaires selon les conditions en vigueur dans le
            département concerné.
          </div>
          <div>
            Si vous êtes en recherche de bien sur plusieurs commununes, indiquez
            une commune ciblée.
          </div>
        </div>
      </div>
      <BottomContent
        answers={answers}
        pagination={pagination}
        setPagination={setPagination}
        previous={previousPage}
        next={nextPage}
        progressBar={progressBar}
        param={answers.addressOfProperty.country}
        param2={answers.addressOfProperty.cityOrZipCode}
      />
    </>
  );
};

export default SituationDuBien;
