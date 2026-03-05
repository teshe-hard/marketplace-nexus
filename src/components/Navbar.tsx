import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context';

const Navbar: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, user } = useAppContext();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mr-2">
              <ShoppingBag className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              MarketMate
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('marketplace')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Marketplace</button>
            <button onClick={() => onNavigate('dashboard')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Sell</button>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-64 pl-10 pr-3 py-2 border border-slate-200 rounded-full text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Search items..."
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
              <ShoppingBag className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                  {cart.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="flex items-center space-x-2 p-1 pl-3 pr-3 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
            >
              <span className="text-sm font-medium text-slate-700">{user?.name || 'Account'}</span>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
                {user?.avatar ? (
                  <img src={user.avatar} alt="User" />
                ) : (
                  <User className="w-5 h-5 text-slate-400" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <button onClick={() => { onNavigate('marketplace'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600">Marketplace</button>
              <button onClick={() => { onNavigate('dashboard'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600">Sell an Item</button>
              <div className="px-3 py-2">
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm"
                  placeholder="Search..."
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;