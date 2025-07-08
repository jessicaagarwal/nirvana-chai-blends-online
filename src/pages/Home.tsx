
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Award, Users, Globe, Star, ArrowRight, CheckCircle, Truck, Shield } from 'lucide-react';

const defaultImage = '/placeholder.svg';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Mountain Serenity Blend',
      price: 3500,
      originalPrice: 4000,
      image: defaultImage,
      category: 'Premium',
      rating: 4.9,
      badge: 'Best Seller',
      description: 'A harmonious blend of high-altitude teas with floral notes'
    },
    {
      id: 2,
      name: 'Kazakh Traditional Green',
      price: 2800,
      image: defaultImage,
      category: 'Green Tea',
      rating: 4.8,
      badge: 'Heritage',
      description: 'Traditional green tea from the steppes of Kazakhstan'
    },
    {
      id: 3,
      name: 'Steppe Herbal Harmony',
      price: 3200,
      image: defaultImage,
      category: 'Herbal',
      rating: 4.7,
      badge: 'Wellness',
      description: 'Calming herbal blend with native Kazakh botanicals'
    },
    {
      id: 4,
      name: 'Royal Saffron Black',
      price: 4200,
      image: defaultImage,
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
      image: defaultImage
    },
    {
      name: 'Dmitri Petrov',
      location: 'Moscow, Russia',
      text: 'I discovered NirvanaChai through a friend. Now it is my daily ritual. Authentic and premium quality.',
      rating: 5,
      image: defaultImage
    },
    {
      name: 'Sarah Chen',
      location: 'New York, USA',
      text: 'These tea blends are incredible. The packaging is beautiful and the taste is unmatched.',
      rating: 5,
      image: defaultImage
    }
  ];

  const benefits = [
    { icon: CheckCircle, title: 'Premium Quality', desc: 'Hand-selected from the finest tea gardens' },
    { icon: Truck, title: 'Free Shipping', desc: 'Complimentary delivery on orders over ₸5000' },
    { icon: Shield, title: 'Quality Guarantee', desc: '30-day money-back guarantee' },
    { icon: Award, title: 'Award Winning', desc: 'Recognized by international tea masters' }
  ];

  const categories = [
    {
      id: 'herbal',
      title: 'Herbal Teas',
      description: 'Caffeine-free blends with native Kazakh botanicals.',
      image: defaultImage,
      link: '/collections/herbal'
    },
    {
      id: 'green',
      title: 'Green Teas',
      description: 'Traditional green teas from the steppes.',
      image: defaultImage,
      link: '/collections/green'
    },
    {
      id: 'black',
      title: 'Black Teas',
      description: 'Rich, bold, and full-bodied blends.',
      image: defaultImage,
      link: '/collections/black'
    }
  ];

  // Unified Card
  const UnifiedCard = ({ image, title, subtitle, description, badge, rating, price, originalPrice, button, link }) => (
    <Card className="rounded-2xl bg-white premium-shadow hover-lift transition-all border-0">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={image || defaultImage}
            alt={title}
            className="w-full h-56 object-cover"
          />
          {badge && (
            <Badge className="absolute top-4 left-4 bg-secondary text-white font-semibold">{badge}</Badge>
          )}
          {originalPrice && price && (
            <Badge className="absolute top-4 right-4 bg-red-500 text-white font-semibold">
              Save ₸{originalPrice - price}
            </Badge>
          )}
        </div>
        <div className="p-6 text-left">
          {subtitle && <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium mb-2 inline-block">{subtitle}</span>}
          <h3 className="font-playfair text-lg font-semibold text-primary mb-2">{title}</h3>
          {description && <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>}
          {rating && (
            <div className="flex items-center mb-2">
              {[...Array(Math.round(rating))].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-xs text-gray-600 ml-1 font-medium">{rating}</span>
            </div>
          )}
          {price && (
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold text-primary text-lg">₸{price}</span>
              {originalPrice && <span className="text-sm text-gray-500 line-through">₸{originalPrice}</span>}
            </div>
          )}
          {button && link && (
            <Button asChild variant="secondary" className="rounded-full px-6 py-2 font-semibold w-full mt-2">
              <Link to={link}>{button}</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-white py-10 lg:py-16 overflow-hidden animate-fade-in">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-32 h-32 bg-secondary/10 rounded-full absolute top-10 left-10 animate-float" />
          <div className="w-24 h-24 bg-primary/10 rounded-full absolute bottom-10 right-20 animate-float" style={{animationDelay: '1.5s'}} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <Leaf className="h-4 w-4 mr-2" />
                Premium Kazakhstan Tea Collection
              </div>
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                Fresh tea,<br />
                <span className="text-gradient">fresh taste!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Discover the authentic taste of Kazakhstan with our handcrafted tea blends. Over 40 premium varieties sourced from the finest tea gardens and infused with traditional Kazakh herbs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
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
            <div className="flex-1 flex justify-center">
              <img
                src={defaultImage}
                alt="Premium tea collection"
                className="w-full max-w-md h-96 object-cover rounded-3xl shadow-xl border-4 border-clay bg-cream"
                onError={e => { e.currentTarget.src = '/public/placeholder.svg'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-16 bg-cream animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center py-8">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <benefit.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary text-center">{benefit.title}</h3>
                <p className="text-earthy-brown text-sm text-center">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-white via-cream to-white animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-4">Bestselling Blends</h2>
            <p className="text-xl text-primary max-w-3xl mx-auto leading-relaxed">
              Discover our most loved tea collections, each carefully crafted to deliver an exceptional taste experience rooted in Kazakh tradition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((product, idx) => (
              <Link key={product.id} to={`/product/${product.id}`} className="block group animate-fade-in" style={{ animationDelay: `${0.6 + idx * 0.1}s`, animationFillMode: 'both' }}>
                <Card className="rounded-3xl bg-white shadow-lg border-0 hover-lift transition-all transform scale-100 hover:scale-105 duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-3xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover"
                      />
                      {product.badge && (
                        <Badge className="absolute top-4 left-4 bg-secondary text-white font-semibold">{product.badge}</Badge>
                      )}
                      {product.originalPrice && product.price && (
                        <Badge className="absolute top-4 right-4 bg-red-500 text-white font-semibold">
                          Save ₸{product.originalPrice - product.price}
                        </Badge>
                      )}
                    </div>
                    <div className="p-6 text-left">
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium mb-2 inline-block">{product.category}</span>
                      <h3 className="font-playfair text-lg font-semibold text-primary mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1 font-medium">{product.rating}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-bold text-primary text-lg">₸{product.price}</span>
                        {product.originalPrice && <span className="text-sm text-gray-500 line-through">₸{product.originalPrice}</span>}
                      </div>
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full w-full mt-2"
                        onClick={e => { e.preventDefault(); e.stopPropagation(); /* Add to cart logic here */ }}>
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-full border-2">
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-clay animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">Shop by Category</h2>
            <p className="text-lg text-earthy-brown max-w-2xl mx-auto">Explore our curated collections of Herbal, Green, and Black teas, each crafted to bring you a unique taste of Kazakhstan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.map((cat, idx) => (
              <Card key={cat.id} className="rounded-3xl bg-white shadow-lg border-0 hover-lift transition-all transform scale-100 hover:scale-105 duration-300 animate-fade-in" style={{ animationDelay: `${0.8 + idx * 0.1}s`, animationFillMode: 'both' }}>
                <CardContent className="p-8 flex flex-col items-center">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-32 h-32 mb-6 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-2">{cat.title}</h3>
                  <p className="text-earthy-brown text-sm mb-4 text-center">{cat.description}</p>
                  <Button variant="secondary" className="rounded-full px-6 py-2 font-semibold">Explore</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-cream/60 to-white animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-4">What Our Customers Say</h2>
            <p className="text-xl text-primary">Trusted by tea enthusiasts across the globe</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="rounded-3xl bg-white shadow-lg border-0 hover-lift transition-all flex flex-col items-center p-8 animate-fade-in" style={{ animationDelay: `${1.0 + idx * 0.1}s`, animationFillMode: 'both' }}>
                <CardContent className="p-0 flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-secondary mb-4 shadow"
                  />
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic text-lg leading-relaxed text-center">"{testimonial.text}"</p>
                  <div className="text-center">
                    <p className="font-semibold text-primary text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-clay via-cream to-white relative overflow-hidden animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 animate-slide-up text-primary" style={{ animationDelay: '1.3s', animationFillMode: 'both' }}>
            Begin Your Tea Journey Today
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up text-earthy-brown">
            Join thousands of tea lovers who have discovered the perfect cup. Experience the authentic taste of Kazakhstan delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up">
            <Button asChild size="lg" className="tea-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-full">
              <Link to="/shop">Start Shopping</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full border-2">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>
    </div>
  );
};

export default Home;
