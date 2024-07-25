import React, { useState } from 'react';
import './ReceiverForm.css';
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const steps = [
  'Location',
  'Basic Information',
  'Personal Details',
  'Admission Details',
  'Medical Info',
  'Document Upload'
];

const StepContent = ({ step }) => {
  switch (step) {
    case 0:
      return <div>Location Related Content</div>;
    case 1:
      return <div>Basic Info Related Content</div>;
    case 2:
      return <div>Personal Information Related Content</div>;
    case 3:
      return <div>Admission Details</div>;
    case 4:
      return <div>Medical Info</div>;
    case 5:
      return <div>Document Upload</div>;
    default:
      return <div>Unknown Step</div>;
  }
};

const ReceiverForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setIsFinished(true);
    } else {
      setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleGoBack = () => {
    setIsFinished(false);
    setActiveStep(0); // Redirect to the first form or set to the last form step if needed
  };

  return (
    <div className="container-fluid">
        <div className="stepper-container_text">
        <h3>Reciever’s Form </h3>
        <p>Reassure potential donors with a clear explanation of the process</p>
        </div>
        
      {!isFinished ? (
        <div className="stepper-container">
          
          <div className="row">
            <div className="col-lg-10">
              <div className="stepper-header">
                {steps.map((label, index) => (
                  <div key={index} className={`step ${index === activeStep ? 'active' : ''}`}>
                    <div className={`step-circle ${index === activeStep ? 'active' : ''}`}>
                      {index === activeStep ? index + 1 : ''}
                    </div>
                    <div className="step-label">{label}</div>
                    {index < steps.length - 1 && <div className="step-connector"></div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-2">
              <button onClick={handleNext} className="next_step">
                {activeStep === steps.length - 1 ? 'Finish' : 'Next Step'}
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="step-content">
            <StepContent step={activeStep} />
          </div>
        </div>
      ) : (
        <div className="stepper-container">
            <div className="redirect_message" onClick={handleGoBack}>
                <FaArrowLeft/>
            <p  >Go Back</p>

            </div>
  <div className="success-message">
          <FaCheckCircle className="success-icon" />
          <p className='step_completed'>Completed</p>
          <h4>Thank you for completing your blood request form</h4>
          <div className='step_success_des'>
          <p > We appreciate you trusting us with your blood request. Our dedicated team is working diligently to find a match for you. You will be contacted as soon as we have good news.</p>

          </div>
        </div>
        </div>
      
      )}
    </div>
  );
};

export default ReceiverForm;
