// Import react components
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import cookies
import Cookies from "js-cookie";

//import styles
import "./App.css";

//import usual components
import Header from "./components/Header";

import BackOffice from "./containers/BackOffice";
import BackOfficeReadOne from "./containers/BackOfficeReadOne";

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
  //get cookies
  let CookiesPage = Cookies.get("userPage");
  let CookiesData = Cookies.getJSON("userData");

  // check if Cookies are undefined --> if so, set default value
  if (CookiesData === undefined) {
    CookiesData = answersTemplate;
  }

  if (CookiesPage === undefined) {
    CookiesPage = "home";
  }

  //setState relying if there are cookies or not
  const [pagination, setPagination] = useState(CookiesPage);
  const [answers, setAnswers] = useState(CookiesData);
  const [Id, setUserId] = useState("");

  //set userData everytime the global state is updated
  useEffect(() => {
    Cookies.set("userData", answers);
  }, [answers]);

  //set userPage everytime the pagination is updated
  useEffect(() => {
    Cookies.set("userPage", pagination);
  }, [pagination]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {pagination === "home" ? (
              <TypeDeBien
                pagination={pagination}
                setPagination={setPagination}
                answers={answers}
                setAnswers={setAnswers}
              />
            ) : null}
            {pagination === "stateOfGood" ? (
              <EtatDuBien
                pagination={pagination}
                setPagination={setPagination}
                answers={answers}
                setAnswers={setAnswers}
              />
            ) : null}
            {pagination === "useOfGood" ? (
              <UsageDuBien
                pagination={pagination}
                setPagination={setPagination}
                answers={answers}
                setAnswers={setAnswers}
              />
            ) : null}
            {pagination === "actualSituation" ? (
              <VotreSituationActuelle
                pagination={pagination}
                setPagination={setPagination}
                answers={answers}
                setAnswers={setAnswers}
              />
            ) : null}
            {pagination === "goodSituation" ? (
              <SituationDuBien
                pagination={pagination}
                setPagination={setPagination}
                answers={answers}
                setAnswers={setAnswers}
              />
            ) : null}
            {pagination === "projectAmout" ? (
              <MontantDuProjet
                pagination={pagination}
                setPagination={setPagination}
                answers={answers}
                setAnswers={setAnswers}
              />
            ) : null}
            {pagination === "userInformation" ? (
              <UserInformation
                pagination={pagination}
                setPagination={setPagination}
                answers={answers}
                setAnswers={setAnswers}
                setUserId={setUserId}
              />
            ) : null}
            {pagination === "finalPage" ? (
              <FinalScreen
                pagination={pagination}
                setPagination={setPagination}
                answers={answers}
                Id={Id}
              />
            ) : null}
          </Route>
          <Route path="/backoffice">
            <BackOffice />
          </Route>
          <Route path="/backofficereadone">
            <BackOfficeReadOne />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
