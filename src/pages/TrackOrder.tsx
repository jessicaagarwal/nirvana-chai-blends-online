import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: always returns 'Shipped'
    setStatus('Shipped');
  };

  return (
    <div className="min-h-screen bg-clay py-20">
      <div className="max-w-md mx-auto bg-white rounded-2xl premium-shadow p-8 text-center">
        <h1 className="font-playfair text-4xl font-bold text-primary mb-6">Track Your Order</h1>
        <form onSubmit={handleTrack} className="space-y-6">
          <input
            type="text"
            value={orderId}
            onChange={e => setOrderId(e.target.value)}
            placeholder="Order ID"
            className="w-full rounded-full border px-4 py-2 font-medium text-primary bg-cream"
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-full border px-4 py-2 font-medium text-primary bg-cream"
            required
          />
          <Button type="submit" size="lg" variant="secondary" className="rounded-full px-8 py-3 font-semibold w-full">Track Order</Button>
        </form>
        {status && (
          <div className="mt-8">
            <p className="text-lg font-semibold text-primary">Status: <span className="text-green-600">{status}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder; 