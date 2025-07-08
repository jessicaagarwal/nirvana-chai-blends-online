export interface Product {
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
  gallery?: string[];
  brewingTips?: string;
} 