
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import OrderSuccess from "./pages/OrderSuccess";
import NotFound from "./pages/NotFound";
import CollectionsHerbal from './pages/CollectionsHerbal';
import CollectionsGreen from './pages/CollectionsGreen';
import CollectionsBlack from './pages/CollectionsBlack';
import CollectionsSpecial from './pages/CollectionsSpecial';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsConditions from './pages/TermsConditions';
import TrackOrder from './pages/TrackOrder';
import { WishlistProvider } from "./contexts/WishlistContext";
import Wishlist from './pages/Wishlist';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="product/:id" element={<ProductDetail />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="wishlist" element={<Wishlist />} />
                  <Route path="checkout" element={<Checkout />} />
                  {/* Collections */}
                  <Route path="collections/herbal" element={<CollectionsHerbal />} />
                  <Route path="collections/green" element={<CollectionsGreen />} />
                  <Route path="collections/black" element={<CollectionsBlack />} />
                  <Route path="collections/special" element={<CollectionsSpecial />} />
                  {/* Policies */}
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="return-policy" element={<ReturnPolicy />} />
                  <Route path="shipping-policy" element={<ShippingPolicy />} />
                  <Route path="terms-conditions" element={<TermsConditions />} />
                  {/* Track Order */}
                  <Route path="track-order" element={<TrackOrder />} />
                </Route>
                <Route path="auth" element={<Auth />} />
                <Route path="order-success" element={<OrderSuccess />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
