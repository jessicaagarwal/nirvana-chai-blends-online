
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OrderSuccess = () => {
  const orderNumber = `NC${Date.now().toString().slice(-6)}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="min-h-screen bg-cream py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
          <h1 className="font-playfair text-4xl font-bold text-primary mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your purchase from NirvanaChai
          </p>
          <p className="text-lg text-gray-500">
            Order #{orderNumber}
          </p>
        </div>

        <Card className="premium-shadow mb-8">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                  Confirmation Email
                </h3>
                <p className="text-gray-600 text-sm">
                  Check your email for order details and tracking information
                </p>
              </div>
              
              <div className="text-center">
                <Package className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                  Processing
                </h3>
                <p className="text-gray-600 text-sm">
                  Your order is being prepared with care by our tea masters
                </p>
              </div>
              
              <div className="text-center">
                <Truck className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                  Delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  Estimated delivery: {estimatedDelivery}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-forest-green to-saffron-orange text-white p-8 rounded-2xl mb-8">
          <h2 className="font-playfair text-2xl font-bold mb-4">
            Welcome to the NirvanaChai Family!
          </h2>
          <p className="text-lg mb-4">
            Your tea journey begins now. Follow us on social media for brewing tips, 
            new arrivals, and exclusive offers.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Follow on Instagram
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Join our Newsletter
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="tea-gradient text-white">
            <Link to="/shop">
              Continue Shopping
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
