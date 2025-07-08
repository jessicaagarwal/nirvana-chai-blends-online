import React from 'react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppContext } from '@/contexts/AppContext';

const Wishlist: React.FC = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { currency } = useAppContext();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-xl w-full text-center animate-fade-in">
          <Heart className="mx-auto mb-4 h-12 w-12 text-saffron-orange animate-float" />
          <h2 className="font-playfair text-3xl mb-2 text-primary animate-slide-up">Your wishlist is empty</h2>
          <p className="text-earthy-brown mb-6 animate-fade-in">Start adding your favorite blends to your wishlist!</p>
          <Button asChild className="tea-gradient text-white font-medium px-8 py-3 rounded-full transition-transform duration-200 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-white animate-fade-in">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl font-bold mb-10 text-primary text-center animate-slide-up">My Wishlist</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((product, idx) => (
              <Card key={product.id} className="group border-0 tea-shadow bg-white overflow-hidden rounded-2xl animate-fade-in" style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'both' }}>
                <CardContent className="p-0">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden bg-gradient-to-br from-forest-green to-forest-green/80 rounded-t-2xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button
                        onClick={e => { e.preventDefault(); e.stopPropagation(); removeFromWishlist(product.id); }}
                        className="absolute top-4 right-4 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-saffron-orange/90 transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Heart className="h-6 w-6 fill-saffron-orange text-saffron-orange" strokeWidth={0} />
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-saffron-orange transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold text-primary">{currency}{product.price}</span>
                      </div>
                    </div>
                  </Link>
                  <div className="px-6 pb-6">
                    <Button
                      onClick={e => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                      className="w-full tea-gradient text-white font-medium py-3 rounded-full transition-all duration-300 hover:scale-105 animate-fade-in"
                      size="lg"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist; 