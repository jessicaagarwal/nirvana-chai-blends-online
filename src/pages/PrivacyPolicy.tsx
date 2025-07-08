import React from 'react';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <section className="relative py-20 bg-white animate-fade-in">
      {/* Floating circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold mb-8 text-primary text-center animate-slide-up">Privacy Policy</h1>
        <p className="text-gray-600 mb-8 text-center animate-fade-in">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Information We Collect</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Personal information (name, email, address, etc.) provided during checkout or account creation.</li>
              <li>Order history and preferences.</li>
              <li>Website usage data (cookies, analytics, etc.).</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">How We Use Your Information</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>To process orders and provide customer support.</li>
              <li>To personalize your experience and recommend products.</li>
              <li>To improve our website and services.</li>
              <li>To send updates, offers, and newsletters (you can opt out anytime).</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Your Rights</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of marketing communications.</li>
              <li>Request information about how your data is used.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Contact Us</h2>
            <p className="text-gray-700">If you have any questions about this policy, please contact us at <a href="mailto:hello@nirvanachai.kz" className="text-secondary underline">hello@nirvanachai.kz</a>.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy; 