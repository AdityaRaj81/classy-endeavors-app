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

  const content = [
    "Docutech is trusted by thousands of businesses worldwide, ensuring seamless and secure document management.",
    "Our SOC-2 certification guarantees that we adhere to the highest security and compliance standards.",
    "We are fully compliant with GDPR and HIPAA regulations, protecting your sensitive data with industry-leading security measures.",
    "With end-to-end encryption, your data remains private and secure, accessible only to authorized users."
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
          <p>{content[selected]}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

/**
 * @author Aditya Raj
 * @github https://github.com/AdityaRaj81
 * @project Classy Endeavors App
 */
