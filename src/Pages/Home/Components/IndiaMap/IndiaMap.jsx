import React, { useState } from "react";
import blooddonate from "../../../../assets/blooddonate.png";
import { BiMap } from "react-icons/bi";
import DatamapsIndia from "react-datamaps-india";
import "leaflet/dist/leaflet.css";

const IndiaMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  const MapChart = ({ regionData, selectedState, hoveredState }) => {
    return (
      <div style={{ position: "relative" }}>
        <DatamapsIndia
          style={{ position: "absolute", width: "100%", height: "80vh" }}
          regionData={regionData}
          hoverComponent={({ value }) => (
            <div className="bg-dark text-white">
              <div>
                <b>
                  <BiMap
                    className="text-danger"
                    fontWeight={700}
                    fontSize={"30px"}
                  />
                  {value.value} Donors
                </b>
              </div>
              <div>{value.name}</div>
            </div>
          )}
          mapLayout={{
            title: "",
            legendTitle: "",
            startColor: "white",
            endColor: "white",
            hoverTitle: "Count",
            noDataColor: "white",
            borderColor: "red",
            hoverColor: hoveredState ? "lightblue" : "red",
            hoverBorderColor: hoveredState ? "blue" : "red",
            height: 10,
            weight: 30,
          }}
          onClick={(state) => setSelectedState(state)}
          selectedRegion={selectedState}
        />
      </div>
    );
  };

  const states = [
    { name: "Assam", donors: 400 },
    { name: "Bihar", donors: 600 },
    { name: "Chhattisgarh", donors: 700 },
    { name: "Goa", donors: 500 },
    { name: "Gujarat", donors: 1400 },
    { name: "Haryana", donors: 566 },
    { name: "Jharkhand", donors: 400 },
    { name: "Karnataka", donors: 600 },
    { name: "Kerala", donors: 700 },
    { name: "Maharashtra", donors: 500 },
    { name: "Manipur", donors: 1400 },
    { name: "Meghalaya", donors: 566 },
    { name: "Mizoram", donors: 400 },
    { name: "Nagaland", donors: 600 },
    { name: "Odisha", donors: 700 },
    { name: "Punjab", donors: 500 },
    { name: "Rajasthan", donors: 1400 },
    { name: "Sikkim", donors: 566 },
    { name: "Tamil Nadu", donors: 400 },
    { name: "Telangana", donors: 600 },
    { name: "Tripura", donors: 700 },
    { name: "Uttarakhand", donors: 500 },
    { name: "Chandigarh", donors: 1400 },
    { name: "Lakshadweep", donors: 566 },
    { name: "Delhi", donors: 400 },
    { name: "Puducherry", donors: 600 },
  ];

  const regionData = {
    "Andaman & Nicobar Island": { value: 150 },
    "Andhra Pradesh": { value: 470 },
    "Arunanchal Pradesh": { value: 248 },
    Assam: { value: 528 },
    Bihar: { value: 755 },
    Chandigarh: { value: 95 },
    Chhattisgarh: { value: 1700 },
    Delhi: { value: 1823 },
    Goa: { value: 508 },
    Gujarat: { value: 624 },
    Haryana: { value: 1244 },
    "Himachal Pradesh": { value: 640 },
    "Jammu & Kashmir": { value: 566 },
    Jharkhand: { value: 814 },
    Karnataka: { value: 2482 },
    Kerala: { value: 899 },
    Lakshadweep: { value: 15 },
    "Madhya Pradesh": { value: 1176 },
    Maharashtra: { value: 727 },
    Manipur: { value: 314 },
    Meghalaya: { value: 273 },
    Mizoram: { value: 306 },
    Nagaland: { value: 374 },
    Odisha: { value: 395 },
    Puducherry: { value: 245 },
    Punjab: { value: 786 },
    Rajasthan: { value: 1819 },
    Sikkim: { value: 152 },
    "Tamil Nadu": { value: 2296 },
    Telangana: { value: 467 },
    Tripura: { value: 194 },
    "Uttar Pradesh": { value: 2944 },
    Uttarakhand: { value: 1439 },
    "West Bengal": { value: 1321 },
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const handleStateHover = (state) => {
    setHoveredState(state);
  };

  const handleStateLeave = () => {
    setHoveredState(null);
  };

  return (
    <div className="row" style={{ display: "flex" }}>
      <div className="col-lg-5 " style={{ padding: "20px", overflowY: "auto" }}>
        <div className="row my-auto mt-5">
          {states.map((state, index) => (
            <div
              className="col-lg-2 col-6 mt-1"
              key={index}
              style={{ cursor: "pointer", marginBottom: "10px" }}
              onClick={() => handleStateClick(state.name)}
              onMouseEnter={() => handleStateHover(state.name)}
              onMouseLeave={handleStateLeave}
            >
              <div
                className="p-2"
                style={{
                  border: "2px solid black",
                  height: "100px",
                  borderRadius: "12px",
                }}
              >
                <div className="text-center">
                  <img
                    src={blooddonate}
                    style={{ width: "50px", height: "50px" }}
                    className="img-fluid text-center"
                    alt=""
                  />
                  <div
                    className="text-center mt-2"
                    style={{ textWrap: "nowrap" }}
                  >
                    <b className="text-danger" style={{ fontSize: "12px" }}>
                      {state.donors} donors
                    </b>
                  </div>
                </div>
              </div>
              <div className="mx-auto text-center">
                <b>{state.name}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="col-lg-7"
        style={
          window.innerWidth < 576
            ? { height: "400px" }
            : { height: "100vh", padding: "0px" }
        }
      >
        <MapChart
          regionData={regionData}
          selectedState={selectedState}
          hoveredState={hoveredState}
        />
      </div>
    </div>
  );
};

export default IndiaMap;
