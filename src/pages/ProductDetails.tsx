import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, MapPin, Share2, ShieldCheck, ShoppingCart, MessageCircle, Info } from 'lucide-react';
import { Product } from '../types';
import { useAppContext } from '../context';
import { toast } from 'sonner';

interface ProductDetailsProps {
  product: Product;
  onNavigate: (page: string) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onNavigate }) => {
  const { addToCart } = useAppContext();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to your cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => onNavigate('marketplace')}
        className="flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to search</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-sm"
          >
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-indigo-600 transition-all">
                <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                {product.condition}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{product.title}</h1>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <span className="text-sm font-bold text-slate-900">Location</span>
                <p className="text-sm text-slate-500">{product.location}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <span className="text-sm font-bold text-slate-900">Description</span>
                <p className="text-sm text-slate-500 leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Seller Info */}
          <div className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl">
            <div className="flex items-center space-x-4">
              <img src={product.seller.avatar} alt={product.seller.name} className="w-12 h-12 rounded-full border-2 border-indigo-100" />
              <div>
                <h4 className="font-bold text-slate-900">{product.seller.name}</h4>
                <div className="flex items-center text-xs text-amber-500">
                  <Star className="w-3 h-3 fill-current mr-1" />
                  <span>{product.seller.rating} / 5.0 rating</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
              View Profile
            </button>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Buy Now</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg">
              <MessageCircle className="w-5 h-5" />
              <span>Contact Seller</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-emerald-600 text-sm font-medium">
            <ShieldCheck className="w-5 h-5" />
            <span>Buyer Protection Program Enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;