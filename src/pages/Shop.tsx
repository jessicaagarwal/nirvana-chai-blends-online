
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Green Tea', 'Black Tea', 'Herbal', 'Premium Blends'];

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
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Kazakh Traditional Green',
      price: 2800,
      image: '/placeholder.svg',
      category: 'Green Tea',
      rating: 4.8,
      reviews: 89,
      description: 'Classic green tea sourced from the foothills of the Tian Shan mountains.',
      ingredients: ['Organic Green Tea', 'Natural Flavoring'],
      inStock: true,
      badge: 'Heritage'
    },
    {
      id: 3,
      name: 'Steppe Herbal Harmony',
      price: 3200,
      image: '/placeholder.svg',
      category: 'Herbal',
      rating: 4.7,
      reviews: 156,
      description: 'Caffeine-free herbal blend featuring wild herbs from the Kazakh steppes.',
      ingredients: ['Chamomile', 'Lavender', 'Lemon Balm', 'Wild Thyme'],
      inStock: true,
      badge: 'Wellness'
    },
    {
      id: 4,
      name: 'Royal Saffron Black',
      price: 4200,
      image: '/placeholder.svg',
      category: 'Black Tea',
      rating: 4.9,
      reviews: 78,
      description: 'Luxurious black tea infused with precious saffron threads.',
      ingredients: ['Ceylon Black Tea', 'Saffron', 'Cardamom'],
      inStock: true,
      badge: 'Luxury'
    },
    {
      id: 5,
      name: 'Morning Burst Earl Grey',
      price: 2900,
      image: '/placeholder.svg',
      category: 'Black Tea',
      rating: 4.6,
      reviews: 203,
      description: 'Traditional Earl Grey with a Kazakh twist, perfect for morning rituals.',
      ingredients: ['Black Tea', 'Bergamot Oil', 'Cornflower Petals'],
      inStock: true,
    },
    {
      id: 6,
      name: 'Nomad\'s Rest Chamomile',
      price: 2500,
      image: '/placeholder.svg',
      category: 'Herbal',
      rating: 4.5,
      reviews: 92,
      description: 'Soothing chamomile blend perfect for evening relaxation.',
      ingredients: ['Chamomile Flowers', 'Honey Granules', 'Lemon Peel'],
      inStock: false,
    },
    {
      id: 7,
      name: 'Dragon Well Supreme',
      price: 3800,
      image: '/placeholder.svg',
      category: 'Green Tea',
      rating: 4.8,
      reviews: 67,
      description: 'Premium Chinese Dragon Well green tea with delicate nutty notes.',
      ingredients: ['Dragon Well Green Tea'],
      inStock: true,
    },
    {
      id: 8,
      name: 'Altai Mountains Oolong',
      price: 4500,
      image: '/placeholder.svg',
      category: 'Premium Blends',
      rating: 4.9,
      reviews: 45,
      description: 'Semi-fermented tea from the pristine Altai region.',
      ingredients: ['Oolong Tea', 'Natural Mountain Minerals'],
      inStock: true,
      badge: 'Limited Edition'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-cormorant text-4xl font-bold text-primary mb-2">Our Tea Collection</h1>
          <p className="text-gray-600">Discover over 40 handcrafted tea blends from Kazakhstan</p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "tea-gradient text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} products {selectedCategory !== 'All' && `in ${selectedCategory}`}
          </p>
        </div>

        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className={`group hover-lift cursor-pointer border-0 tea-shadow ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <CardContent className="p-0">
                <Link to={`/product/${product.id}`} className={`${viewMode === 'list' ? 'flex' : 'block'}`}>
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover ${
                        viewMode === 'list' 
                          ? 'w-full h-full rounded-l-lg' 
                          : 'w-full h-48 rounded-t-lg'
                      }`}
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-secondary text-white">
                        {product.badge}
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                        Save ₸{product.originalPrice - product.price}
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                        <Badge variant="secondary">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h3 className="font-cormorant text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    
                    {viewMode === 'list' && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-primary">₸{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₸{product.originalPrice}</span>
                        )}
                      </div>
                      {product.inStock && (
                        <Button size="sm" variant="ghost" className="text-secondary hover:bg-secondary/10">
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <Button 
              onClick={() => setSelectedCategory('All')} 
              className="mt-4"
              variant="outline"
            >
              Show All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
