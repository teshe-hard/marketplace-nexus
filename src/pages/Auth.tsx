import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserPlus, Mail, Lock, User, Github, Chrome } from 'lucide-react';
import { useAppContext } from '../context';
import { toast } from 'sonner';

interface AuthProps {
  onSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { setUser } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: '1',
      name: 'Alex Rivera',
      email: 'alex@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      role: 'both'
    });
    toast.success(isLogin ? 'Welcome back!' : 'Account created successfully!');
    onSuccess();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden"
      >
        <div className="bg-indigo-600 p-8 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-2">{isLogin ? 'Welcome Back' : 'Join MarketMate'}</h2>
          <p className="text-indigo-100 opacity-80">{isLogin ? 'Sign in to access your dashboard' : 'Start buying and selling today'}</p>
        </div>

        <div className="p-8 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-xs font-bold text-indigo-600 hover:underline">Forgot Password?</button>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-500 font-bold">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-700">
              <Github className="w-5 h-5 text-slate-900" />
              <span>GitHub</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-700">
              <Chrome className="w-5 h-5 text-rose-500" />
              <span>Google</span>
            </button>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;