import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaDiscord, FaEnvelope, FaTv } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Side - Company Name */}
        <p className={styles.poweredBy}>Powered by Classy Endeavors</p>
        <br />

        {/* Right Side - Social Icons & Links */}
        <div className={styles.rightSection}>
          {/* Social Media Links (Top) */}
          <div className={styles.socialIcons}>
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
            <a href="mailto:info@classyendeavors.com">
              <FaEnvelope />
            </a>
            <a href="#">
              <FaTv />
            </a>
          </div>
        

          {/* Horizontal Line */}
          <hr className={styles.divider} />

          {/* Other Links (Bottom) */}
          <div className={styles.links}>
            <Link to="/features">Features</Link>
            <Link to="/why-choose-us">Why Choose Us</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/legal-terms">Legal terms</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
