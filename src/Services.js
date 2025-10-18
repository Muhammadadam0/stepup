import React from "react";
import "./Services.css";

function Services() {
  const data = [
    {
      img: process.env.PUBLIC_URL + "/thrapy.png", // spelling corrected
      title: "Therapy Sessions",
      text: "Speech & Occupational therapy for kids.",
    },
    {
      img: process.env.PUBLIC_URL + "/special.png",
      title: "Special Education",
      text: "Personalized teaching for individual growth.",
    },
    {
      img: process.env.PUBLIC_URL + "/parent.png",
      title: "Parent Counseling",
      text: "Emotional support for families.",
    },
    {
      img: process.env.PUBLIC_URL + "/art.png",
      title: "Creative Activities",
      text: "Art & play-based learning methods.",
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {data.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
