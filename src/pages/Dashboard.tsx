import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, ShoppingBag, MessageSquare, Heart, Settings, Plus, DollarSign, Package, TrendingUp } from 'lucide-react';
import { useAppContext } from '../context';
import { SAMPLE_PRODUCTS } from '../data';

const Dashboard: React.FC = () => {
  const { user } = useAppContext();
  const [activeTab, setActiveTab] = useState('listings');

  const stats = [
    { label: 'Total Sales', value: '$2,450', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Active Listings', value: '12', icon: Package, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Views', value: '1.2k', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  const myProducts = SAMPLE_PRODUCTS.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-indigo-100 rounded-full border-4 border-white shadow-sm overflow-hidden">
                <img src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'} alt="Avatar" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{user?.name || 'John Doe'}</h3>
                <p className="text-sm text-slate-500">Member since 2023</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              {[
                { id: 'listings', label: 'My Listings', icon: LayoutDashboard },
                { id: 'orders', label: 'My Orders', icon: ShoppingBag },
                { id: 'messages', label: 'Messages', icon: MessageSquare },
                { id: 'saved', label: 'Saved Items', icon: Heart },
                { id: 'settings', label: 'Settings', icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === item.id 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-slate-900">Seller Dashboard</h1>
            <button className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md">
              <Plus className="w-5 h-5" />
              <span>Create New Listing</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Active Listings Table/Grid */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Your Active Listings</h3>
              <button className="text-indigo-600 text-sm font-bold hover:underline">View All</button>
            </div>
            
            <div className="divide-y divide-slate-50">
              {myProducts.map((product) => (
                <div key={product.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <img src={product.image} alt={product.title} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{product.title}</h4>
                      <p className="text-xs text-slate-500">{product.category} • Listed on {product.createdAt}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="font-bold text-indigo-600 text-lg">${product.price}</span>
                    <div className="flex items-center space-x-2">
                      <button className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-indigo-600 transition-colors">Edit</button>
                      <button className="text-[10px] font-bold uppercase tracking-wider text-rose-400 hover:text-rose-600 transition-colors">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {myProducts.length === 0 && (
              <div className="p-12 text-center text-slate-500">
                You haven't listed anything yet.
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
             <h3 className="font-bold text-slate-900 mb-6">Recent Messages</h3>
             <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-transparent hover:border-indigo-100 transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-slate-200" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm">Potential Buyer #{i}</span>
                        <span className="text-[10px] text-slate-400">2h ago</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 italic">"Hi! Is this item still available? I'm interested..."</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;