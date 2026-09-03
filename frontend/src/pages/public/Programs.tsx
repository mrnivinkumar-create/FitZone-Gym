import { motion } from 'framer-motion';
import { ArrowRight, Flame, Heart, Shield, Zap, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    { title: "Strength Training", icon: Shield, diff: "Intermediate", dur: "12 Weeks", desc: "Build strength, power and muscle with heavy compound lifts. Focus on progressive overload." },
    { title: "Weight Loss", icon: Flame, diff: "Beginner", dur: "8 Weeks", desc: "Structured workouts and nutrition for sustainable fat loss and cardiovascular health." },
    { title: "Muscle Building", icon: Zap, diff: "Advanced", dur: "16 Weeks", desc: "Progressive training designed specifically for hypertrophy and muscle isolation." },
    { title: "Functional Training", icon: Activity, diff: "All Levels", dur: "Ongoing", desc: "Improve mobility, balance, coordination and real-world strength for daily life." },
    { title: "HIIT", icon: Heart, diff: "Intermediate", dur: "4 Weeks", desc: "High-intensity workouts for maximum cardiovascular fitness and calorie burning." },
    { title: "Personal Training", icon: Users, diff: "Custom", dur: "Custom", desc: "One-to-one coaching with an expert trainer tailored entirely to your specific goals." }
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
            Elite <span className="text-orange-500">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Scientifically backed training protocols designed to push your limits and guarantee results.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-colors"
            >
              <div className="p-8">
                <div className="h-14 w-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <prog.icon className="h-7 w-7 text-orange-500" />
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">{prog.diff}</span>
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-500">{prog.dur}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{prog.title}</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">{prog.desc}</p>
                <Link to="/membership" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors">
                  START PROGRAM <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;