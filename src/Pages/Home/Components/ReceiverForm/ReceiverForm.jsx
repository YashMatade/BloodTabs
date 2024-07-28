import React, { useState } from 'react';
import './ReceiverForm.css';
import { FaArrowRight, FaCheckCircle, FaSearch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { FiUpload } from 'react-icons/fi';
import { IoIosSearch } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";



import { FaCloudUploadAlt } from "react-icons/fa";

import D from '/d.png';
import Region from '/region.png';


const steps = [
  'Location',
  'Basic Information',
  'Personal Details',
  'Admission Details',
  'Medical Info',
  'Document Upload'
];

const StepContent = ({ step, selectedBloodType, setSelectedBloodType }) => {
  const [showOtpFields, setShowOtpFields] = useState(false);
  const [status, setStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [department, setDepartment] = useState('');
  const [roomFloor, setRoomFloor] = useState('');
  const [landmark, setLandmark] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');


  const regions = [
    {
      regionname: "Koramangala",
      PinCode: "560034",
      regionImg: Region,
    },
    {
      regionname: "Indiranagar",
      PinCode: "560038",
      regionImg: Region,
    },
    {
      regionname: "Whitefield",
      PinCode: "560066",
      regionImg: Region,
    },
    {
      regionname: "Jayanagar",
      PinCode: "560041",
      regionImg: Region,
    },
    {
      regionname: "Marathahalli",
      PinCode: "560037",
      regionImg: Region,
    },
    {
      regionname: "HSR Layout",
      PinCode: "560102",
      regionImg: Region,
    },
    {
      regionname: "Electronic City",
      PinCode: "560100",
      regionImg: Region,
    },
    {
      regionname: "Bellandur",
      PinCode: "560103",
      regionImg: Region,
    },
    {
      regionname: "Banaswadi",
      PinCode: "560043",
      regionImg: Region,
    },
    {
      regionname: "Malleshwaram",
      PinCode: "560003",
      regionImg: Region,
    },
    {
      regionname: "Rajajinagar",
      PinCode: "560010",
      regionImg: Region,
    },
    {
      regionname: "Basavanagudi",
      PinCode: "560004",
      regionImg: Region,
    },
  ];
  


  const handleSaveDetails = () => {
    // Logic to save details
    console.log('State:', state);
    console.log('District:', district);
    console.log('City:', city);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleWhatsappChange = (e) => {
    const value = e.target.value;
    if (value.length >= 10) {
      setShowOtpFields(true);
    } else {
      setShowOtpFields(false);
    }
  };

  switch (step) {
    case 0:
      return <div>
        <div className="location_based_form">
        <div className="location_searchbar">
      <div className="searchbar-wrapper">
        <IoIosSearch className="search-icon" />
        <input type="text" placeholder="Search for your location" />
      </div>
      <p className='detectmyloc'> <MdMyLocation/> Detect my location</p>
    </div>
          <div className="state_district_city_dropdowns">
          <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">State</option>
        <option value="state1">State 1</option>
        <option value="state2">State 2</option>
        <option value="state3">State 3</option>
      </select>
      <select value={district} onChange={(e) => setDistrict(e.target.value)}>
        <option value="">District</option>
        <option value="district1">District 1</option>
        <option value="district2">District 2</option>
        <option value="district3">District 3</option>
      </select>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">City</option>
        <option value="city1">City 1</option>
        <option value="city2">City 2</option>
        <option value="city3">City 3</option>
      </select>
      <button onClick={handleSaveDetails}>Save Details</button>
          </div>

          <div className="regions_array">
            {regions.map((region,index)=>(
              < div className='region_box'>
               <div className="region_item" key={index}>
                <img src={region.regionImg} alt={region.regionname} />
               
              </div>
               <h6>{region.regionname}</h6>
               <p>{region.PinCode}</p>
              </div>
             
              
            ))}
          </div>
        </div>
      </div>;
    case 1:
      return <div>
        <div className="row">
        <div className="col-lg-3">
              <div className="upload_content">
                <h3>Make a Blood Request</h3>
                <div className="content_title">
                  <h4 style={{color:"white"}}>
                  Basic Information <FaArrowRight />
                  </h4>
                </div>
                <div className="content_image">
                  <img src={D} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="basic-radio_inputs">
                <p>I am the Patient / Attendant</p>
  <div className="basic_radio">
    <input type="radio" id="patient" name="role" value="patient" />
    <label htmlFor="patient">I am the Patient</label>
  </div>
  <div className="basic_radio">
    <input type="radio" id="attendant" name="role" value="attendant" />
    <label htmlFor="attendant">I am the Attendant</label>
  </div>



              </div>
              <div className="basic_text_input">
                <label htmlFor="RelationWithPatient">Relation With Patient</label>
                <input type="text" name="" id="" placeholder='Relation With Patient'/>
              </div>
              <div className="basic_text_inputs border">
              <div className="basic_text_input_name">
                <label htmlFor="FullName">Patient Full Name</label>
                <input type="text" name="" id="" placeholder='Patient Full Name'/>
              </div>
              <div className="basic_text_input_number">
                <label htmlFor="PhoneNumber">Phone Number</label>
                <input type="text" name="" id="" placeholder='+91'/>
              </div>
              </div>

              <div className="verification_radio">
<p>This number will be used for further verification process or communication.</p>
<div className="verification_radios">
<div className="basic_choice">
    <input type="radio" id="Yes" name="role" value="Yes" />
    <label htmlFor="Yes">Yes</label>
  </div>
  <div className="basic_choice">
    <input type="radio" id="attendant" name="role" value="No" />
    <label htmlFor="No">No</label>
  </div>
</div>
              </div>
            </div>
        </div>
      </div>;
    case 2:
      return <div>
        <div className="row">
        <div className="col-lg-3">
              <div className="upload_content">
                <h3>Make a Blood Request</h3>
                <div className="content_title">
                  <h4 style={{color:"white"}}>
                    Personal Details <FaArrowRight />
                  </h4>
                </div>
                <div className="content_image">
                  <img src={D} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

<div className="col-lg-9">

<div className="personal_form">

{/* Gender */}
<div className="personal_form-group">
         <label htmlFor="gender">Gender</label>
         <select id="gender">
           <option value="">Select your gender</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
           <option value="other">Other</option>
         </select>
       </div>


        {/* Date of Birth */}
        <div className="personal_form-group">
         <label htmlFor="dob">DOB</label>
         <input type="date" id="dob" />
       </div>

         <div className="personal_form-group">
         <label htmlFor="fullName">Full Name</label>
         <input type="text" id="fullName"  placeholder="Full name" />
       </div>

       {/* Email */}
       <div className="personal_form-group">
         <label htmlFor="email">Email</label>
         <input type="email" id="email" placeholder="Email" />
       </div>

      

      

       {/* Aadhar Number */}
       <div className="personal_form-group">
         <label htmlFor="aadhar">Aadhar Card Number</label>
         <input type="text" id="aadhar" placeholder="Aadhar Number" />
       </div>

       {/* Whatsapp Number */}
       <div className="personal_form-group">
         <label htmlFor="whatsapp">Whatsapp Number</label>
<div className="whatsapp_input" style={{border:"1px solid #000000"}}>
<input
           type="text"
           id="whatsapp"
           placeholder="Whatsapp No"
           onChange={handleWhatsappChange}
         />
<div className="verify_number">
  <p>Verify</p>
</div>
</div>
        
         {showOtpFields && (
           <div className="otp-section">
             <p>Verify your number</p>
             <div className="otp-inputs">
               <input type="text" className="otp-field" placeholder=" " maxLength="1" />
               <input type="text" className="otp-field" placeholder=" " maxLength="1" />
               <input type="text" className="otp-field" placeholder=" " maxLength="1" />
               <input type="text" className="otp-field" placeholder=" " maxLength="1" />
             </div>
           </div>
         )}
       </div>
         </div>
</div>
         
        </div>
      </div>;
    case 3:
      return <div>
        <div className="row">
        <div className="col-lg-3">
              <div className="upload_content">
                <h3>Make a Blood Request</h3>
                <div className="content_title">
                  <h4>
                    Admission Detail <FaArrowRight />
                  </h4>
                </div>
                <div className="content_image">
                  <img src={D} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-9">
<div className="admission_detail">
<div className='status_patient_radio'>
        <label>Status of Patient:</label>
        <div className='status_patient_radio_btn'>
          <input
            type="radio"
            id="admitted"
            name="status"
            value="Admitted"
            checked={status === 'Admitted'}
            onChange={handleStatusChange}
          />
          <label htmlFor="admitted">Admitted</label>
        </div>
        <div className='status_patient_radio_btn'>
          <input
            type="radio"
            id="planning"
            name="status"
            value="Planning to Admit"
            checked={status === 'Planning to Admit'}
            onChange={handleStatusChange}
          />
          <label htmlFor="planning">Planning to Admit</label>
        </div>
      </div>

      <div className="hospital_fields">
  <div className='hospital_searchbar'>
    <label htmlFor="hospitalSearch">Search Hospital:</label>
    <div className="searchbar_input">
       <input
      type="text"
      id="hospitalSearch"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
    <FaSearch className="search-icon" />
    </div>
   
  </div>

  <div className='hospital_name_field'>
    <label htmlFor="hospitalName">Hospital Name:</label>
    <input
      type="text"
      placeholder='Enter Hospital Name'
      id="hospitalName"
      value={hospitalName}
      onChange={(e) => setHospitalName(e.target.value)}
    />
  </div>
</div>

      <div className="dept_room_no">
      <div className='dept_input'>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          placeholder='Department'
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>

      <div className='room_no_input'>
        <label htmlFor="roomFloor">Room No/Floor No:</label>
        <input
          type="text"
          id="roomFloor"
          placeholder='Room No/Floor No'
          value={roomFloor}
          onChange={(e) => setRoomFloor(e.target.value)}
        />
      </div>
      </div>

      

      <div className='landmark_input'>
        <label htmlFor="landmark">Nearby Landmark: <span>If Any</span></label>
        <input
          type="text"
          id="landmark"
          placeholder='Nearby Landmark'
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />
      </div>
</div>
            </div>
        </div>
      </div>;
    case 4:
      const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
      return (
        <div>
          <div className="row">
            <div className="col-lg-3">
              <div className="upload_content">
                <h3>Make a Blood Request</h3>
                <div className="content_title">
                  <h4>
                    Medical Information <FaArrowRight />
                  </h4>
                </div>
                <div className="content_image">
                  <img src={D} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="blood_type">
                <p>
                  Required Blood Type: <span>if suggested by hospital or blood bank</span>
                </p>
                <div className="blood-type-selector">
                  {bloodTypes.map((type, index) => (
                    <label key={index} className='blood_label'>
                      <input
                        type="radio"
                        value={type}
                        checked={selectedBloodType === type}
                        onChange={(e) => setSelectedBloodType(e.target.value)}

                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="blood_inputs">
  <div className="blood_input">
    <label htmlFor="bloodType">Patient Blood Type</label>
    <input type="text" id="bloodType" name="bloodType" placeholder="Blood Type" />
  </div>
  <div className="blood_input">
    <label htmlFor="requiredDate">When Required</label>
    <input type="date" id="requiredDate" name="requiredDate" />
  </div>

                
              </div>
            </div>
          </div>
        </div>
      );
    case 5:
      return (
        <div>
          <div className="row">
            <div className="col-lg-3">
              <div className="upload_content">
                <h3>Make a Blood Request</h3>
                <div className="content_title">
                  <h4>
                    Document Upload <FaArrowRight />
                  </h4>
                </div>
                <div className="content_image">
                  <img src={D} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-9 ">
              <div className="doc_upload-input">
                <div className="upload_inputs">
                  <div className="input_upload">
                    <label htmlFor="">Patient Adhaar Card Number:</label>
                    <input type="text" name="" id="" placeholder="Patient Adhaar Card Number" />
                  </div>
                  <div className="input_upload">
                    <label htmlFor="">Patient Adhaar Card Number:</label>
                    <input type="text" name="" id="" placeholder="Patient Adhaar Card Number" />
                  </div>
                </div>
                <div className="doc_uploads">
                <div className="doc_upload">
                  <p>Upload Your Adhaar Crad</p>
                  <div className="inner_box_up">
                  <label htmlFor="fileUpload" className="upload-label">Upload <FaCloudUploadAlt/></label>

                  </div>
  <input type="file" id="fileUpload" className="a-upload" />
</div>

<div className="doc_upload">
                  <p>Upload Your Adhaar Crad</p>
                  <div className="inner_box_up">
                  <label htmlFor="fileUpload" className="upload-label">Upload <FaCloudUploadAlt/></label>

                  </div>
  <input type="file" id="fileUpload" className="a-upload" />
</div>
                
                </div>
                <div className="agree_check">
                  <input type="checkbox" name="" id="" />
                  <p>I have read and agree to the terms and conditions outlined by Blood Taps*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return <div>Unknown Step</div>;
  }
};

const ReceiverForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedBloodType, setSelectedBloodType] = useState('');

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
        <h3>Receiver’s Form</h3>
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
            <StepContent step={activeStep} selectedBloodType={selectedBloodType} setSelectedBloodType={setSelectedBloodType} />
          </div>
        </div>
      ) : (
        <div className="stepper-container">
          <div className="redirect_message" onClick={handleGoBack}>
            <FaArrowLeft />
            <p>Go Back</p>
          </div>
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <p className="step_completed">Completed</p>
            <h4>Thank you for completing your blood request form</h4>
            <div className="step_success_des">
              <p>
                We appreciate you trusting us with your blood request. Our dedicated team is working diligently to find a match for you. You will be contacted as soon as we have good news.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReceiverForm;
