// Import react components
import React, { useState } from "react";

//import assets

//import styles
import "./App.css";

//import usual components
import Header from "./components/Header";

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
  const [pagination, setPagination] = useState(1);

  return (
    <>
      <Header />
      {pagination === 1 ? (
        <TypeDeBien pagination={pagination} setPagination={setPagination} />
      ) : null}
      {pagination === 2 ? (
        <EtatDuBien pagination={pagination} setPagination={setPagination} />
      ) : null}
      {pagination === 3 ? (
        <UsageDuBien pagination={pagination} setPagination={setPagination} />
      ) : null}
      {pagination === 4 ? (
        <VotreSituationActuelle
          pagination={pagination}
          setPagination={setPagination}
        />
      ) : null}
      {pagination === 5 ? (
        <SituationDuBien
          pagination={pagination}
          setPagination={setPagination}
        />
      ) : null}
      {pagination === 6 ? (
        <MontantDuProjet
          pagination={pagination}
          setPagination={setPagination}
        />
      ) : null}
      {pagination === 7 ? (
        <UserInformation
          pagination={pagination}
          setPagination={setPagination}
        />
      ) : null}
      {pagination === 8 ? (
        <FinalScreen pagination={pagination} setPagination={setPagination} />
      ) : null}

      <div>test final</div>
    </>
  );
}

export default App;
