
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    notes: '',
    paymentMethod: 'card',
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Please accept terms",
        description: "You must agree to the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      clearCart();
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
      
      // In a real app, redirect to success page
      window.location.href = '/order-success';
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 5000 ? 0 : 500;
  const tax = Math.round(subtotal * 0.12);
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl font-bold text-primary mb-4">
            No items to checkout
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Add some items to your cart before proceeding to checkout.
          </p>
          <Button asChild size="lg" className="tea-gradient text-white">
            <Link to="/shop">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <section className="relative py-20 bg-white">
        {/* Floating circles (optional) */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/cart" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-6">
              <Card className="premium-shadow">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-primary flex items-center">
                    <Truck className="h-6 w-6 mr-2" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="Special delivery instructions..."
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="premium-shadow">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-primary flex items-center">
                    <CreditCard className="h-6 w-6 mr-2" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => handleInputChange('paymentMethod', value)}
                  >
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <span>Credit/Debit Card</span>
                          <div className="flex space-x-2">
                            <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">VISA</div>
                            <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="kaspi" id="kaspi" />
                      <Label htmlFor="kaspi" className="flex-1 cursor-pointer">
                        Kaspi Pay
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        Cash on Delivery
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="premium-shadow sticky top-8">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-primary">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-sm">₸{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₸{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `₸${shipping}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>₸{tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span className="text-primary">₸{total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="bg-cream/50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <ShieldCheck className="h-4 w-4 text-green-600" />
                      <span>SSL Secured Checkout</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                      <Lock className="h-4 w-4 text-green-600" />
                      <span>Your data is protected</span>
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isProcessing || !formData.agreeToTerms}
                    className="w-full tea-gradient text-white text-lg py-6"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      `Place Order - ₸${total.toLocaleString()}`
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
