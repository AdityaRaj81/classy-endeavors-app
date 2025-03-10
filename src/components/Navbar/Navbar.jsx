import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button'; 
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  

  // Press CTRL + ALT + A to show a secret popup!
  useEffect(() => {
    const handleSecretShortcut = (event) => {
      if (event.ctrlKey && event.altKey && event.key === "A") {
        alert("🚀 Hey! This project is built by Aditya Raj. Check out my GitHub: AdityaRaj81");
      }
    };
    window.addEventListener("keydown", handleSecretShortcut);
    return () => window.removeEventListener("keydown", handleSecretShortcut);
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar} style={{ top: `${-scrollY}px` }}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            DocuTech
          </Link>
        </div>

        <div className={styles.desktopMenu}>
          <button className={styles.link} onClick={() => handleNavClick("features")}>
            Features
          </button>
          <button className={styles.link} onClick={() => handleNavClick("why-choose-us")}>
            Why Choose Us
          </button>
          <button className={styles.link} onClick={() => handleNavClick("pricing")}>
            Pricing
          </button>
          <button className={styles.link} onClick={() => handleNavClick("faq")}>
            FAQ
          </button>
        </div>

        <div className={styles.rightMenu}>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.discordButton}
          >
            <img src="assets/discord.ico" alt="Discord" className={styles.discordIcon} />
          </a>
          <Button variant="primary" size="sm" onClick={() => navigate("/get-started")}>
            Get Started
          </Button>
        </div>

        <div className={styles.mobileMenuButton}>
          <button type="button" className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open main menu</span>
            <svg className={styles.hamburgerIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.mobileLink} onClick={() => handleNavClick("features")}>
            Features
          </button>
          <button className={styles.mobileLink} onClick={() => handleNavClick("why-choose-us")}>
            Why Choose Us
          </button>
          <button className={styles.mobileLink} onClick={() => handleNavClick("pricing")}>
            Pricing
          </button>
          <button className={styles.mobileLink} onClick={() => handleNavClick("faq")}>
            FAQ
          </button>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={styles.mobileDiscordButton}>
            <img src="assets/discord.ico" alt="Discord" className={styles.mobileDiscordIcon} />
          </a>
          <Button variant="primary" size="sm" onClick={() => navigate("/get-started")}>
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





/**
 * @author Aditya Raj
 * @github https://github.com/AdityaRaj81
 * @project Classy Endeavors App
 */