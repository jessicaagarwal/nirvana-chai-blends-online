import React from 'react';

const ShippingPolicy = () => (
  <div className="min-h-screen bg-background">
    <section className="relative py-20 bg-white animate-fade-in">
      {/* Floating circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold mb-8 text-primary text-center animate-slide-up">Shipping Policy</h1>
        <p className="text-gray-600 mb-8 text-center animate-fade-in">Learn about our shipping methods, delivery times, and regions served.</p>
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Shipping Methods</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Standard shipping (5-7 business days)</li>
              <li>Express shipping (2-3 business days)</li>
              <li>Free shipping on orders over ₸5,000</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Delivery Regions</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Kazakhstan (nationwide)</li>
              <li>Russia, Central Asia, and select international destinations</li>
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-primary mb-2">Order Tracking</h2>
            <p className="text-gray-700">You will receive a tracking number by email once your order is shipped. Use our <a href="/track-order" className="text-secondary underline">Track Order</a> page to check your order status.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ShippingPolicy; 