import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const MontantDuProjet = props => {
  //Get props
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    copyGlobalObject
  } = props;

  //
  const keyAmountOfProject = "amountOfProject";
  const keyEstimateAmountOfAcquisition = "estimateAmountOfAcquisition";
  const keyEstimateAmountOfWorkds = "estimateAmountOfWorkds";
  const keyNotaryFees = "notaryFees";
  const keyTotalBudget = "totalBudget";

  //declare state
  const [estimatedAcquireAmount, setEstimatedAcquireAmount] = useState(0);
  const [estimatedWorksAmount, setEstimatedWorksAmount] = useState(0);
  const [notaryFees, setNotaryFees] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <>
      <div>{JSON.stringify(answers)}</div>
      <form onSubmit={() => {}}>
        <div>Montant estimé de votre acquisition*</div>
        <input
          type="number"
          name="MontantEstimeAcquisition"
          onChange={event => {
            setEstimatedAcquireAmount(Number(event.target.value));
            // setTotalAmount((totalAmount += Number(event.target.value)));
          }}
        />
        <div>Montant estimé des travaux</div>
        <input
          type="number"
          name="MontantEstimeDesTravaux"
          onChange={event => {
            setEstimatedWorksAmount(Number(event.target.value));
            // setTotalAmount((totalAmount += Number(event.target.value)));
          }}
        />
        <div>Frais de notaire</div>
        <input
          type="number"
          name="FraisDeNotaire"
          onChange={event => {
            setNotaryFees(Number(event.target.value));
            // setTotalAmount((totalAmount += Number(event.target.value)));
          }}
        />
        <div>Budget total estimé du projet</div>
        <input type="number" name="BudgetTotal" value={totalAmount} />
      </form>
      <button
        onClick={() => {
          setPagination(pagination - 1);
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination(pagination + 1);
          copyGlobalObject(
            answers,
            setAnswers,
            keyAmountOfProject,
            estimatedAcquireAmount,
            keyEstimateAmountOfAcquisition
          );
          copyGlobalObject(
            answers,
            setAnswers,
            keyAmountOfProject,
            estimatedWorksAmount,
            keyEstimateAmountOfWorkds
          );
          copyGlobalObject(
            answers,
            setAnswers,
            keyAmountOfProject,
            notaryFees,
            keyNotaryFees
          );
          copyGlobalObject(
            answers,
            setAnswers,
            keyAmountOfProject,
            totalAmount,
            keyTotalBudget
          );
          Cookies.set("userData", JSON.stringify(answers));
          Cookies.set("userPage", pagination);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default MontantDuProjet;
