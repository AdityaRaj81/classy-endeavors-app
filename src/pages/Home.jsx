import React, { useState } from 'react';
import Button from '../components/Button';

const Home = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const testimonials = [
    {
      text: "Create contracts, agreements & forms in seconds with our advanced AI technology",
      author: "John Doe",
      stars: 5
    },
    {
      text: "Create contracts, agreements & forms in seconds with our advanced AI technology",
      author: "Jane Smith",
      stars: 5
    },
    {
      text: "Create contracts, agreements & forms in seconds with our advanced AI technology",
      author: "Mike Johnson",
      stars: 5
    }
  ];

  const plans = [
    {
      name: 'FREE',
      price: '0',
      features: [
        '5 documents a month',
        'Activity timeline'
      ]
    },
    {
      name: 'Premium',
      price: '10',
      features: [
        'Unlimited documents',
        'Unlimited signers',
        'Activity timeline',
        'Certificate of completion'
      ]
    },
    {
      name: 'Teams',
      price: '24',
      features: [
        'Everything from Premium',
        'Team management',
        'Team/leads contacts'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Are DocuTech signatures legally binding?',
      answer: 'Yes! DocuTech signatures are totally legal and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they\'re extra protected and tracked, so it\'s safer than losing a paper contract in your junk drawer!'
    },
    {
      question: 'Are DocuTech signatures legally binding?',
      answer: 'Yes! DocuTech signatures are totally legal and legally binding.'
    },
    {
      question: 'Are DocuTech signatures legally binding?',
      answer: 'Yes! DocuTech signatures are totally legal and legally binding.'
    },
    {
      question: 'Are DocuTech signatures legally binding?',
      answer: 'Yes! DocuTech signatures are totally legal and legally binding.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">No Sign up required</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-2">
            AI-Powered Unified Platform;
          </h1>
          <h2 className="text-4xl font-bold text-blue-600 sm:text-5xl lg:text-6xl mb-6">
            Create Effortlessly
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Fast, Smart & Secure - Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
          </p>
          
          {/* Certification badges */}
          <div className="flex justify-center space-x-4 mb-8">
            <span className="text-sm text-gray-600">🔒 GDPR Compliant</span>
            <span className="text-sm text-gray-600">✓ NITA Approved</span>
            <span className="text-sm text-gray-600">⚡ eIDAS Certified</span>
          </div>

          {/* Input section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Drop your file here"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="primary" className="whitespace-nowrap">
                Upload File
              </Button>
              <Button variant="secondary" className="whitespace-nowrap">
                Generate with AI
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="text-center mb-16">
            <p className="text-lg font-semibold">
              <span className="text-blue-600">64.0k</span> businesses and individuals have
              <br />signed with <span className="text-blue-600">DocuTech</span>
            </p>
          </div>

          {/* Company logos */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-50 mb-16">
            <img src="https://placehold.co/100x40" alt="Company logo" className="h-8" />
            <img src="https://placehold.co/100x40" alt="Company logo" className="h-8" />
            <img src="https://placehold.co/100x40" alt="Company logo" className="h-8" />
            <img src="https://placehold.co/100x40" alt="Company logo" className="h-8" />
            <img src="https://placehold.co/100x40" alt="Company logo" className="h-8" />
            <img src="https://placehold.co/100x40" alt="Company logo" className="h-8" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What our users say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img src="https://placehold.co/40x40" alt="User" className="w-10 h-10 rounded-full" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">{testimonial.text}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(testimonial.stars)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Docutech</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white px-4 py-2 rounded-full shadow inline-block">
                Trusted by Thousands
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow inline-block">
                SOC-2 Certified
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow inline-block">
                GDPR & HIPAA Compliant
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow inline-block">
                End-to-end encryption
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Feature content */}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-4">Pick your plan. We make this part easy too.</h3>
          
          {/* Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1">
              <button
                className={`px-4 py-2 rounded-full ${isMonthly ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full ${!isMonthly ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                onClick={() => setIsMonthly(false)}
              >
                Annually
              </button>
            </div>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-white p-6 rounded-lg ${plan.name === 'Premium' ? 'border-2 border-blue-600' : 'border border-gray-200'}`}>
                <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.name === 'Premium' ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Select Plan
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">FAQs</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full text-left py-4 flex justify-between items-center"
                  onClick={() => setSelectedPlan(selectedPlan === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span>{selectedPlan === index ? '−' : '+'}</span>
                </button>
                {selectedPlan === index && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;