import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CollectionsHerbal = () => (
  <div className="min-h-screen bg-clay py-20">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h1 className="font-playfair text-5xl font-bold text-primary mb-6">Herbal Tea Collection</h1>
      <p className="text-lg text-earthy-brown mb-8">Caffeine-free blends with native Kazakh botanicals. Discover our wellness-focused herbal teas.</p>
      <Button asChild variant="secondary" className="rounded-full px-8 py-4 font-semibold mb-8">
        <Link to="/shop">Shop All Teas</Link>
      </Button>
      {/* Product grid placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="bg-white rounded-2xl premium-shadow p-6 animate-fade-in-scale">
            <div className="w-32 h-32 mx-auto bg-cream rounded-full mb-4"></div>
            <h3 className="font-playfair text-xl font-bold text-primary mb-2">Herbal Blend #{i}</h3>
            <p className="text-sm text-earthy-brown mb-2">Wellness, Caffeine-Free</p>
            <Button size="sm" variant="secondary" className="rounded-full">View</Button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CollectionsHerbal; 