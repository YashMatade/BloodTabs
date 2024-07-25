import React, { useState } from 'react';
import './Testimonials.css';
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Testimonial from '/testimonials.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Slides = [
    { image: Testimonial, name: "Esther 01", designation: "Lead Intranet Technician", review: "Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas." },
    { image: Testimonial, name: "John Doe", designation: "Software Engineer", review: "Praesentium iure ratione hic velit porro. Reprehenderit velit iure dolorem ipsum. Adipisci qui dolorem quod sequi. Eum et reprehenderit architecto aliquam ut." },
    { image: Testimonial, name: "Jane Smith", designation: "Product Manager", review: "Ducimus temporibus voluptas dolore sunt. Quasi dolore expedita omnis pariatur. Eos nihil sequi ipsa qui sit. Sed quibusdam odit veniam et alias reprehenderit." },
    { image: Testimonial, name: "Michael Brown", designation: "UX Designer", review: "Reprehenderit aut sint deserunt voluptatem ex. Voluptatem necessitatibus ea ut. Incidunt eos et aut a pariatur veritatis dolore." },
    { image: Testimonial, name: "Emily White", designation: "Marketing Director", review: "Explicabo suscipit rem est vel. Dignissimos ut voluptatibus dolorem dolorum. Officia distinctio vero dolorem itaque quibusdam." },
    { image: Testimonial, name: "Chris Johnson", designation: "Data Scientist", review: "Nostrum dignissimos saepe aperiam voluptas. Consequuntur debitis esse voluptatum. Labore amet soluta a et quod autem nisi." },
    { image: Testimonial, name: "Sarah Lee", designation: "Content Strategist", review: "Dolorem est doloremque culpa aut accusamus. Non est voluptatem aliquam at consequatur. Neque ullam deserunt voluptas quae qui." },
    { image: Testimonial, name: "David Wilson", designation: "Systems Analyst", review: "Omnis consequatur labore sit. Quod suscipit amet qui ex. Perspiciatis id optio et veniam aut." },
    { image: Testimonial, name: "Laura Davis", designation: "HR Manager", review: "Aut quibusdam atque quaerat. Placeat doloribus ex qui sit. Similique omnis vero quibusdam suscipit." },
    { image: Testimonial, name: "Robert Martinez", designation: "Sales Executive", review: "Repudiandae quaerat necessitatibus pariatur. Sunt numquam alias rem distinctio. Iste pariatur velit enim." }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Slides.length) % Slides.length);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="main_testimonails_content">
            <div className="main_testimonails_quotes">
              <FaQuoteRight />
            </div>
            <div className="main_testimonails_controls">
              <h3>Clients Testimonials</h3>
              <div className="main_controls">
                <FaAngleLeft onClick={handlePrev} />
                <FaAngleRight onClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8" >
          <div className="main_slide_container" style={{ background: "#D82320" }}>
            <div className="testimonial-slides-wrapper" style={{ transform: `translateX(-${currentIndex * 600}px)`,width:"100px" }}>
              {Slides.map((testimonial, index) => (
                <div className="testimonial-slide" key={index}>
                  <div className="top_info">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                    <div className="testimonial_basic-info">
                      <h6>{testimonial.name}</h6>
                      <p>{testimonial.designation}</p>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>{testimonial.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
