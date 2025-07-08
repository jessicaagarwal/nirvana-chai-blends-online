
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useI18n } from '../contexts/I18nContext';
import { useAppContext } from '../contexts/AppContext';
import { formatPrice } from '../lib/utils';
import CustomDropdown from '@/components/ui/CustomDropdown';

// Product type for type safety
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
  form?: string; // e.g. 'Loose Leaf', 'Tea Bags'
  caffeineFree?: boolean;
  isNew?: boolean;
}

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [productType, setProductType] = useState('All');
  const [form, setForm] = useState('All');
  const [caffeine, setCaffeine] = useState('All');
  const [collection, setCollection] = useState('All');
  const { t } = useI18n();
  const { currency } = useAppContext();

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

  const products: Product[] = [
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

  // Filtering logic
  let filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesForm = form === 'All' || (product.form === form);
    const matchesCaffeine = caffeine === 'All' || (product.caffeineFree ? 'Caffeine Free' : 'Caffeinated');
    const matchesCollection = collection === 'All' || product.badge === collection;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());
    let matchesTab = true;
    if (activeTab === 'BEST SELLERS') matchesTab = product.badge === 'Best Seller';
    if (activeTab === 'NEW') matchesTab = product.isNew;
    if (activeTab === 'WEBSITE EXCLUSIVE') matchesTab = product.badge === 'Exclusive';
    return matchesCategory && matchesForm && matchesCaffeine && matchesCollection && matchesSearch && matchesTab;
  });

  // Sorting logic
  if (sort === 'price-asc') filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-white border-b border-border">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-2 animate-fade-in-up">All Products</h1>
          <p className="text-lg text-earthy-brown animate-fade-in-up">Explore our complete range of teas, coffees, and botanicals crafted for modern wellness rituals.</p>
        </div>
      </div>

      {/* Main Shop Layout */}
      <div className="bg-cream max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Filter Sidebar */}
        <aside className="lg:col-span-1 xl:col-span-1 mb-10 lg:mb-0 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow p-4 sticky top-28">
            <h2 className="font-playfair text-xl font-bold text-primary mb-6">Filters</h2>
            {/* Price Filter */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">Price</label>
              <input type="range" min="0" max="5000" className="w-full accent-secondary" />
              <div className="flex justify-between text-xs text-earthy-brown mt-2">
                <span>₸0</span>
                <span>₸5000</span>
              </div>
            </div>
            {/* Product Type Filter */}
            <div className="mb-6 animate-fade-in-up">
              <label className="block text-sm font-semibold text-primary mb-2">Product Type</label>
              <CustomDropdown
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'Green Tea', label: 'Green Tea' },
                  { value: 'Herbal', label: 'Herbal' },
                  { value: 'Black Tea', label: 'Black Tea' },
                ]}
                value={productType}
                onChange={setProductType}
                placeholder="All"
                className="min-w-[120px] px-4 py-2"
              />
            </div>
            {/* Form Filter */}
            <div className="mb-6 animate-fade-in-up">
              <label className="block text-sm font-semibold text-primary mb-2">Form</label>
              <CustomDropdown
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'Loose Leaf', label: 'Loose Leaf' },
                  { value: 'Tea Bags', label: 'Tea Bags' },
                ]}
                value={form}
                onChange={setForm}
                placeholder="All"
                className="min-w-[120px] px-4 py-2"
              />
            </div>
            {/* Caffeine Filter */}
            <div className="mb-6 animate-fade-in-up">
              <label className="block text-sm font-semibold text-primary mb-2">Caffeine</label>
              <CustomDropdown
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'Caffeinated', label: 'Caffeinated' },
                  { value: 'Caffeine Free', label: 'Caffeine Free' },
                ]}
                value={caffeine}
                onChange={setCaffeine}
                placeholder="All"
                className="min-w-[120px] px-4 py-2"
              />
            </div>
            {/* Collection Filter */}
            <div className="animate-fade-in-up">
              <label className="block text-sm font-semibold text-primary mb-2">Collection</label>
              <CustomDropdown
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'Premium', label: 'Premium' },
                  { value: 'Wellness', label: 'Wellness' },
                  { value: 'Luxury', label: 'Luxury' },
                ]}
                value={collection}
                onChange={setCollection}
                placeholder="All"
                className="min-w-[120px] px-4 py-2"
              />
            </div>
          </div>
        </aside>

        {/* Product Grid & Sort */}
        <main className="lg:col-span-4 xl:col-span-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 animate-fade-in-up">
            <div></div>
            <div>
              <CustomDropdown
                options={[
                  { value: 'featured', label: 'Sort By' },
                  { value: 'best-selling', label: 'Best selling' },
                  { value: 'az', label: 'Alphabetically, A-Z' },
                  { value: 'za', label: 'Alphabetically, Z-A' },
                  { value: 'price-asc', label: 'Price, low to high' },
                  { value: 'price-desc', label: 'Price, high to low' },
                  { value: 'date-new', label: 'Date, new to old' },
                  { value: 'date-old', label: 'Date, old to new' },
                ]}
                value={sort}
                onChange={setSort}
                placeholder="Sort By"
                className="min-w-[120px] px-4 py-2"
                // The CustomDropdown already uses side='bottom' in its implementation
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <Link key={product.id} to={`/product/${product.id}`} className="block group">
                <Card className={`rounded-2xl bg-white shadow-lg border-0 hover-lift transition-all flex flex-col animate-fade-in-up`} style={{animationDelay: `${idx * 80}ms`}}>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover rounded-xl mb-2"
                      />
                      {product.badge && (
                        <Badge className="absolute top-4 left-4 bg-secondary text-white font-semibold">{product.badge}</Badge>
                      )}
                      {product.discount && (
                        <Badge className="absolute top-4 right-4 bg-green-600 text-white font-semibold">{product.discount}</Badge>
                      )}
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(Math.round(product.rating))].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-xs text-gray-600 ml-2">{product.reviews} reviews</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 flex-1">{product.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-bold text-primary text-lg">₸{product.price}</span>
                      {product.originalPrice && <span className="text-sm text-gray-500 line-through">₸{product.originalPrice}</span>}
                    </div>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full w-full mt-auto" onClick={e => { e.preventDefault(); e.stopPropagation(); handleAddToCart(e, product); }}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
