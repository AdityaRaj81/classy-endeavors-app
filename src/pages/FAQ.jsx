import { useState } from "react";
import "../styles/FAQ.css";
import { useSelector } from 'react-redux';

const FAQ = () => {

  const faqs = useSelector((state) => state.faqs.faqs);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <p>{faq.question}</p>
              <span className="toggle-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;




/**
 * @author Aditya Raj
 * @github https://github.com/AdityaRaj81
 * @project Classy Endeavors App
 */