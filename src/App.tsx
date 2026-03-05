import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { AppProvider, useAppContext } from './context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import { Product } from './types';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { user } = useAppContext();

  // Simple router logic
  const navigate = (page: string, product?: Product) => {
    if ((page === 'dashboard' || page === 'sell') && !user) {
      setCurrentPage('auth');
      return;
    }
    
    if (product) setSelectedProduct(product);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'marketplace':
        return <Marketplace onNavigate={navigate} />;
      case 'productDetails':
        return selectedProduct ? <ProductDetails product={selectedProduct} onNavigate={navigate} /> : <Marketplace onNavigate={navigate} />;
      case 'dashboard':
        return <Dashboard />;
      case 'auth':
        return <Auth onSuccess={() => setCurrentPage('dashboard')} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Toaster position="top-right" richColors />
      <Navbar onNavigate={navigate} />
      <main className="transition-all duration-300">
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-2">
                   <span className="text-white text-xs font-bold">MM</span>
                </div>
                <span className="text-lg font-bold text-slate-900">MarketMate</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">The world's fastest growing community for high-quality items and secure transactions.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><button onClick={() => navigate('marketplace')} className="hover:text-indigo-600">All Items</button></li>
                <li><button className="hover:text-indigo-600">New Arrivals</button></li>
                <li><button className="hover:text-indigo-600">Featured</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><button className="hover:text-indigo-600">Help Center</button></li>
                <li><button className="hover:text-indigo-600">Safety Guidelines</button></li>
                <li><button className="hover:text-indigo-600">Terms of Service</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><button className="hover:text-indigo-600">About Us</button></li>
                <li><button className="hover:text-indigo-600">Careers</button></li>
                <li><button className="hover:text-indigo-600">Contact</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>© 2023 MarketMate Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="hover:text-indigo-600 transition-colors">Privacy Policy</button>
              <button className="hover:text-indigo-600 transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;