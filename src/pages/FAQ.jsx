import { useState } from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are DocuTech signatures legally binding?",
      answer:
        "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
    },
    {
      question: "Can I use DocuTech signatures for business contracts?",
      answer:
        "Yes! DocuTech is widely used in business contracts, ensuring authenticity and security.",
    },
    {
      question: "Do I need an account to sign documents?",
      answer:
        "Not necessarily. Some documents allow guest signing, but an account gives you more control and tracking options.",
    },
    {
      question: "Are DocuTech signatures legally binding?",
      answer:
        "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
    },
  ];

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
