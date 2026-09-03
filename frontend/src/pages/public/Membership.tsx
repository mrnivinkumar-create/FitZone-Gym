import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  const plans = [
    { name: "DAY PASS", price: "₹299", dur: "1 Day", features: ["Full Gym Access", "Group Classes", "Locker Room Access"] },
    { name: "MONTHLY", price: "₹1,499", dur: "1 Month", features: ["Full Gym Access", "1 Trainer Session", "Basic Progress Tracking", "Group Classes"] },
    { name: "QUARTERLY", price: "₹3,999", dur: "3 Months", popular: true, features: ["Full Gym Access", "3 Trainer Sessions", "Nutrition Consultation", "AI Coach Access", "Advanced Progress Tracking"] },
    { name: "HALF-YEARLY", price: "₹6,999", dur: "6 Months", features: ["Full Gym Access", "6 Trainer Sessions", "Monthly Nutrition Plan", "AI Coach Access", "Priority Booking"] },
    { name: "ANNUAL", price: "₹11,999", dur: "12 Months", features: ["Full Gym Access", "12 Trainer Sessions", "Weekly Nutrition Updates", "Unlimited AI Coach", "Bring a Guest (2x/month)"] },
    { name: "PREMIUM", price: "₹17,999", dur: "12 Months", features: ["Full Gym Access", "Unlimited Trainer Sessions", "Daily Nutrition Coaching", "Unlimited AI Coach", "VIP Locker", "Free Supplements"] }
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
            Membership <span className="text-orange-500">Plans</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your fitness journey. No hidden fees.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border ${plan.popular ? 'border-orange-500 bg-zinc-900 shadow-2xl shadow-orange-500/10' : 'border-zinc-800 bg-zinc-900/50'} p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-zinc-300 tracking-wider mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                </div>
                <p className="text-zinc-500 mt-2">for {plan.dur}</p>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/register" className={`w-full rounded-md py-4 text-center font-bold transition-colors ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-400' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}>
                CHOOSE PLAN
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 7-Day Trial Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-orange-600 to-orange-400 p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-4">Try Before You Commit</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">Claim your free 7-day trial pass. Experience the premium equipment, expert trainers, and vibrant community with zero risk.</p>
          <Link to="/contact" className="inline-block rounded-md bg-zinc-950 px-8 py-4 font-bold text-white transition-colors hover:bg-zinc-800">
            CLAIM MY FREE TRIAL
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Membership;