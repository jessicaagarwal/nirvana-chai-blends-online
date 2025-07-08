
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Award, Users, Globe, Star, ArrowRight, CheckCircle, Truck, Shield } from 'lucide-react';

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
      badge: 'Best Seller',
      description: 'A harmonious blend of high-altitude teas with floral notes'
    },
    {
      id: 2,
      name: 'Kazakh Traditional Green',
      price: 2800,
      image: '/placeholder.svg',
      category: 'Green Tea',
      rating: 4.8,
      badge: 'Heritage',
      description: 'Traditional green tea from the steppes of Kazakhstan'
    },
    {
      id: 3,
      name: 'Steppe Herbal Harmony',
      price: 3200,
      image: '/placeholder.svg',
      category: 'Herbal',
      rating: 4.7,
      badge: 'Wellness',
      description: 'Calming herbal blend with native Kazakh botanicals'
    },
    {
      id: 4,
      name: 'Royal Saffron Black',
      price: 4200,
      image: '/placeholder.svg',
      category: 'Black Tea',
      rating: 4.9,
      badge: 'Luxury',
      description: 'Premium black tea infused with genuine saffron threads'
    }
  ];

  const testimonials = [
    {
      name: 'Aida Nazarbayeva',
      location: 'Almaty, Kazakhstan',
      text: 'The quality of NirvanaChai teas is exceptional. Each blend tells a story of our beautiful Kazakhstan.',
      rating: 5,
      image: '/placeholder.svg'
    },
    {
      name: 'Dmitri Petrov',
      location: 'Moscow, Russia',
      text: 'I discovered NirvanaChai through a friend. Now it is my daily ritual. Authentic and premium quality.',
      rating: 5,
      image: '/placeholder.svg'
    },
    {
      name: 'Sarah Chen',
      location: 'New York, USA',
      text: 'These tea blends are incredible. The packaging is beautiful and the taste is unmatched.',
      rating: 5,
      image: '/placeholder.svg'
    }
  ];

  const benefits = [
    { icon: CheckCircle, title: 'Premium Quality', desc: 'Hand-selected from the finest tea gardens' },
    { icon: Truck, title: 'Free Shipping', desc: 'Complimentary delivery on orders over ₸5000' },
    { icon: Shield, title: 'Quality Guarantee', desc: '30-day money-back guarantee' },
    { icon: Award, title: 'Award Winning', desc: 'Recognized by international tea masters' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-white to-cream/50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjBmNGY4IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Leaf className="h-4 w-4 mr-2" />
                Premium Kazakhstan Tea Collection
              </div>
              
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
                Fresh tea,<br />
                <span className="text-gradient">fresh taste!</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Discover the authentic taste of Kazakhstan with our handcrafted tea blends. 
                Over 40 premium varieties sourced from the finest tea gardens and infused with traditional Kazakh herbs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="tea-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-full">
                  <Link to="/shop">
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="px-8 py-4 text-lg font-semibold rounded-full border-2">
                  <Link to="/about">Our Heritage</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative z-10 glass-effect rounded-3xl p-8 premium-shadow">
                <img
                  src="/placeholder.svg"
                  alt="Premium tea collection"
                  className="w-full h-96 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h3 className="font-playfair text-2xl font-semibold text-primary mb-3">
                    Heritage Collection
                  </h3>
                  <p className="text-gray-600">
                    Curated selection of our finest traditional blends
                  </p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 tea-gradient rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group animate-fade-in-scale" style={{animationDelay: `${index * 100}ms`}}>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-primary mb-6">
              Bestselling Blends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most loved tea collections, each carefully crafted to deliver 
              an exceptional taste experience rooted in Kazakh tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="group hover-lift cursor-pointer border-0 premium-shadow bg-white animate-fade-in-scale" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-secondary text-white font-semibold">
                      {product.badge}
                    </Badge>
                    {product.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-red-500 text-white font-semibold">
                        Save ₸{product.originalPrice - product.price}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1 font-medium">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-primary text-lg">₸{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₸{product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-full border-2">
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-cream/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-primary mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">Trusted by tea enthusiasts across the globe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover-lift bg-white premium-shadow animate-fade-in-scale" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-primary text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 tea-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-playfair text-5xl font-bold mb-6 animate-fade-in-up">
            Begin Your Tea Journey Today
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Join thousands of tea lovers who have discovered the perfect cup. 
            Experience the authentic taste of Kazakhstan delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up">
            <Button asChild size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold rounded-full">
              <Link to="/shop">Start Shopping</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full border-2">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>
    </div>
  );
};

export default Home;
