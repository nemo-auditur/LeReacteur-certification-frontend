// Import react components
import React, { useState, useEffect } from "react";

//import assets

//import cookies
import Cookies from "js-cookie";

//import styles
import "./App.css";

//import usual components
import Header from "./components/Header";

//import answers template
import answersTemplate from "./assets/answersTemplate";

//import pagination components
import TypeDeBien from "./components/TypeDeBien";
import EtatDuBien from "./components/EtatDuBien";
import UsageDuBien from "./components/UsageDuBien";
import VotreSituationActuelle from "./components/VotreSituationActuelle";
import SituationDuBien from "./components/SituationDuBien";
import MontantDuProjet from "./components/MontantDuProjet";
import UserInformation from "./components/UserInformation";
import FinalScreen from "./components/FinalScreen";

//Run app

function App() {
  const CookiesPage = Cookies.get("userPage") || "home";
  const CookiesData = Cookies.get("userData") || answersTemplate;

  const [pagination, setPagination] = useState(CookiesPage);
  const [answers, setAnswers] = useState(CookiesData);

  // Purpose:  if there are cookies for the user, set answers with cookie data, else, setAnswers with empty global object

  // Purpose: copy an object and inject data in the global state
  const copyGlobalObject = (
    answers,
    setAnswers,
    parameter,
    value,
    parameter2
  ) => {
    let answersCopy = Object.assign({}, answers);

    // 1st condition: handle the case where there are severa inputs to add to the object / 2nd condition: handle cases where there is only one input to add to the object.
    if (
      answersCopy[parameter][parameter2] === "" ||
      answersCopy[parameter][parameter2] === 0
    ) {
      answersCopy[parameter][parameter2] = value;
    } else {
      answersCopy[parameter] = value;
      setAnswers(answersCopy);
    }
    return answersCopy;
  };

  useEffect(() => {
    const getCookieForParseIt = Cookies.get("userData");
    console.log(typeof getCookieForParseIt);
    console.log(getCookieForParseIt);
    // const answersParsed = getCookieForParseIt.split("/").join("");
    // console.log(getCookieForParseIt);
    Cookies.set("userData", answers);
  }, [answers]);

  useEffect(() => {
    Cookies.set("userPage", pagination);
  }, [pagination]);

  // console.log(Cookies.get("userData"));

  return (
    <>
      <Header />
      {pagination === "home" ? (
        <TypeDeBien
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === "stateOfGood" ? (
        <EtatDuBien
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === "useOfGood" ? (
        <UsageDuBien
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === "actualSituation" ? (
        <VotreSituationActuelle
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === "goodSituation" ? (
        <SituationDuBien
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === "projectAmout" ? (
        <MontantDuProjet
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === "userInformation" ? (
        <UserInformation
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === "finalPage" ? (
        <FinalScreen
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
    </>
  );
}

export default App;
