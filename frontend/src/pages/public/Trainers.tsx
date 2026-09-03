import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Trainers = () => {
  const trainers = [
    { name: "Arun Kumar", spec: "Strength & Conditioning", exp: "8 Years", rating: 5.0, img: "https://images.unsplash.com/photo-1567013127542-490d732e519a?auto=format&fit=crop&q=80&w=800" },
    { name: "Priya Sharma", spec: "HIIT & Weight Loss", exp: "5 Years", rating: 4.9, img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" },
    { name: "Vikram Singh", spec: "Bodybuilding", exp: "12 Years", rating: 5.0, img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800" },
    { name: "Neha Patel", spec: "Yoga & Mobility", exp: "6 Years", rating: 4.8, img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
          >
            Expert <span className="text-orange-500">Coaches</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Train with industry-leading professionals dedicated to helping you achieve your ultimate physique.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.img} 
                  alt={trainer.name} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                  <div className="flex items-center text-orange-500 text-sm font-bold">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    {trainer.rating}
                  </div>
                </div>
                <p className="text-orange-500 text-sm font-semibold mb-4">{trainer.spec}</p>
                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-6">
                  <Award className="h-4 w-4" /> {trainer.exp} Experience
                </div>
                <Link 
                  to={`/contact?trainer=${encodeURIComponent(trainer.name)}`}
                  className="block text-center w-full rounded-md bg-zinc-800 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
                >
                  BOOK SESSION
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;