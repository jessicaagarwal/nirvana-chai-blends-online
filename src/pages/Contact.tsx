
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses via WhatsApp',
      contact: '+7 777 123 4567',
      action: 'Chat Now',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'For detailed inquiries',
      contact: 'hello@nirvanachai.kz',
      action: 'Send Email',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us during business hours',
      contact: '+7 727 123 4567',
      action: 'Call Now',
      color: 'bg-orange-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our showroom location',
      contact: 'Almaty, Kazakhstan',
      action: 'Get Directions',
      color: 'bg-purple-500'
    }
  ];

  const faqs = [
    {
      question: 'What are your shipping options?',
      answer: 'We offer standard shipping (5-7 business days) and express shipping (2-3 business days) to most locations. Free shipping on orders over ₸5,000.'
    },
    {
      question: 'How should I store my tea?',
      answer: 'Store your tea in a cool, dry place away from direct sunlight. Use airtight containers to preserve freshness and flavor.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 15 countries worldwide. Shipping costs vary by destination and weight.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unopened products. If you are not satisfied, contact us for a full refund.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cormorant text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about our teas or need assistance with your order? 
            We're here to help! Choose your preferred way to reach us.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl font-bold text-primary text-center mb-12">
            How Can We Help You?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-lift cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-cormorant text-lg font-semibold text-primary mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="font-medium text-primary mb-4">
                    {method.contact}
                  </p>
                  <Button size="sm" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-cormorant text-2xl text-primary">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full tea-gradient text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Business Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-cormorant text-2xl text-primary flex items-center">
                    <Clock className="h-6 w-6 mr-2 text-secondary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> All times are Kazakhstan Standard Time (GMT+6)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-cormorant text-2xl text-primary">
                    Visit Our Showroom
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-secondary mt-1" />
                      <div>
                        <p className="font-medium">NirvanaChai Showroom</p>
                        <p className="text-gray-600 text-sm">
                          123 Tea Street, Medeu District<br />
                          Almaty, Kazakhstan 050000
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-cream/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        Visit our showroom to experience our complete tea collection, 
                        enjoy complimentary tastings, and learn about proper brewing techniques 
                        from our tea experts.
                      </p>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our teas and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-cormorant text-lg font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <Button className="tea-gradient text-white">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
