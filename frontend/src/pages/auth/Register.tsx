import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="bg-zinc-950 min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-8 md:p-12"
      >
        <div className="text-center mb-8">
          <Dumbbell className="h-10 w-10 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight">Become Unstoppable</h2>
          <p className="text-sm text-zinc-400 mt-2">Create your account to start your fitness journey</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">First Name</label>
              <input type="text" required className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Last Name</label>
              <input type="text" required className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
            <input type="email" required className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Phone Number</label>
            <input type="tel" required className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Password</label>
            <input type="password" required className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
            <p className="text-xs text-zinc-500 mt-2">Must be at least 8 characters</p>
          </div>

          <button type="button" className="w-full rounded-md bg-orange-500 py-4 font-bold text-white hover:bg-orange-400 transition-colors mt-8">
            CREATE ACCOUNT
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-400">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-orange-500 hover:text-orange-400 transition-colors">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;