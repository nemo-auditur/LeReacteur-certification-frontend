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

  useEffect(() => {
    const notaryOldRate = 0.0738;

    const notaryNewRate = 0.018;

    const rate =
      answers["conditionOfProperty"] === "Ancien"
        ? notaryOldRate
        : notaryNewRate;
    const notaryFees = (estimatedAcquireAmount * rate).toFixed(2);

    const calculTotalAmount = (
      Number(estimatedAcquireAmount) +
      Number(notaryFees) +
      Number(estimatedWorksAmount)
    ).toFixed(2);

    setAnswers({
      ...answers,
      amountOfProject: {
        estimateAmountOfAcquisition: estimatedAcquireAmount,
        estimateAmountOfWorkds: estimatedWorksAmount,
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
              // setAnswers({
              //   ...answers,
              //   amountOfProject: {
              //     estimateAmountOfAcquisition: event.target.value
              //   }
              // });
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
              // setAnswers({
              //   ...answers,
              //   amountOfProject: {
              //     estimateAmountOfAcquisition: estimatedAcquireAmount,
              //     estimateAmountOfWorkds: event.target.value
              //   }
              // });
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
            // onChange={notaryFees => {
            // setAnswers({
            //   ...answers,
            //   amountOfProject: {
            //     estimateAmountOfAcquisition: estimatedAcquireAmount,
            //     estimateAmountOfWorkds: estimatedWorksAmount,
            //     notaryFees: notaryFees
            //   }
            // });
            // }}
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
            // onChange={calculTotalAmount => {
            //   setAnswers({
            //     ...answers,
            //     amountOfProject: {
            //       estimateAmountOfAcquisition: estimatedAcquireAmount,
            //       estimatedWorksAmount: estimatedWorksAmount,
            //       notaryFees: notaryFees,
            //       totalBudget: calculTotalAmount
            //     }
            //   });
            // }}
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
      />
    </>
  );
};

export default MontantDuProjet;
