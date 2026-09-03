import { motion } from 'framer-motion';
import { Activity, Dumbbell, Calendar, Flame, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemberDashboard = () => {
  return (
    <div className="bg-zinc-950 min-h-[calc(100vh-4rem)] pt-8 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-zinc-800 pb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-extrabold text-white uppercase tracking-tight"
            >
              Welcome Back, <span className="text-orange-500">Rahul</span>
            </motion.h1>
            <p className="text-zinc-400 mt-2">Here is your progress overview for today.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/ai-coach" className="inline-flex items-center gap-2 rounded-md bg-orange-500/10 text-orange-500 px-4 py-2 text-sm font-bold border border-orange-500/20 hover:bg-orange-500 hover:text-white transition-colors">
              <Activity className="h-4 w-4" /> PULSE AI COACH
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Plan", value: "Quarterly", icon: Trophy, color: "text-yellow-500" },
            { label: "Workouts This Month", value: "14", icon: Dumbbell, color: "text-orange-500" },
            { label: "Current Streak", value: "5 Days", icon: Flame, color: "text-red-500" },
            { label: "Next Session", value: "Tomorrow, 7AM", icon: Calendar, color: "text-blue-500" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-zinc-400 text-sm font-bold uppercase tracking-wider">{stat.label}</span>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Workout */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider">Today's Workout</h2>
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Leg Day</span>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Barbell Squats", sets: "4", reps: "8-10" },
                { name: "Leg Press", sets: "3", reps: "10-12" },
                { name: "Bulgarian Split Squats", sets: "3", reps: "10 per leg" },
                { name: "Calf Raises", sets: "4", reps: "15-20" }
              ].map((ex, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">{i + 1}</div>
                    <span className="font-semibold text-white">{ex.name}</span>
                  </div>
                  <div className="text-sm font-bold text-orange-500">
                    {ex.sets} Sets × {ex.reps}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 rounded-md bg-orange-500 py-4 font-bold text-white hover:bg-orange-400 transition-colors">
              START WORKOUT
            </button>
          </div>

          {/* Goals / Progress */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 border-b border-zinc-800 pb-4">Goal Progress</h2>
            
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-zinc-400">Current Weight</span>
                <span className="text-white font-bold">78 kg</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-zinc-400">Target Weight</span>
                <span className="text-white font-bold">72 kg</span>
              </div>
              <div className="w-full bg-zinc-950 rounded-full h-3 mt-4 border border-zinc-800 overflow-hidden">
                <div className="bg-orange-500 h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-xs text-orange-500 mt-2 text-right">40% Achieved</p>
            </div>

            <div className="space-y-4">
              <Link to="/calculators" className="block w-full rounded-md bg-zinc-950 border border-zinc-800 py-3 text-center text-sm font-bold text-zinc-300 hover:text-white transition-colors">
                UPDATE METRICS
              </Link>
              <Link to="/trainers" className="block w-full rounded-md bg-zinc-950 border border-zinc-800 py-3 text-center text-sm font-bold text-zinc-300 hover:text-white transition-colors">
                BOOK TRAINER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;