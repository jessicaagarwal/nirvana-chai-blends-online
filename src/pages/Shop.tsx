
import React, { useEffect, useState, useMemo } from 'react';
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
import { getProducts } from '../lib/shopify';

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

const TABS = [
  { label: 'BEST SELLERS', value: 'best-sellers' },
  { label: 'NEW', value: 'new' },
  { label: 'WEBSITE EXCLUSIVE', value: 'exclusive' },
];

// Add category and tag mapping for clean UI
const CATEGORY_MAP: Record<string, string> = {
  'black; granulated; Kenyan Drink release form hermetic packaging; Granules; bulk': 'Black Tea',
  'green Drink release form rolled; bulk': 'Green Tea',
  // Add more mappings as needed
};

const TAG_MAP: Record<string, string> = {
  'Best Seller': 'Best Seller',
  'New': 'New',
  'Exclusive': 'Exclusive',
  // Add more mappings as needed
};

const Shop: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('best-sellers');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sort, setSort] = useState('default');
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Add state for selectedTag (move this above useMemo for filteredProducts)
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract unique categories and tags from products (raw values for now)
  const categories = useMemo(() => {
    const cats = new Set<string>();
    products.forEach((p) => p.productType && cats.add(p.productType));
    return ['All', ...Array.from(cats)];
  }, [products]);
  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    products.forEach((p) => p.tags?.forEach((t: string) => tagSet.add(t)));
    return Array.from(tagSet);
  }, [products]);

  // Filtering logic: category and tag are mutually exclusive for clarity
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.productType === selectedCategory;
      const matchesTag = selectedTag === 'All' || product.tags?.includes(selectedTag);
      return matchesCategory && matchesTag;
    });
  }, [products, selectedCategory, selectedTag]);

  // When a category is selected, reset tag to 'All', and vice versa
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedTag('All');
  };
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSelectedCategory('All');
  };

  // Sorting logic (bypassed for debugging)
  const sortedProducts = filteredProducts;

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-white animate-fade-in">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl font-bold mb-10 text-primary text-center animate-slide-up">All Products</h1>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4 mb-10 lg:mb-0 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow p-4 sticky top-28">
            <h2 className="font-playfair text-xl font-bold text-primary mb-6">Filters</h2>
                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-primary mb-2">Category</label>
                  <CustomDropdown
                    options={categories.map((c) => ({ value: c, label: c }))}
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    placeholder="All"
                    className="min-w-[120px] px-4 py-2"
                  />
                </div>
                {/* Tag Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-primary mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      key="All"
                      variant={selectedTag === 'All' ? 'secondary' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => handleTagClick('All')}
                    >
                      All
                    </Badge>
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTag === tag ? 'secondary' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
          </div>
        </aside>
            {/* Main Content */}
            <main className="flex-1">
              {/* Tabs and Sorting */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 animate-fade-in-up">
                <div className="flex gap-2">
                  {TABS.map(tab => (
                    <button
                      key={tab.value}
                      className={`px-4 py-2 rounded-full font-semibold ${activeTab === tab.value ? 'bg-secondary text-white' : 'bg-gray-100 text-primary'}`}
                      onClick={() => setActiveTab(tab.value)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
            <div>
              <CustomDropdown
                options={[
                      { value: 'default', label: 'Sort By' },
                  { value: 'price-asc', label: 'Price, low to high' },
                  { value: 'price-desc', label: 'Price, high to low' },
                      { value: 'az', label: 'A-Z' },
                      { value: 'za', label: 'Z-A' },
                ]}
                value={sort}
                onChange={setSort}
                placeholder="Sort By"
                className="min-w-[120px] px-4 py-2"
              />
            </div>
          </div>
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {sortedProducts.map((product, idx) => {
                  const imageUrl = product.images?.edges?.[0]?.node?.url || '/placeholder.svg';
                  const variant = product.variants?.edges?.[0]?.node;
                  return (
                    <Card key={product.id} className="group border-0 tea-shadow bg-white overflow-hidden rounded-2xl animate-fade-in" style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'both' }}>
                      <CardContent className="p-0">
                        <Link to={`/product/${product.handle}`}>
                          <div className="relative overflow-hidden bg-gradient-to-br from-forest-green to-forest-green/80 rounded-t-2xl">
                            <img
                              src={imageUrl}
                              alt={product.title}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                    </div>
                          <div className="p-6">
                            <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-saffron-orange transition-colors">
                              {product.title}
                            </h3>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {product.tags && product.tags.length > 0 && product.tags.map((tag: string) => (
                                <Badge key={tag} variant="outline" className="mr-1 mb-1">{TAG_MAP[tag] || tag}</Badge>
                              ))}
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                              {variant && (
                                <span className="text-lg font-bold text-primary">
                                  {formatPrice(Number(variant.price.amount), variant.price.currencyCode)}
                                </span>
                              )}
                            </div>
                    </div>
                        </Link>
                        <div className="px-6 pb-6">
                          <Button
                            className="w-full tea-gradient text-white font-medium py-3 rounded-full transition-all duration-300 hover:scale-105 animate-fade-in"
                            size="lg"
                            // onClick={...} // Integrate add to cart logic here
                          >
                      Add to Cart
                    </Button>
                        </div>
                  </CardContent>
                </Card>
                  );
                })}
          </div>
        </main>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
