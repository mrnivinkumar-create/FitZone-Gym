import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-zinc-950 min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <Dumbbell className="h-16 w-16 text-orange-500 mx-auto mb-6" />
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-zinc-300 mb-6">Page Not Found</h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist, was moved, or is temporarily unavailable. Let's get you back to your workout.
        </p>
        <Link to="/" className="inline-block rounded-md bg-orange-500 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-orange-400">
          RETURN HOME
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;