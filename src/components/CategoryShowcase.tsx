
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryShowcaseProps {
  categories: Array<{
    id: string;
    name: string;
    title: string;
    description: string;
    image: string;
    color: string;
  }>;
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ categories }) => {
  return (
    <div className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-earthy-brown mb-4 tracking-widest uppercase">
            SOMETHING FOR EVERYONE
          </p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6 text-gradient">
            Shop by Category
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="text-center group block"
            >
              <div className="relative mb-8">
                <div className={`w-80 h-80 mx-auto rounded-full ${category.color} p-8 flex items-center justify-center relative overflow-hidden hover-lift transition-all duration-500 cursor-pointer`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-full opacity-90 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-full group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-2 tracking-wide group-hover:text-saffron-orange transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-earthy-brown text-sm max-w-xs mx-auto leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
