import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Classy Endeavors
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Learn about our mission, values, and the team behind our success.
          </p>
        </div>

        <div className="mt-16">
          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2025, Classy Endeavors has been at the forefront of innovation
              and excellence. We believe in creating meaningful experiences that leave
              a lasting impact on our clients and their audiences.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Our Mission">
              <p className="text-gray-600">
                To deliver exceptional value through innovative solutions while maintaining
                the highest standards of quality and customer satisfaction.
              </p>
            </Card>

            <Card title="Our Vision">
              <p className="text-gray-600">
                To become the leading provider of creative solutions, recognized globally
                for our commitment to excellence and innovation.
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Constantly pushing boundaries and exploring new possibilities.',
                },
                {
                  title: 'Integrity',
                  description: 'Maintaining the highest standards of professional ethics.',
                },
                {
                  title: 'Excellence',
                  description: 'Delivering outstanding results in everything we do.',
                },
              ].map((value) => (
                <Card key={value.title} title={value.title}>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;