import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import blooddonate from "../../../../assets/blooddonate.png";
import { BiMap } from "react-icons/bi";

const IndiaMap = () => {
  const getRandomDonors = () => Math.floor(Math.random() * 1400) + 1;

  // Example state data with coordinates
  const states = [
    { name: "Assam", lat: 26.2006, lng: 92.9376, donors: 400 },
    { name: "Bihar", lat: 25.0961, lng: 85.3131, donors: 600 },
    { name: "Chhattisgarh", lat: 21.2787, lng: 81.8661, donors: 700 },
    { name: "Goa", lat: 15.2993, lng: 74.124, donors: 500 },
    { name: "Gujarat", lat: 22.2587, lng: 71.1924, donors: 1400 },
    { name: "Haryana", lat: 29.0588, lng: 76.0856, donors: 566 },
    { name: "Jharkhand", lat: 23.6102, lng: 85.2799, donors: 400 },
    { name: "Karnataka", lat: 15.3173, lng: 75.7139, donors: 600 },
    { name: "Kerala", lat: 10.8505, lng: 76.2711, donors: 700 },
    { name: "Maharashtra", lat: 19.7515, lng: 75.7139, donors: 500 },
    { name: "Manipur", lat: 24.6637, lng: 93.9063, donors: 1400 },
    { name: "Meghalaya", lat: 25.467, lng: 91.3662, donors: 566 },
    { name: "Mizoram", lat: 23.1645, lng: 92.9376, donors: 400 },
    { name: "Nagaland", lat: 26.1584, lng: 94.5624, donors: 600 },
    { name: "Odisha", lat: 20.9517, lng: 85.0985, donors: 700 },
    { name: "Punjab", lat: 31.1471, lng: 75.3412, donors: 500 },
    { name: "Rajasthan", lat: 27.0238, lng: 74.2179, donors: 1400 },
    { name: "Sikkim", lat: 27.533, lng: 88.5122, donors: 566 },
    { name: "Tamil Nadu", lat: 11.1271, lng: 78.6569, donors: 400 },
    { name: "Telangana", lat: 18.1124, lng: 79.0193, donors: 600 },
    { name: "Tripura", lat: 23.9408, lng: 91.9882, donors: 700 },
    { name: "Uttarakhand", lat: 30.0668, lng: 79.0193, donors: 500 },
    { name: "Chandigarh", lat: 30.7333, lng: 76.7794, donors: 1400 },
    { name: "Lakshadweep", lat: 10.5667, lng: 72.6417, donors: 566 },
    { name: "Delhi", lat: 28.7041, lng: 77.1025, donors: 400 },
    { name: "Puducherry", lat: 11.9416, lng: 79.8083, donors: 600 },
  ];

  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div className="row" style={{ display: "flex" }}>
      <div className="col-lg-6 " style={{ padding: "20px", overflowY: "auto" }}>
        <div className="row my-auto mt-5">
          {states.map((state, index) => (
            <div
              className="col-lg-2 mt-1"
              key={index}
              style={{ cursor: "pointer", marginBottom: "10px" }}
              onClick={() => handleStateClick(state)}
            >
              <div
                className=" p-2"
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
                    {" "}
                    <b className="text-danger" style={{ fontSize: "12px" }}>
                      {state.donors} doners
                    </b>{" "}
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
      <div className="col-lg-6" style={{ height: "100vh", padding: "50px" }}>
        <MapContainer
          center={[22.5937, 78.9629]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Map markers for states */}
          {states.map((state, index) => (
            <Marker
              key={index}
              position={[state.lat, state.lng]}
              eventHandlers={{
                click: () => handleStateClick(state),
              }}
            />
          ))}

          {/* Popup for selected state */}
          {selectedState && (
            <Popup
              position={[selectedState.lat, selectedState.lng]}
              onClose={() => setSelectedState(null)}
            >
              <div>
                <BiMap className="text-danger" />
                <b>{selectedState.name}</b>
              </div>
              <div>
                <b>{selectedState.donors} Doners</b>
              </div>
            </Popup>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default IndiaMap;
