import React, { useEffect, useState } from "react";
import "./RecoveryRate.css";

const rates = [
  { name: "Autism / ADHD", percent: 90 },
  { name: "Speech Therapy", percent: 85 },
  { name: "Down Syndrome", percent: 75 },
  { name: "Parent-Child Issues", percent: 82 },
  { name: "Relationship Issues", percent: 78 },
  { name: "Behaviour Modification", percent: 88 },
];

export default function RecoveryRate() {
  const [animated, setAnimated] = useState(false);
  const [displayPercents, setDisplayPercents] = useState(
    rates.map(() => 0)
  );

  useEffect(() => {
    const onScroll = () => {
      const section = document.querySelector(".recovery-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimated(true);
          window.removeEventListener("scroll", onScroll);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Counter Animation
  useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        setDisplayPercents((prev) =>
          prev.map((val, i) =>
            val < rates[i].percent ? val + 1 : rates[i].percent
          )
        );
      }, 30);
      return () => clearInterval(interval);
    }
  }, [animated]);

  return (
    <section className="recovery-section">
      <div className="recovery-container">
        <h2 className="recovery-title">Our Recovery Success Rates</h2>
        <p className="recovery-subtitle">
          We take pride in helping our clients improve through evidence-based therapy and compassionate care.
        </p>

        <div className="recovery-bars">
          {rates.map((rate, index) => (
            <div key={index} className="recovery-item">
              <div className="recovery-label">
                <span>{rate.name}</span>
                <span className="percent">
                  {displayPercents[index]}%
                </span>
              </div>
              <div className="recovery-bar">
                <div
                  className="recovery-fill"
                  style={{
                    width: animated ? `${rate.percent}%` : "0%",
                    transition: "width 2.5s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
