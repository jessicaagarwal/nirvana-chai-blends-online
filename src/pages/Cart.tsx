
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-8" />
          <h1 className="font-playfair text-4xl font-bold text-primary mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our premium tea collection and add some amazing blends to your cart.
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
            <Link to="/shop" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card className="premium-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="font-playfair text-3xl font-bold text-primary">
                      Shopping Cart ({items.length} items)
                    </h1>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-700"
                    >
                      Clear Cart
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border-b border-gray-200 last:border-b-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-playfair text-lg font-semibold text-primary">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600">{item.servingType}</p>
                          <p className="text-lg font-bold text-primary mt-1">₸{item.price}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-primary">
                            ₸{(item.price * item.quantity).toLocaleString()}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700 mt-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="premium-shadow sticky top-8">
                <CardContent className="p-6">
                  <h2 className="font-playfair text-2xl font-bold text-primary mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₸{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {getTotalPrice() >= 5000 ? 'Free' : '₸500'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">₸{Math.round(getTotalPrice() * 0.12).toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold text-lg">Total</span>
                        <span className="font-bold text-lg text-primary">
                          ₸{(getTotalPrice() + (getTotalPrice() >= 5000 ? 0 : 500) + Math.round(getTotalPrice() * 0.12)).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {getTotalPrice() < 5000 && (
                    <div className="bg-cream/50 p-3 rounded-lg mb-6">
                      <p className="text-sm text-center">
                        Add ₸{(5000 - getTotalPrice()).toLocaleString()} more for free shipping!
                      </p>
                    </div>
                  )}

                  <Button asChild className="w-full tea-gradient text-white text-lg py-6">
                    <Link to="/checkout">
                      Proceed to Checkout
                    </Link>
                  </Button>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Secure checkout with SSL encryption
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
