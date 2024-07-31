import React, { useState } from "react";
import DatamapsIndia from "react-datamaps-india";
import { BiMap } from "react-icons/bi";

const MapChart = () => {
  const [selectedState, setSelectedState] = useState(null);

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
                {value.value} Doners
              </b>
            </div>
            <div>{value.name}</div>
          </div>
        )}
        mapLayout={{
          title: "OCs Deployed per State in India",
          legendTitle: "Number of BloodDonations",
          startColor: "white",
          endColor: "white",
          hoverTitle: "Count",
          noDataColor: "white",
          borderColor: "red",
          hoverColor: "red",
          hoverBorderColor: "red",
          height: 10,
          weight: 30,
        }}
        onClick={(state) => handleStateClick(state)}
        selectedState={selectedState}
      />
    </div>
  );
};

export default MapChart;
