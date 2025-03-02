import { useState } from 'react';
import '../styles/GetStarted.css';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    employees: 'less-than-10',
    usageDescription: '',
    agreeToTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="get-started-page">
      <div className="get-started-container">
        {!submitted ? (
          <>
            <div className="form-container">
              <div className="form-header">
                <h1>Get Started with SignSmart</h1>
                <p className="subtitle">
                  Fill out the form below to begin your journey with our AI-powered electronic signature platform
                </p>
                <div className="compliance-badges">
                  <span className="badge">✔️ ESIGN Compliant</span>
                  <span className="badge">✔️ UETA Approved</span>
                  <span className="badge">✔️ eIDAS Certified</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="employees">Company Size *</label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="less-than-10">Less than 10 employees</option>
                    <option value="10-50">10-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="more-than-1000">More than 1000 employees</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="usageDescription">How do you plan to use SignSmart?</label>
                  <textarea
                    id="usageDescription"
                    name="usageDescription"
                    value={formData.usageDescription}
                    onChange={handleInputChange}
                    rows="4"
                  ></textarea>
                </div>
                
                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="agreeToTerms">
                    I agree to SignSmart&apos;s <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                  </label>
                </div>
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Get Started Now'}
                </button>
                
                <p className="form-disclaimer">
                  By clicking &quot;Get Started Now&quot;, you&apos;ll create a free account and agree to SignSmart&apos;s Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
            
            <div className="info-container">
              <div className="info-card">
                <h2>What happens next?</h2>
                <div className="steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>We&apos;ll reach out to you</h3>
                      <p>Our team will contact you within 24 hours to discuss your needs</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>Free onboarding session</h3>
                      <p>Schedule a personalized demo with our product specialists</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Start signing documents</h3>
                      <p>Get your account set up and start sending documents for signatures</p>
                    </div>
                  </div>
                </div>
                
                <div className="features-highlights">
                  <h2>Why businesses choose SignSmart</h2>
                  <ul className="features-list">
                    <li>
                      <span className="feature-icon">🤖</span>
                      <span>AI-powered document field detection</span>
                    </li>
                    <li>
                      <span className="feature-icon">🔄</span>
                      <span>Seamless integration with Google Drive, Dropbox, Salesforce & more</span>
                    </li>
                    <li>
                      <span className="feature-icon">⚡</span>
                      <span>Fast, effortless signing experience</span>
                    </li>
                    <li>
                      <span className="feature-icon">🔒</span>
                      <span>Bank-level security and compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Thank you for your interest!</h2>
            <p>We&apos;ve received your information and will be in touch shortly to help you get started with SignSmart.</p>
            <p>In the meantime, check your email for a confirmation and some resources to help you learn more about our platform.</p>
            <button className="return-btn" onClick={() => window.location.href = '/'}>
              Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStarted;