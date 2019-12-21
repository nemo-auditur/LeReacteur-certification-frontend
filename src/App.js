// Import react components
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import cookies
import Cookies from "js-cookie";

//import styles
import "./App.css";

//import usual components
import Header from "./containers/Header";

import BackOffice from "./containers/BackOffice";
import BackOfficeReadOne from "./containers/BackOfficeReadOne";
import BackOfficeLogIn from "./containers/BackOfficeLogIn";

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
  let CookiesProgressBar = Cookies.get("progressBar");

  // check if Cookies are undefined --> if so, set default value
  if (CookiesData === undefined) {
    CookiesData = answersTemplate;
  }

  if (CookiesPage === undefined) {
    CookiesPage = "home";
  }

  if (CookiesProgressBar === undefined) {
    CookiesProgressBar = 0;
  }

  //setState relying if there are cookies or not
  const [pagination, setPagination] = useState(CookiesPage);
  const [answers, setAnswers] = useState(CookiesData);
  const [Id, setUserId] = useState("");
  const [adminConnected, setAdminConnected] = useState(false);
  const [progressBar, setProgressBar] = useState(CookiesProgressBar);

  //set userData everytime the global state is updated
  useEffect(() => {
    Cookies.set("userData", answers);
  }, [answers]);

  //set userPage everytime the pagination is updated
  useEffect(() => {
    Cookies.set("userPage", pagination);
  }, [pagination]);

  useEffect(() => {
    Cookies.set("progressBar", progressBar);
  }, [progressBar]);

  return (
    <>
      <div className="app">
        <div className="container">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {pagination === "home" ? (
                  <>
                    <TypeDeBien
                      pagination={pagination}
                      setPagination={setPagination}
                      answers={answers}
                      setAnswers={setAnswers}
                      progressBar={progressBar}
                      setProgressBar={setProgressBar}
                    />
                  </>
                ) : null}
                {pagination === "stateOfGood" ? (
                  <>
                    <EtatDuBien
                      pagination={pagination}
                      setPagination={setPagination}
                      answers={answers}
                      setAnswers={setAnswers}
                      progressBar={progressBar}
                      setProgressBar={setProgressBar}
                    />
                  </>
                ) : null}
                {pagination === "useOfGood" ? (
                  <>
                    <UsageDuBien
                      pagination={pagination}
                      setPagination={setPagination}
                      answers={answers}
                      setAnswers={setAnswers}
                      progressBar={progressBar}
                      setProgressBar={setProgressBar}
                    />
                  </>
                ) : null}
                {pagination === "actualSituation" ? (
                  <>
                    <VotreSituationActuelle
                      pagination={pagination}
                      setPagination={setPagination}
                      answers={answers}
                      setAnswers={setAnswers}
                      progressBar={progressBar}
                      setProgressBar={setProgressBar}
                    />
                  </>
                ) : null}
                {pagination === "goodSituation" ? (
                  <>
                    <SituationDuBien
                      pagination={pagination}
                      setPagination={setPagination}
                      answers={answers}
                      setAnswers={setAnswers}
                      progressBar={progressBar}
                      setProgressBar={setProgressBar}
                    />
                  </>
                ) : null}
                {pagination === "projectAmount" ? (
                  <>
                    <MontantDuProjet
                      pagination={pagination}
                      setPagination={setPagination}
                      answers={answers}
                      setAnswers={setAnswers}
                      progressBar={progressBar}
                      setProgressBar={setProgressBar}
                    />
                  </>
                ) : null}
                {pagination === "userInformation" ? (
                  <>
                    <UserInformation
                      pagination={pagination}
                      setPagination={setPagination}
                      answers={answers}
                      setAnswers={setAnswers}
                      setUserId={setUserId}
                      setProgressBar={setProgressBar}
                    />
                  </>
                ) : null}
                {pagination === "finalPage" ? (
                  <>
                    <FinalScreen
                      pagination={pagination}
                      setAnswers={setAnswers}
                      setPagination={setPagination}
                      setProgressBar={setProgressBar}
                      answers={answers}
                      Id={Id}
                    />
                  </>
                ) : null}
              </Route>
              <Route path="/backofficelogin/">
                <BackOfficeLogIn
                  adminConnected={adminConnected}
                  setAdminConnected={setAdminConnected}
                />
              </Route>
              <Route path="/backofficereadone/:id">
                <BackOfficeReadOne />
              </Route>
              <Route path="/backoffice">
                <BackOffice />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
