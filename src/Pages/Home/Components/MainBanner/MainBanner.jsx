import React, { useEffect, useState } from "react";
import mainbanner from "../../../../assets/mainbanner.png";
import grouppic from "../../../../assets/Groupbanner.png";
import { FaPlay } from "react-icons/fa";
const MainBanner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial setup
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row ms-2 me-2">
          <div className="col-lg-8 my-auto">
            <div
              className="text-danger"
              style={
                window.innerWidth < 576
                  ? { fontWeight: "700", fontSize: "18px" }
                  : { fontWeight: "700", fontSize: "18px" }
              }
            >
              Donate Blood Save Life!
            </div>
            <div
              className="mt-2 mb-2"
              style={
                window.innerWidth < 576
                  ? { fontWeight: "600", fontSize: "30px", lineHeight: "30px" }
                  : {
                      fontWeight: "600",
                      fontSize: "60px",
                      lineHeight: "60px",
                    }
              }
            >
              Sometimes Money Cannot Save Life But{" "}
              <span className="text-danger">Donated Blood</span> Can
            </div>
            <div className="text-secondary mb-4" style={{ fontSize: "18px" }}>
              Sometimes Money Cannot Save Life But Donated Blood Can Sometimes
              Money Cannot Save Life But Donated Blood Can Sometimes Money
            </div>
            <div className="d-flex mb-3">
              <div className="me-3">
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#E95E10" }}
                >
                  Donate Now
                </button>
              </div>
              <div
                className="my-auto"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  className="bg-danger"
                  style={{
                    display: "inline-flex",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <FaPlay />
                </span>
                <span>Watch Our Testimonial’s</span>
              </div>
            </div>
            <div className="mt-4">
              <img src={grouppic} alt="" />
              <span></span> 1220+ Happy Donor’s
            </div>
          </div>
          <div className="col-lg-4">
            <img src={mainbanner} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
