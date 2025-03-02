import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Button'; // Adjust path if needed
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Features', to: '/features' },
    { name: 'Why Choose Us', to: '/why-choose-us' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'FAQ', to: '/faq' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo - Left Corner */}
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            DocuTech
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className={styles.desktopMenu}>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `${isActive ? styles.activeLink : styles.link}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Discord & Get Started - Right Corner */}
        <div className={styles.rightMenu}>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.discordButton}
          >
            <img
              src="assets\discord.ico"
              alt="Discord"
              className={styles.discordIcon}
            />
          </a>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button - Right Corner */}
        <div className={styles.mobileMenuButton}>
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={styles.hamburgerIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Opens when clicked */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `${isActive ? styles.activeMobileLink : styles.mobileLink}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileDiscordButton}
          >
            <img
              src="assets\discord.ico"
              alt="Discord"
              className={styles.mobileDiscordIcon}
            />
          </a>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;