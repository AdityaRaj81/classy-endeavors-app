import "../styles/WhyChoose.css";
import { useState } from "react";

const WhyChoose = () => {
  const [selected, setSelected] = useState(0);

  const options = [
    "Trusted by Thousands",
    "SOC-2 Certified",
    "GDPR & HIPAA Compliant",
    "End-to-end encryption",
  ];

  return (
    <section className="why-choose">
      <h2 className="title">Why Choose Docutech</h2>
      <div className="why-choose-container">
        <ul className="why-choose-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`why-choose-item ${selected === index ? "active" : ""}`}
              onClick={() => setSelected(index)}
            >
              {option}
            </li>
          ))}
        </ul>
        <div className="why-choose-content">
          {/* Placeholder for dynamic content */}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
