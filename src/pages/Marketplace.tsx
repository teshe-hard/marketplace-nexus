import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, ChevronDown, LayoutGrid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { SAMPLE_PRODUCTS } from '../data';
import { Product } from '../types';

interface MarketplaceProps {
  onNavigate: (page: string, product?: Product) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports', 'Vehicles'];
  
  const filteredProducts = filter === 'All' 
    ? SAMPLE_PRODUCTS 
    : SAMPLE_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search & Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Explore Items</h1>
          <p className="text-slate-500">{filteredProducts.length} items found for your search</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg ${view === 'grid' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setView('list')}
              className={`p-2 rounded-lg ${view === 'list' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 space-y-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === cat ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Price Range</h3>
            <div className="space-y-4">
              <input type="range" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
              <div className="flex justify-between text-xs font-medium text-slate-500">
                <span>$0</span>
                <span>$10,000+</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Condition</h3>
            <div className="space-y-2">
              {['New', 'Like New', 'Good', 'Fair'].map((c) => (
                <label key={c} className="flex items-center space-x-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900">{c}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={(p) => onNavigate('productDetails', p)}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
                <SlidersHorizontal className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No results found</h3>
              <p className="text-slate-500 max-w-xs mx-auto">Try adjusting your filters or search terms to find what you're looking for.</p>
              <button 
                onClick={() => setFilter('All')}
                className="mt-6 text-indigo-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;