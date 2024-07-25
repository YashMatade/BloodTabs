import React from "react";
import "./DonationProcess.css"; // Import custom CSS
import heart from "../../../../assets/heart.png";
import fact_check from "../../../../assets/fact_check.png";
import app_registration from "../../../../assets/app_registration.png";
import volunteer_activism from "../../../../assets/volunteer_activism.png";

const DonationProcess = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-2">The Donation Process</h2>
      <p className="mb-5">
        Reassure potential donors with a clear explanation of the process
      </p>
      <div className="row justify-content-center">
        <div
          className="col-md-4 d-flex flex-column align-items-center"
          style={{ marginTop: "200px" }}
        >
          <div className="step-circle mb-3">
            <span className="step-number">1</span>
          </div>
          <div className="step-content-circle">
            <div className="step-content">
              <img src={fact_check} alt="" />
              <h4>Registration</h4>
              <p>Filling out a brief health questionnaire.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="step-circle mb-3">
            <span className="step-number">2</span>
          </div>
          <div className="step-content-circle">
            <div className="step-content">
                <img src={app_registration} alt="" />
              <h4>Mini-physical</h4>
              <p>Checking temperature, blood pressure, and pulse.</p>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 d-flex flex-column align-items-center "
          style={{ marginTop: "200px" }}
        >
          <div className="step-circle mb-3">
            <span className="step-number">3</span>
          </div>
          <div className="step-content-circle">
            <div className="step-content">
            <img src={volunteer_activism} alt="" />
              <h4>Blood Donation</h4>
              <p>
                A comfortable process with sterile equipment  taking around <br /> 10-12 
                minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ marginTop: "-150px" }}>
        <img
          src={heart}
          style={{ height: "200px", width: "auto" }}
          alt="heartbeat"
        />
      </div>
    </div>
  );
};

export default DonationProcess;
