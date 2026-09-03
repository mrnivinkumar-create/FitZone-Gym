import { motion } from 'framer-motion';
import { Dumbbell, Target, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-zinc-950 min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
          >
            About <span className="text-orange-500">FitZone</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            More than just a gym. We are a community dedicated to building stronger bodies and sharper minds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Our Mission", icon: Target, desc: "To provide world-class facilities and expert guidance to help our members achieve their absolute physical potential." },
            { title: "The Facility", icon: Dumbbell, desc: "10,000 sq ft of premium strength equipment, dedicated functional zones, and luxury recovery facilities." },
            { title: "Our Legacy", icon: Trophy, desc: "Over 10 years of transforming lives, setting industry standards, and building an unstoppable community." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center"
            >
              <div className="h-16 w-16 mx-auto bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Facilities Preview */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white uppercase mb-6">Premium Equipment. Elite Environment.</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                FitZone is equipped with industry-leading machinery carefully selected for optimal biomechanics and results. From our dedicated free-weight compound section to our high-tech cardio zone, every inch of our facility is designed for performance.
              </p>
              <ul className="space-y-4">
                {['Olympic Lifting Platforms', 'Custom Functional Rig', 'Dedicated Recovery Zone (Sauna/Ice)', 'Luxury Locker Rooms'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-800 aspect-square lg:aspect-auto">
              {/* Image Placeholder */}
              <div className="w-full h-full object-cover bg-zinc-800 flex items-center justify-center text-zinc-700 font-bold">
                 Facility Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;