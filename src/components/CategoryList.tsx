import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shirt, Home, Bike, Car, MoreHorizontal } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Smartphone, color: 'bg-blue-50 text-blue-600' },
  { name: 'Fashion', icon: Shirt, color: 'bg-pink-50 text-pink-600' },
  { name: 'Home', icon: Home, color: 'bg-orange-50 text-orange-600' },
  { name: 'Sports', icon: Bike, color: 'bg-green-50 text-green-600' },
  { name: 'Vehicles', icon: Car, color: 'bg-purple-50 text-purple-600' },
  { name: 'More', icon: MoreHorizontal, color: 'bg-slate-50 text-slate-600' },
];

const CategoryList: React.FC = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((cat, idx) => (
        <motion.button
          key={cat.name}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center min-w-[100px] group"
        >
          <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center mb-2 transition-all group-hover:shadow-lg`}>
            <cat.icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold text-slate-600">{cat.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryList;