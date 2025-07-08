import React from 'react';

const TermsConditions = () => (
  <div className="min-h-screen bg-background">
    <section className="relative py-20 bg-white animate-fade-in">
      {/* Floating circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold mb-8 text-primary text-center animate-slide-up">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8 text-center animate-fade-in">By using our website and services, you agree to the following terms and conditions.</p>
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Use of Website</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>You must be at least 18 years old or have parental consent to use our site.</li>
              <li>Do not misuse our services or attempt to access accounts that are not yours.</li>
              <li>All content is for personal, non-commercial use unless otherwise stated.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Orders & Payments</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>All orders are subject to availability and confirmation.</li>
              <li>Prices and offers may change without notice.</li>
              <li>Payment must be made in full before dispatch.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Liability</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>We are not liable for indirect or consequential losses.</li>
              <li>We do our best to ensure accuracy, but errors may occur.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Contact Us</h2>
            <p className="text-gray-700">If you have any questions about these terms, please contact us at <a href="mailto:hello@nirvanachai.kz" className="text-secondary underline">hello@nirvanachai.kz</a>.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default TermsConditions; 