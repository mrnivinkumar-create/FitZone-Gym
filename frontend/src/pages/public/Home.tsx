import { motion } from 'framer-motion';
import { ArrowRight, Activity, Brain, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/80 to-zinc-950 z-10" />
        
        {/* Abstract Background for Hero (Could be replaced with video/image later) */}
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center overflow-hidden">
           {/* Decorative blurred circles for modern look */}
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase">
              Train <span className="text-orange-500">Smarter.</span><br />
              Get Stronger.
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-300">
              Personalized training, expert coaching, nutrition and AI-powered fitness guidance — everything you need to transform your body and lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Link to="/register" className="group flex items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-orange-400">
                START YOUR JOURNEY
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/membership" className="flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-zinc-800">
                EXPLORE MEMBERSHIPS
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-500" />
              <span className="font-semibold text-white">5,000+</span> Members
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-500" />
              <span className="font-semibold text-white">25+</span> Expert Trainers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-orange-500" />
              <span className="font-semibold text-white">10+ Years</span> Experience
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-orange-500">4.9/5</span> Member Rating
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase text-white sm:text-4xl">Why Choose FitZone</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">Experience the next generation of fitness with our premium facilities, expert coaching, and AI-driven insights.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Trainers", desc: "Certified coaches who create personalized training plans.", icon: Users },
              { title: "Smart Training", desc: "Data-driven workouts designed around your goals.", icon: Activity },
              { title: "Nutrition Support", desc: "Personalized nutrition guidance and meal planning.", icon: CheckCircle2 },
              { title: "AI Fitness Coach", desc: "24/7 AI-powered assistance for workouts & progress.", icon: Brain },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl bg-zinc-900 border border-zinc-800 p-8 hover:border-orange-500/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Programs Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold uppercase text-white sm:text-4xl">Our Programs</h2>
              <p className="mt-4 text-zinc-400 max-w-xl">From strength building to fat loss, find the perfect program tailored to your goals.</p>
            </div>
            <Link to="/programs" className="mt-4 md:mt-0 flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors">
              View All Programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Strength Training", diff: "Intermediate", dur: "12 Weeks", desc: "Build strength, power and muscle with heavy compound lifts." },
              { title: "Weight Loss", diff: "Beginner", dur: "8 Weeks", desc: "Structured workouts and nutrition for sustainable fat loss." },
              { title: "Muscle Building", diff: "Advanced", dur: "16 Weeks", desc: "Progressive training designed specifically for hypertrophy." }
            ].map((prog, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="aspect-video bg-zinc-800 w-full" />
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">{prog.diff}</span>
                    <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-500">{prog.dur}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{prog.title}</h3>
                  <p className="text-zinc-400 mb-6">{prog.desc}</p>
                  <Link to="/programs" className="flex justify-center w-full rounded-md bg-zinc-800 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-orange-500">
                    VIEW PROGRAM
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold uppercase text-white sm:text-4xl">Choose Your Journey</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto mb-16">Flexible plans designed for every commitment level. Get started today.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "MONTHLY", price: "₹1,499", features: ["Full Gym Access", "1 Trainer Session", "Basic Progress Tracking"] },
              { name: "QUARTERLY", price: "₹3,999", popular: true, features: ["Full Gym Access", "3 Trainer Sessions", "Nutrition Plan", "AI Coach Access"] },
              { name: "ANNUAL", price: "₹11,999", features: ["Full Gym Access", "12 Trainer Sessions", "Advanced Analytics", "Priority Support"] }
            ].map((plan, i) => (
              <div key={i} className={`relative rounded-2xl border ${plan.popular ? 'border-orange-500 bg-zinc-900 shadow-2xl' : 'border-zinc-800 bg-zinc-900/50'} p-8 flex flex-col`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-zinc-300">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                </div>
                <ul className="mt-8 flex-1 space-y-4 text-left">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/membership" className={`mt-8 flex justify-center w-full rounded-md py-3 text-sm font-bold transition-colors ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-400' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}>
                  CHOOSE PLAN
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
