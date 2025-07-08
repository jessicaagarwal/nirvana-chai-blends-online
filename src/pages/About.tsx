
import React from 'react';
import { Leaf, Heart, Globe, Award, Users, Mountain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Natural Excellence',
      description: 'We source only the finest organic tea leaves and herbs from pristine locations across Kazakhstan and neighboring regions.'
    },
    {
      icon: Heart,
      title: 'Cultural Heritage',
      description: 'Our blends honor the rich tea traditions of Kazakhstan, passed down through generations of tea masters.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'From our home in Kazakhstan, we share the authentic taste of our heritage with tea lovers worldwide.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every batch is carefully tested and meets our stringent quality standards for flavor, aroma, and freshness.'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded in Almaty with a passion for sharing authentic Kazakh tea culture with the world.'
    },
    {
      year: '2019',
      title: 'First Blends',
      description: 'Launched our signature collection of 12 handcrafted tea blends inspired by the Kazakh steppes.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Extended our reach to Russia and Central Asian markets, bringing joy to thousands of tea enthusiasts.'
    },
    {
      year: '2023',
      title: 'Premium Collection',
      description: 'Introduced our luxury line featuring rare ingredients like saffron and mountain herbs.'
    },
    {
      year: '2024',
      title: 'International Recognition',
      description: 'Reached 10,000+ happy customers worldwide and expanded to 40+ unique tea blends.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-cormorant text-5xl font-bold text-primary mb-6">
                Our Story
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                NirvanaChai was born from a deep love for tea and a desire to share the authentic 
                flavors of Kazakhstan with the world. What started as a small family business has 
                grown into a beloved brand trusted by tea enthusiasts across the globe.
              </p>
              <p className="text-lg text-gray-600">
                Every cup tells a story of tradition, quality, and the breathtaking landscapes 
                of Kazakhstan that inspire our unique blends.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Tea plantation in Kazakhstan"
                className="w-full h-96 object-cover rounded-2xl tea-shadow"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 tea-gradient rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant text-4xl font-bold text-primary mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To create exceptional tea experiences that honor Kazakh traditions while bringing 
            people together through the universal language of tea. We believe that every cup 
            should be a moment of tranquility, connection, and pure enjoyment.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing ingredients to crafting the perfect blend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 tea-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-gray-600">From humble beginnings to global recognition</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {item.year.slice(-2)}
                        </div>
                        <h3 className="font-cormorant text-xl font-semibold text-primary ml-3">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 tea-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '40+', label: 'Tea Blends' },
              { number: '10,000+', label: 'Happy Customers' },
              { number: '15+', label: 'Countries Served' },
              { number: '6', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-cormorant text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant text-4xl font-bold text-primary mb-8">
            Meet Our Tea Masters
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our team of passionate tea experts work tirelessly to bring you the finest 
            tea experiences, combining traditional knowledge with modern innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Aigerim Nazarbayeva', role: 'Founder & Master Blender', image: '/placeholder.svg' },
              { name: 'Daulet Karimov', role: 'Quality Control Expert', image: '/placeholder.svg' },
              { name: 'Saltanat Omarova', role: 'Cultural Heritage Consultant', image: '/placeholder.svg' }
            ].map((member, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-cormorant text-lg font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
