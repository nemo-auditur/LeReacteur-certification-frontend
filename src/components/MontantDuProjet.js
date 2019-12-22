import React, { useState, useEffect } from "react";

//import components
import BottomContent from "../containers/BottomContent";

const MontantDuProjet = props => {
  //Get props
  const {
    pagination,
    setPagination,
    answers,
    setAnswers,
    setProgressBar,
    progressBar
  } = props;

  // const previous and next page
  const previousPage = "goodSituation";
  const nextPage = "userInformation";
  setProgressBar(75);

  //declare state
  const [estimatedAcquireAmount, setEstimatedAcquireAmount] = useState(
    answers.amountOfProject.estimateAmountOfAcquisition || ""
  );
  const [estimatedWorksAmount, setEstimatedWorksAmount] = useState(
    answers.amountOfProject.estimatedWorksAmount || ""
  );

  // Update data of static values for notary fees and global budget everytime
  //estimatedAcquireAmount and estimatedWorksAmount are updated
  //
  useEffect(() => {
    const notaryOldRate = 0.0738;

    const notaryNewRate = 0.018;

    // determine what rate to use for calculation
    // depending if the property is "nouveau" ou "ancien"
    const rate =
      answers["conditionOfProperty"] === "Ancien"
        ? notaryOldRate
        : notaryNewRate;
    const notaryFees = (estimatedAcquireAmount * rate).toFixed(2);

    // Calculated total amount
    const calculTotalAmount = (
      Number(estimatedAcquireAmount) +
      Number(notaryFees) +
      Number(estimatedWorksAmount)
    ).toFixed(2);

    //store value in the global object
    setAnswers({
      ...answers,
      amountOfProject: {
        estimateAmountOfAcquisition: estimatedAcquireAmount,
        estimateAmountOfWorks: estimatedWorksAmount,
        notaryFees: notaryFees,
        totalBudget: calculTotalAmount
      }
    });
  }, [estimatedAcquireAmount, estimatedWorksAmount]);

  return (
    <>
      <div className="mb-150">
        <h1 className="page-title"> DÉFINISSONS LE MONTANT DE VOTRE PROJET</h1>
        <div className="text-input-container-grey">
          <div className="text-input-description">
            Montant estimé de votre acquisition*
          </div>
          <input
            className="text-input-inline"
            type="number"
            name="MontantEstimeAcquisition"
            value={estimatedAcquireAmount}
            onChange={event => {
              setEstimatedAcquireAmount(event.target.value);
            }}
          />
          <div className="euro-symbol">€</div>
        </div>
        <div className="text-input-container">
          <div className="text-input-description">
            Montant estimé des travaux
          </div>
          <input
            className="text-input-inline"
            type="number"
            name="MontantEstimeDesTravaux"
            value={estimatedWorksAmount}
            onChange={event => {
              setEstimatedWorksAmount(event.target.value);
            }}
          />
          <div className="euro-symbol">€</div>
        </div>
        <div className="text-input-container-grey">
          <div className="text-input-description">Frais de notaire</div>
          <input
            className="text-input-inline"
            type="number"
            name="FraisDeNotaire"
            value={answers.amountOfProject.notaryFees}
          />
          <div className="euro-symbol">€</div>
        </div>
        <div className="text-input-container">
          <div className="text-input-description">
            Budget total estimé du projet
          </div>
          <input
            className="text-input-inline"
            type="number"
            name="BudgetTotal"
            value={answers.amountOfProject.totalBudget}
          />
          <div className="euro-symbol">€</div>
        </div>
      </div>
      <BottomContent
        answers={answers}
        pagination={pagination}
        setPagination={setPagination}
        previous={previousPage}
        next={nextPage}
        progressBar={progressBar}
        param={estimatedAcquireAmount}
        param2={estimatedWorksAmount}
      />
    </>
  );
};

export default MontantDuProjet;
