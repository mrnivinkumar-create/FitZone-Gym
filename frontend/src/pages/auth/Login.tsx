import { motion } from 'framer-motion';
import { Dumbbell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-zinc-950 min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-8"
      >
        <div className="text-center mb-8">
          <Dumbbell className="h-10 w-10 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight">Welcome Back</h2>
          <p className="text-sm text-zinc-400 mt-2">Sign in to access your dashboard</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="member@fitzone.com" 
            />
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider">Password</label>
              <Link to="#" className="text-xs text-orange-500 hover:text-orange-400 font-semibold">Forgot Password?</Link>
            </div>
            <input 
              type="password" 
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="••••••••" 
            />
          </div>
          
          <div className="flex items-center">
            <input id="remember" type="checkbox" className="h-4 w-4 rounded border-zinc-800 bg-zinc-950 text-orange-500 focus:ring-orange-500" />
            <label htmlFor="remember" className="ml-2 block text-sm text-zinc-400">Remember me for 30 days</label>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-2 rounded-md bg-orange-500 py-4 font-bold text-white hover:bg-orange-400 transition-colors">
            SIGN IN <ArrowRight className="h-5 w-5" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-400">
          Not a member yet?{' '}
          <Link to="/register" className="font-bold text-orange-500 hover:text-orange-400 transition-colors">
            Join FitZone
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;