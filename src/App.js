// Import react components
import React, { useState } from "react";

//import assets

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
  const [pagination, setPagination] = useState(0);
  const [answers, setAnswers] = useState(answersTemplate);

  //copy an object
  const copyGlobalObject = (
    answers,
    setAnswers,
    parameter,
    value,
    parameter2
  ) => {
    let answersCopy = Object.assign({}, answers);

    // 1st condition: handle the case where there are severa inputs to add to the object / 2nd condition: handle cases where there is only one input to add to the object.
    if (answersCopy[parameter][parameter2] === "") {
      answersCopy[parameter][parameter2] = value;
    } else {
      answersCopy[parameter] = value;
      setAnswers(answersCopy);
    }
    return answersCopy;
  };

  return (
    <>
      <Header />
      {pagination === 0 ? (
        <TypeDeBien
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === 1 ? (
        <EtatDuBien
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === 2 ? (
        <UsageDuBien
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === 3 ? (
        <VotreSituationActuelle
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === 4 ? (
        <SituationDuBien
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === 5 ? (
        <MontantDuProjet
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === 6 ? (
        <UserInformation
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
      {pagination === 7 ? (
        <FinalScreen
          pagination={pagination}
          setPagination={setPagination}
          answers={answers}
          setAnswers={setAnswers}
          copyGlobalObject={copyGlobalObject}
        />
      ) : null}
    </>
  );
}

export default App;
