import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anurag from "../../../../assets/anurag.png";

const teamMembers = [
  {
    id: 1,
    name: "Anurag Sharma",
    position: "India CEO",
    image: anurag,
  },
  {
    id: 2,
    name: "Person 2",
    position: "India CEO",
    image: anurag,
  },
  {
    id: 3,
    name: "Person 3",
    position: "India CEO",
    image: anurag,
  },
  {
    id: 4,
    name: "Person 4",
    position: "India CEO",
    image: anurag,
  },
];

const OurTeam = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const getClipPath = (index) => {
    return index % 2 === 0
      ? "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)"
      : "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)";
  };

  const getDotPosition = (index) => {
    return index % 2 === 0
      ? { top: "10px", right: "-10px" }
      : { top: "10px", left: "-10px" };
  };

  return (
    <div className="container my-5">
      <h2
        className="mb-3"
        style={{
          fontSize: "40px",
          borderBottom: "3px solid red",
          display: "inline-block",
        }}
      >
        Our Team
      </h2>
      <p>Reassure potential donors with a clear explanation of the process</p>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={member.id} className="text-center">
            <div className="position-relative d-inline-block">
              <img
                src={member.image}
                alt={member.name}
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  border: "5px solid red",
                  borderRadius: "50%",
                  boxSizing: "border-box",
                  clipPath: getClipPath(index),
                }}
              ></div>
              {/* <div
                style={{
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  ...getDotPosition(index),
                }}
              ></div> */}
            </div>
            <h5 className="mt-3">{member.name}</h5>
            <p>{member.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurTeam;
