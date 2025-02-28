import { useEffect, useState } from "react";
import "../styles/UsersSay.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const logos = [
  "src/assets/logo_1.png",
  "src/assets/logo_2.png",
  "src/assets/logo_4.png",
  "src/assets/logo_5.png",
  "src/assets/logo_3.png",
  "src/assets/logo_6.png",
];

const reviews = [
  { text: "The seamless experience and fast service make it a game-changer!", image: "src/assets/User.png" },
  { text: "Absolutely love how easy and efficient the platform is to use!", image: "src/assets/User.png" },
  { text: "A must-have tool! The support team is fantastic as well.", image: "src/assets/User.png" },
  { text: "Highly recommend! The workflow automation is next level.", image: "src/assets/User.png" },
  { text: "I’ve saved so much time since switching to this service. Incredible!", image: "src/assets/User.png" },
  { text: "Best decision I’ve made! The features are tailored to my needs.", image: "src/assets/User.png" },
];

const UsersSay = () => {
  const [activeLogo, setActiveLogo] = useState(0);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % logos.length);
    }, 2000);

    const reviewInterval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => {
      clearInterval(logoInterval);
      clearInterval(reviewInterval);
    };
  }, []);

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="users-say-container">

<div className="heading-container">
      <h1 className="highlight-word">
        <span className="highlight">64.0k</span> businesses and individuals have
      </h1>
      <h1 className="highlight-word"> 
        signed with <span className="highlight">DocuTech</span>
      </h1>
    </div>    


      {/* Business Logo Carousel */}
      <div className="logo-carousel">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className={`logo ${index === activeLogo ? "active" : ""}`}
          />
        ))}
      </div>

      <h1 className="useSay">What Our Users Say</h1>

      {/* Reviews Section */}
      <div className="reviews-container">
        <button className="arrow left-arrow" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <div className="review-wrapper">
          {[0, 1, 2].map((offset) => {
            const reviewIndex = (activeReview + offset) % reviews.length;
            return (
              <div className="review-card" key={reviewIndex}>
                <div>
                  <img src={reviews[reviewIndex].image} alt="User" className="reviewer-img" />
                </div>
                <p className="review-text">{reviews[reviewIndex].text}</p>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <button className="arrow right-arrow" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default UsersSay;
