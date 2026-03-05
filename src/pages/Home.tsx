import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Heart } from 'lucide-react';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';
import { SAMPLE_PRODUCTS } from '../data';
import { Product } from '../types';

interface HomeProps {
  onNavigate: (page: string, product?: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden lg:rounded-[3rem] mt-0 lg:mt-6 mx-0 lg:mx-8 lg:max-w-7xl">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/attachments/62f29bad-9099-4ab5-a914-6b861d019353/1772703777594_image.png"
          alt="Teshe Marketplace Nexus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl text-white space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold border border-white/20 tracking-wider uppercase"
            >
              Welcome to the Future of Commerce
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter drop-shadow-2xl"
            >
              Teshe_Marketplace_Nexus
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl sm:text-2xl text-slate-100 font-light max-w-2xl mx-auto drop-shadow-md leading-relaxed"
            >
              The premium destination to discover unique treasures and connect with your community through seamless trading.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6"
            >
              <button 
                onClick={() => onNavigate('marketplace')}
                className="group w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-xl hover:shadow-indigo-500/40 active:scale-95 flex items-center justify-center gap-2"
              >
                Explore Marketplace <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('dashboard')}
                className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/30 rounded-2xl font-bold transition-all active:scale-95"
              >
                Start Selling
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Categories */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Shop by Category</h2>
              <p className="text-slate-500 mt-1">Browse our wide selection of items</p>
            </div>
            <button className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors flex items-center gap-2 group text-sm uppercase tracking-wider">
              See All Categories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <CategoryList />
        </section>

        {/* Featured Listings */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Featured Collections</h2>
              <p className="text-slate-500 mt-1">Hand-picked items for you</p>
            </div>
            <button 
              onClick={() => onNavigate('marketplace')}
              className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors flex items-center gap-2 group text-sm uppercase tracking-wider"
            >
              View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SAMPLE_PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={(p) => onNavigate('productDetails', p)}
              />
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-t border-slate-100 bg-slate-50/50 rounded-[3rem] px-10">
          <div className="flex flex-col items-center text-center space-y-6 group">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:shadow-xl transition-all group-hover:-translate-y-2">
              <Zap className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Lightning Fast</h3>
              <p className="text-slate-500 mt-3 leading-relaxed">List your items in seconds and get discovered by thousands of buyers instantly.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-6 group">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:shadow-xl transition-all group-hover:-translate-y-2">
              <Shield className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Trusted Security</h3>
              <p className="text-slate-500 mt-3 leading-relaxed">Shop with confidence using our secure payment gateway and verified seller program.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-6 group">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-rose-600 shadow-sm group-hover:shadow-xl transition-all group-hover:-translate-y-2">
              <Heart className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Vibrant Community</h3>
              <p className="text-slate-500 mt-3 leading-relaxed">Join millions of users in a thriving ecosystem built on trust and shared value.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;