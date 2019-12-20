import React, { useState } from "react";

const MontantDuProjet = props => {
  //Get props
  const {
    setPagination,
    answers,
    setAnswers,
    setProgressBar,
    progressBar
  } = props;

  //declare state
  const [estimatedAcquireAmount, setEstimatedAcquireAmount] = useState(
    answers.amountOfProject.estimateAmountOfAcquisition || 0
  );
  const [estimatedWorksAmount, setEstimatedWorksAmount] = useState(
    answers.amountOfProject.estimatedWorksAmount || 0
  );

  const notaryOldRate = 0.0738;

  const notaryNewRate = 0.018;

  const rate =
    answers["conditionOfProperty"] === "Ancien" ? notaryOldRate : notaryNewRate;
  const notaryFees = (estimatedAcquireAmount * rate).toFixed(2);

  const calculTotalAmount = (
    Number(estimatedAcquireAmount) +
    Number(notaryFees) +
    Number(estimatedWorksAmount)
  ).toFixed(2);
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
                estimateAmountOfAcquisition: event.target.value,
                estimateAmountOfWorks: estimatedWorksAmount
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
              amountOfProject: {
                estimateAmountOfAcquisition: estimatedAcquireAmount,
                estimatedWorksAmount: event.target.value
              }
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
          setProgressBar(Number(progressBar).toFixed(2) - 14.3);
          console.log(progressBar);
        }}
      >
        Précédent
      </button>
      <button
        onClick={() => {
          setPagination("userInformation");
          setAnswers({
            ...answers,
            amountOfProject: {
              estimateAmountOfAcquisition: estimatedAcquireAmount,
              estimatedWorksAmount: estimatedWorksAmount,
              notaryFees: notaryFees,
              totalBudget: calculTotalAmount
            }
          });
          setProgressBar(Number(progressBar).toFixed(2) + 14.3);
          console.log(progressBar);
        }}
      >
        Suivant
      </button>
    </>
  );
};

export default MontantDuProjet;
