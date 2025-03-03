import { useState } from "react";
import Button from '../components/Button';
import Card from '../components/Card';
import "../styles/Plans.css";

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = {
    monthly: [
      { name: "FREE", price: 0, features: ["5 documents a month", "Activity timeline"] },
      { name: "PREMIUM", price: 10, features: ["Unlimited documents", "Unlimited signees", "Activity timeline", "Certificate of completion"] },
      { name: "TEAMS", price: 8, minTotal: 24, features: ["Everything from Premium", "Team management", "Transferable contracts"] }
    ],
    annually: [
      { name: "FREE", price: 0, features: ["5 documents a month", "Activity timeline"] },
      { name: "PREMIUM", price: 100, features: ["Unlimited documents", "Unlimited signees", "Activity timeline", "Certificate of completion"] },
      { name: "TEAMS", price: 80, minTotal: 240, features: ["Everything from Premium", "Team management", "Transferable contracts"] }
    ]
  };

  return (
    <section className="plans-container">
      <h2 className="plans-title">Pick your plan. We make this part easy too.</h2>

      {/* Toggle Switch */}
      <div className="toggle-container">
        <Button 
          variant={billingCycle === "monthly" ? "primary" : "outline"} 
          size="md" 
          className="toggle-button"
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </Button>
        <Button 
          variant={billingCycle === "annually" ? "primary" : "outline"} 
          size="md" 
          className="toggle-button"
          onClick={() => setBillingCycle("annually")}
        >
          Annually
        </Button>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {plans[billingCycle].map((plan, index) => (
          <Card key={index} title={plan.name} className="plan-card" variant="elevated">
            <p className="plan-price">
              USD {plan.price}
              {plan.name !== "FREE" && (
                <span className="plan-duration">/{billingCycle === "monthly" ? "Month" : "Year"}</span>
              )}
            </p>
            {plan.name === "TEAMS" && (
              <p className="plan-min-total">
                Minimum total of USD {plan.minTotal}/{billingCycle === "monthly" ? "month" : "year"}
              </p>
            )}
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature-item">✔ {feature}</li>
              ))}
            </ul>
            <Button variant="primary" size="md" className="select-plan-button">
              Select Plan
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Plans;




/**
 * @author Aditya Raj
 * @github https://github.com/AdityaRaj81
 * @project Classy Endeavors App
 */