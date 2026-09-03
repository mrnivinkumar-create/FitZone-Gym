import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Membership', path: '/membership' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'AI Coach', path: '/ai-coach' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-orange-500" />
          <Link to="/" className="text-xl font-bold tracking-tight text-white uppercase">
            FitZone
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-zinc-300 hover:text-white'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Link to="/login" className="text-sm font-medium text-white hover:text-orange-500 transition-colors">
            Login
          </Link>
          <Link to="/register" className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 transition-colors">
            Join Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-300 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-800 bg-zinc-950"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block rounded-md px-3 py-2 text-base font-medium transition-colors ${isActive ? 'bg-zinc-800 text-orange-500' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-zinc-800 pt-4">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-800 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md bg-orange-500 px-3 py-2 text-center text-base font-medium text-white hover:bg-orange-400 transition-colors"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
