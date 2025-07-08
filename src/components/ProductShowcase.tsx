
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  ingredients: string[];
  inStock: boolean;
  badge?: string;
  servingType: string;
  discount?: string;
}

interface ProductShowcaseProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ 
  products, 
  title = "Shop by Product",
  subtitle = "DISCOVER YOUR FAVORITE"
}) => {
  const productTabs = ['BEST SELLERS', 'NEW', 'WEBSITE EXCLUSIVE'];
  const [activeTab, setActiveTab] = useState('BEST SELLERS');
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-earthy-brown mb-4 tracking-widest uppercase">
            {subtitle}
          </p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-8 text-gradient">
            {title}
          </h2>
          
          {/* Product Tabs */}
          <div className="flex justify-center gap-8 mb-12">
            {productTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium tracking-wider transition-all duration-300 pb-2 border-b-2 ${
                  activeTab === tab
                    ? 'text-primary border-saffron-orange'
                    : 'text-earthy-brown border-transparent hover:text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, index) => (
            <Card key={product.id} className="group hover-lift cursor-pointer border-0 tea-shadow bg-white overflow-hidden">
              <CardContent className="p-0">
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden bg-gradient-to-br from-forest-green to-forest-green/80">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 left-4 bg-red-500 text-white font-medium">
                        {product.badge}
                      </Badge>
                    )}
                    {product.discount && (
                      <Badge className="absolute top-4 right-4 bg-saffron-orange text-white font-medium">
                        {product.discount}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-saffron-orange fill-current" />
                      ))}
                      <span className="text-sm text-earthy-brown ml-2">
                        {product.reviews} reviews
                      </span>
                    </div>
                    
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-saffron-orange transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-earthy-brown mb-4">
                      {product.servingType}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">₸{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₸{product.originalPrice}</span>
                        )}
                      </div>
                      {product.discount && (
                        <span className="text-sm font-medium text-saffron-orange">
                          {product.discount}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
                
                <div className="px-6 pb-6">
                  <Button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-forest-green hover:bg-forest-green/90 text-white font-medium py-3 transition-all duration-300"
                    size="lg"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
