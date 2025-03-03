/**
 * @author Aditya Raj
 * @github https://github.com/AdityaRaj81
 * @project Classy Endeavors App
 */


import { useNavigate, useLocation } from "react-router-dom";
import styles from "./footer.module.css";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaEnvelope, FaTv, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId, path = "/") => {
    if (location.pathname !== path) {
      navigate(`${path}#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <p className={styles.poweredBy}>Powered by Classy Endeavors</p>
        <br />


        <div className={styles.rightSection}>

          <div className={styles.socialIcons}>
            <a href="https://wa.me/+918651065233" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://linkedin.com/in/Adityaraj81" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/AdityaRaj81" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:Connect2RajAditay@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://facebook.com/AdityaRaj812" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/AdityaRaj_81" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/AdityaRaj_81" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#">
              <FaTv />
            </a>
          </div>

          <hr className={styles.divider} />

          <div className={styles.links}>
            <button onClick={() => handleNavClick("features")}>Features</button>
            <button onClick={() => handleNavClick("why-choose-us")}>Why Choose Us</button>
            <button onClick={() => handleNavClick("pricing")}>Pricing</button>
            <button onClick={() => handleNavClick("faq")}>FAQ</button>
            <button onClick={() => navigate("/legal-terms")}>Legal Terms</button>
            <button onClick={() => navigate("/privacy-policy")}>Privacy Policy</button>
          </div>
        </div>
      </div>
      <p className={styles.Madeby}>
      Crafted by <a href="https://github.com/AdityaRaj81" target="_blank">Aditya Raj</a>
</p>

    </footer>
  );
};

export default Footer;
