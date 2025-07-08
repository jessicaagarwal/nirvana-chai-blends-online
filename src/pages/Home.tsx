
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Award, Users, Globe, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Mountain Serenity Blend',
      price: 3500,
      originalPrice: 4000,
      image: '/placeholder.svg',
      category: 'Premium',
      rating: 4.9,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Kazakh Traditional Green',
      price: 2800,
      image: '/placeholder.svg',
      category: 'Green Tea',
      rating: 4.8,
      badge: 'Heritage'
    },
    {
      id: 3,
      name: 'Steppe Herbal Harmony',
      price: 3200,
      image: '/placeholder.svg',
      category: 'Herbal',
      rating: 4.7,
      badge: 'Wellness'
    },
    {
      id: 4,
      name: 'Royal Saffron Black',
      price: 4200,
      image: '/placeholder.svg',
      category: 'Black Tea',
      rating: 4.9,
      badge: 'Luxury'
    }
  ];

  const testimonials = [
    {
      name: 'Aida Nazarbayeva',
      location: 'Almaty, Kazakhstan',
      text: 'The quality of NirvanaChai teas is exceptional. Each blend tells a story of our beautiful Kazakhstan.',
      rating: 5
    },
    {
      name: 'Dmitri Petrov',
      location: 'Moscow, Russia',
      text: 'I discovered NirvanaChai through a friend. Now it is my daily ritual. Authentic and premium quality.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      location: 'New York, USA',
      text: 'These tea blends are incredible. The packaging is beautiful and the taste is unmatched.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjBmNGY4IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Leaf className="h-4 w-4 mr-2" />
                Premium Kazakhstan Tea
              </div>
              
              <h1 className="font-cormorant text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Fresh tea,<br />
                <span className="text-secondary">fresh taste!</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Discover the authentic taste of Kazakhstan with our handcrafted tea blends. 
                Over 40 premium varieties sourced from the finest tea gardens and infused with traditional Kazakh herbs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="tea-gradient text-white hover:opacity-90">
                  <Link to="/shop">
                    Shop All Teas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl p-8 tea-shadow">
                <img
                  src="/placeholder.svg"
                  alt="Premium tea collection"
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h3 className="font-cormorant text-xl font-semibold text-primary mb-2">
                    Heritage Collection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Curated selection of our finest traditional blends
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 tea-gradient rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Premium Quality', desc: 'Hand-selected finest tea leaves' },
              { icon: Award, title: 'Traditional Crafts', desc: 'Authentic Kazakh tea traditions' },
              { icon: Users, title: '10,000+ Happy Customers', desc: 'Trusted by tea lovers worldwide' },
              { icon: Globe, title: 'Global Shipping', desc: 'Delivered fresh to your doorstep' }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 tea-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-cormorant text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl font-bold text-primary mb-4">
              Bestselling Blends
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most loved tea collections, each carefully crafted to deliver 
              an exceptional taste experience rooted in Kazakh tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover-lift cursor-pointer border-0 tea-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-secondary text-white">
                      {product.badge}
                    </Badge>
                    {product.originalPrice && (
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                        Save ₸{product.originalPrice - product.price}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-cormorant text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-primary">₸{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₸{product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" variant="ghost" className="text-secondary hover:bg-secondary/10">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Trusted by tea enthusiasts across the globe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 tea-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-4xl font-bold mb-4">
            Begin Your Tea Journey Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of tea lovers who have discovered the perfect cup. 
            Experience the authentic taste of Kazakhstan delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/shop">Start Shopping</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
