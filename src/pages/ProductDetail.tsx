
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/use-toast';
import { useWishlist } from '@/contexts/WishlistContext';
import { getProducts } from '../lib/shopify';

const ProductDetail = () => {
  const { id: handle } = useParams();
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((products) => {
        const found = products.find((p: any) => p.handle === handle);
        setProduct(found || null);
        console.log('Loaded product:', found);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) return <div>Loading product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  // Defensive fallbacks for Shopify data
  const images = product.images?.edges?.map((img: any) => img.node?.url || '/placeholder.svg') || ['/placeholder.svg'];
  const title = product.title || 'Untitled Product';
  const description = product.description || '';
  const price = product.variants?.edges?.[0]?.node?.price?.amount || 'N/A';
  const currency = product.variants?.edges?.[0]?.node?.price?.currencyCode || '';
  const tags = product.tags || [];
  const productType = product.productType || '';
  const benefits = product.benefits || [];
  const ingredients = product.ingredients || [];
  const brewingInstructions = product.brewingInstructions || '';
  const origin = product.origin || '';
  const weight = product.weight || '';
  const longDescription = product.longDescription || '';
  const stockCount = product.stockCount || 0;
  const rating = product.rating || 0;
  const reviews = product.reviews || 0;
  const originalPrice = product.originalPrice || null;
  const badge = product.badge || null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart",
      description: `${quantity} x ${title} added to your cart`,
    });
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({ title: 'Removed from wishlist', description: `${title} removed from your wishlist` });
    } else {
      addToWishlist({
        id: product.id,
        name: title,
        price: price,
        image: images[0],
      });
      toast({ title: 'Added to wishlist', description: `${title} added to your wishlist` });
    }
  };

  const relatedProducts = [
    { id: 2, name: 'Kazakh Traditional Green', price: 2800, image: '/placeholder.svg', rating: 4.8 },
    { id: 3, name: 'Steppe Herbal Harmony', price: 3200, image: '/placeholder.svg', rating: 4.7 },
    { id: 4, name: 'Royal Saffron Black', price: 4200, image: '/placeholder.svg', rating: 4.9 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <section className="relative py-20 bg-white">
        {/* Floating circles (optional) */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <a href="/shop" className="hover:text-primary">Shop</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={images[selectedImage]}
                  alt={title}
                  className="w-full h-96 object-cover rounded-lg tea-shadow"
                />
                {badge && (
                  <Badge className="absolute top-4 left-4 bg-secondary text-white">
                    {badge}
                  </Badge>
                )}
                {originalPrice && (
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                    Save ₸{originalPrice - price}
                  </Badge>
                )}
              </div>
              
              <div className="flex space-x-2">
                {images.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${title} ${index + 1}`}
                    className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                      selectedImage === index ? 'border-secondary' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                    {productType}
                  </span>
                  <Button variant="ghost" size="sm" onClick={handleWishlist} aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}>
                    <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-saffron-orange text-saffron-orange' : 'text-gray-400'}`} strokeWidth={isInWishlist(product.id) ? 0 : 2} />
                  </Button>
                </div>
                
                <h1 className="font-cormorant text-3xl font-bold text-primary mb-4">
                  {title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {rating} ({reviews} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-primary">₸{price}</span>
                  {originalPrice && (
                    <span className="text-xl text-gray-500 line-through">₸{originalPrice}</span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">
                  {description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-cormorant text-lg font-semibold text-primary mb-3">Key Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {benefits.map((benefit: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <Leaf className="h-3 w-3 mr-1" />
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">Quantity:</label>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    ({stockCount} in stock)
                  </span>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-1 tea-gradient text-white"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Buy Now
                  </Button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="h-4 w-4 mr-2 text-secondary" />
                  Free shipping on orders over ₸5,000
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2 text-secondary" />
                  Quality guarantee - 100% authentic
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <RotateCcw className="h-4 w-4 mr-2 text-secondary" />
                  30-day return policy
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients & Brewing</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-cormorant text-xl font-semibold text-primary mb-4">
                      About {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {longDescription}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Origin:</span> {origin}
                      </div>
                      <div>
                        <span className="font-medium">Weight:</span> {weight}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ingredients" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-cormorant text-xl font-semibold text-primary mb-4">
                          Ingredients
                        </h3>
                        <ul className="space-y-2">
                          {ingredients.map((ingredient: string, index: number) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <Leaf className="h-3 w-3 mr-2 text-secondary" />
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-cormorant text-xl font-semibold text-primary mb-4">
                          Brewing Instructions
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {brewingInstructions}
                        </p>
                        
                        <div className="mt-4 p-4 bg-cream/50 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <strong>Pro Tip:</strong> For a stronger flavor, increase steeping time by 1-2 minutes. 
                            Avoid boiling water as it can make the tea bitter.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-cormorant text-xl font-semibold text-primary">
                        Customer Reviews
                      </h3>
                      <Button variant="outline" size="sm">Write a Review</Button>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        { name: 'Aida K.', rating: 5, date: '2 weeks ago', review: 'Absolutely love this blend! The perfect balance of flavors.' },
                        { name: 'Dmitri P.', rating: 5, date: '1 month ago', review: 'High quality tea with authentic taste. Will definitely order again.' },
                        { name: 'Sarah C.', rating: 4, date: '1 month ago', review: 'Great tea, lovely packaging. Shipping was fast too.' }
                      ].map((review, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <span className="font-medium text-primary">{review.name}</span>
                              <div className="flex ml-2">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{review.review}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <section>
            <h2 className="font-cormorant text-3xl font-bold text-primary text-center mb-8">
              You Might Also Like
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Card key={product.id} className="hover-lift cursor-pointer">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-cormorant text-lg font-semibold text-primary mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">₸{product.price}</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
