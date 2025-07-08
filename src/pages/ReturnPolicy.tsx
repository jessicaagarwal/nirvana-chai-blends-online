import React from 'react';

const ReturnPolicy = () => (
  <div className="min-h-screen bg-background">
    <section className="relative py-20 bg-white animate-fade-in">
      {/* Floating circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold mb-8 text-primary text-center animate-slide-up">Return & Refund Policy</h1>
        <p className="text-gray-600 mb-8 text-center animate-fade-in">We want you to love your tea! Read about our return and refund process below.</p>
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Return Window</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>30-day return policy for unopened products</li>
              <li>Contact us within 30 days of delivery for a full refund</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">How to Request a Return</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Email us at <a href="mailto:hello@nirvanachai.kz" className="text-secondary underline">hello@nirvanachai.kz</a> with your order number</li>
              <li>We will provide instructions for returning your product</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Refunds</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Refunds are processed within 5 business days after we receive your return</li>
              <li>Original shipping fees are non-refundable</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ReturnPolicy; 