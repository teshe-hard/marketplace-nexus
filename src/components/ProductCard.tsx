import React from 'react';
import { Star, MapPin, Heart, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useAppContext } from '../context';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useAppContext();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white text-slate-600 hover:text-rose-500 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold uppercase tracking-wider text-indigo-600">
            {product.condition}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-slate-800 line-clamp-1 flex-1 mr-2">{product.title}</h3>
          <span className="text-lg font-bold text-indigo-600">${product.price}</span>
        </div>
        
        <div className="flex items-center text-slate-500 text-xs mb-4">
          <MapPin className="w-3 h-3 mr-1" />
          <span>{product.location}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center space-x-2">
            <img src={product.seller.avatar} alt={product.seller.name} className="w-6 h-6 rounded-full" />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-700 leading-none">{product.seller.name}</span>
              <div className="flex items-center text-[10px] text-amber-500 mt-0.5">
                <Star className="w-2.5 h-2.5 fill-current mr-0.5" />
                <span>{product.seller.rating}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={handleAddToCart}
            className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;