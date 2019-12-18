import React, { useState } from "react";

//import cookies
import Cookies from "js-cookie";

const MontantDuProjet = props => {
  //Get props
  const { setPagination, answers, setAnswers, copyGlobalObject } = props;

  //
  const keyAmountOfProject = "amountOfProject";
  const keyEstimateAmountOfAcquisition = "estimateAmountOfAcquisition";
  const keyEstimateAmountOfWorkds = "estimateAmountOfWorkds";
  const keyNotaryFees = "notaryFees";
  const keyTotalBudget = "totalBudget";

  //declare state
  const [estimatedAcquireAmount, setEstimatedAcquireAmount] = useState(0);
  const [estimatedWorksAmount, setEstimatedWorksAmount] = useState(0);

  const notaryOldRate = 0.0738;

  const notaryNewRate = 0.018;

  const rate =
    answers["conditionOfProperty"] === "Ancien" ? notaryOldRate : notaryNewRate;
  const notaryFees = estimatedAcquireAmount * rate;

  const calculTotalAmount =
    Number(estimatedAcquireAmount) +
    Number(notaryFees) +
    Number(estimatedWorksAmount);

  return (
    <>
      <div>{JSON.stringify(answers)}</div>
      <form onSubmit={() => {}}>
        <div>Montant estimé de votre acquisition*</div>
        <input
          type="number"
          name="MontantEstimeAcquisition"
          onChange={event => {
            setEstimatedAcquireAmount(event.target.value);
            setAnswers({
              ...answers,
              amountOfProject: {
                estimateAmountOfAcquisition: estimatedAcquireAmount
              }
            });
          }}
        />
        <div>Montant estimé des travaux</div>
        <input
          type="number"
          name="MontantEstimeDesTravaux"
          onChange={event => {
            setEstimatedWorksAmount(event.target.value);
            setAnswers({
              ...answers,
              amountOfProject: { estimateAmountOfWorkds: estimatedWorksAmount }
            });
          }}
        />
        <div>Frais de notaire</div>
        <input type="number" name="FraisDeNotaire" value={notaryFees} />
        <div>Budget total estimé du projet</div>
        <input type="number" name="BudgetTotal" value={calculTotalAmount} />
      </form>
      <button
        onClick={() => {
          setPagination("goodSituation");
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("userInformation");
          setAnswers({
            ...answers,
            amountOfProject: { notaryFees: notaryFees }
          });
          setAnswers({
            ...answers,
            amountOfProject: { totalBudget: calculTotalAmount }
          });
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default MontantDuProjet;
