
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    {
      id: 'green',
      name: 'Green Tea',
      title: 'TEAS & INFUSIONS',
      description: 'Premium green tea blends from the mountains of Kazakhstan',
      image: '/placeholder.svg',
      color: 'bg-forest-green'
    },
    {
      id: 'herbal',
      name: 'Herbal',
      title: 'WELLNESS BLENDS', 
      description: 'Therapeutic herbal combinations for health and wellness',
      image: '/placeholder.svg',
      color: 'bg-saffron-orange'
    },
    {
      id: 'black',
      name: 'Black Tea',
      title: 'PREMIUM BLACKS',
      description: 'Rich and robust black tea varieties with bold flavors',
      image: '/placeholder.svg',
      color: 'bg-earthy-brown'
    }
  ];

  const productTabs = ['BEST SELLERS', 'NEW', 'WEBSITE EXCLUSIVE'];
  const [activeTab, setActiveTab] = useState('BEST SELLERS');

  const products = [
    {
      id: 1,
      name: 'Mountain Serenity Blend',
      price: 3500,
      originalPrice: 4000,
      image: '/placeholder.svg',
      category: 'Premium Blends',
      rating: 4.9,
      reviews: 124,
      description: 'A harmonious blend of high-altitude tea leaves with traditional Kazakh herbs.',
      ingredients: ['Green Tea', 'Mint', 'Chamomile', 'Rose Petals'],
      inStock: true,
      badge: 'Best Seller',
      servingType: 'Loose Leaf | 170 Cups',
      discount: '50% OFF'
    },
    {
      id: 2,
      name: 'Kazakh Traditional Green',
      price: 2800,
      originalPrice: 3200,
      image: '/placeholder.svg',
      category: 'Green Tea',
      rating: 4.8,
      reviews: 89,
      description: 'Classic green tea sourced from the foothills of the Tian Shan mountains.',
      ingredients: ['Organic Green Tea', 'Natural Flavoring'],
      inStock: true,
      badge: 'Heritage',
      servingType: 'Loose Leaf | 170 Cups',
      discount: '50% OFF'
    },
    {
      id: 3,
      name: 'Steppe Herbal Harmony',
      price: 3200,
      originalPrice: 3800,
      image: '/placeholder.svg',
      category: 'Herbal',
      rating: 4.7,
      reviews: 156,
      description: 'Caffeine-free herbal blend featuring wild herbs from the Kazakh steppes.',
      ingredients: ['Chamomile', 'Lavender', 'Lemon Balm', 'Wild Thyme'],
      inStock: true,
      badge: 'Wellness',
      servingType: 'Tea Bags | 100 Cups',
      discount: '5% OFF'
    },
    {
      id: 4,
      name: 'Royal Saffron Black',
      price: 4200,
      originalPrice: 5000,
      image: '/placeholder.svg',
      category: 'Black Tea',
      rating: 4.9,
      reviews: 78,
      description: 'Luxurious black tea infused with precious saffron threads.',
      ingredients: ['Ceylon Black Tea', 'Saffron', 'Cardamom'],
      inStock: true,
      badge: 'Luxury',
      servingType: 'Loose Leaf | 170 Cups',
      discount: '50% OFF'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cream to-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-sm font-medium text-earthy-brown mb-4 tracking-widest uppercase">
            SOMETHING FOR EVERYONE
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6 text-gradient">
            Shop by Category
          </h1>
        </div>
      </div>

      {/* Category Circles Section */}
      <div className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {categories.map((category, index) => (
              <div key={category.id} className="text-center group">
                <div className="relative mb-8">
                  <div className={`w-80 h-80 mx-auto rounded-full ${category.color} p-8 flex items-center justify-center relative overflow-hidden hover-lift transition-all duration-500`}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-full opacity-90 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-primary mb-2 tracking-wide">
                  {category.title}
                </h3>
                <p className="text-earthy-brown text-sm max-w-xs mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shop by Product Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-earthy-brown mb-4 tracking-widest uppercase">
              DISCOVER YOUR FAVORITE
            </p>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-8 text-gradient">
              Shop by Product
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
            {products.map((product) => (
              <Card key={product.id} className="group hover-lift cursor-pointer border-0 tea-shadow bg-white overflow-hidden">
                <CardContent className="p-0">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden">
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
                      
                      <Button 
                        className="w-full bg-forest-green hover:bg-forest-green/90 text-white font-medium py-3 transition-all duration-300"
                        size="lg"
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
