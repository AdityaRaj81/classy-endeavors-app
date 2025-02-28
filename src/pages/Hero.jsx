import { useState, useEffect } from "react";
import "../styles/hero.css";

const words = ["Convert", "Create", "Sign"];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <br />
        <br />  
        <h1 className="hero-title">
          AI-Powered Unified Platform; <span className="highlight">{currentWord}</span> Effortlessly
        </h1>
        <p className="hero-subtitle">Fast, Smart & Secure – Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools</p>
        <div className="compliance">
          <span>✔️ ESIGN Compliant</span>
          <span>✔️ UETA Approved</span>
          <span>✔️ eIDAS Certified</span>
        </div>
        <div className="upload-box">
          <input type="text" placeholder="Drop your file here" />
          <button className="upload-btn">Upload File</button>
          <span>OR</span>
          <button className="ai-btn">Generate with AI</button>
        </div>
        <div className="file-box"></div>
      </div>
    </section>
  );
};

export default Hero;
