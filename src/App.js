// Import react components
import React, { useState } from "react";

//import assets

//import styles
import "./App.css";

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
  // const [pagination, usePagination] = useState("");

  return (
    <>
      <div>Test</div>
      <TypeDeBien />
      <EtatDuBien />
      <UsageDuBien />
      <VotreSituationActuelle />
      <SituationDuBien />
      <MontantDuProjet />
      <UserInformation />
      <FinalScreen />
      <div>test final</div>
    </>
  );
}

export default App;
