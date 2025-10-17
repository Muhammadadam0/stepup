import React from "react";
import "./Services.css";

function Services() {
  const data = [
    {
      img: "thrapy.png",
      title: "Therapy Sessions",
      text: "Speech & Occupational therapy for kids."
    },
    {
      img: "special.png",
      title: "Special Education",
      text: "Personalized teaching for individual growth."
    },
    {
      img: "parent.png",
      title: "Parent Counseling",
      text: "Emotional support for families."
    },
    {
      img: "art.png",
      title: "Creative Activities",
      text: "Art & play-based learning methods."
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {data.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-image">
              <img src={s.img} alt={s.title} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
