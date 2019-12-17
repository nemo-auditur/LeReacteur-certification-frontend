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
  const [pagination, setPagination] = useState(7);

  return (
    <>
      <div>Test</div>

      {pagination === 1 ? <TypeDeBien setPagination={setPagination} /> : null}
      {pagination === 2 ? <EtatDuBien setPagination={setPagination} /> : null}
      {pagination === 3 ? <UsageDuBien setPagination={setPagination} /> : null}
      {pagination === 4 ? (
        <VotreSituationActuelle setPagination={setPagination} />
      ) : null}
      {pagination === 5 ? (
        <MontantDuProjet setPagination={setPagination} />
      ) : null}
      {pagination === 6 ? (
        <UserInformation setPagination={setPagination} />
      ) : null}
      {pagination === 7 ? <FinalScreen setPagination={setPagination} /> : null}

      <div>test final</div>
    </>
  );
}

export default App;
