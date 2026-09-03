import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Transformations = () => {
  const stories = [
    { name: "Rahul S.", weight: "82 kg → 70 kg", loss: "12 kg lost", duration: "16 weeks", imgBefore: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600", imgAfter: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600" },
    { name: "Sarah M.", weight: "75 kg → 63 kg", loss: "12 kg lost", duration: "20 weeks", imgBefore: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=600", imgAfter: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600" },
    { name: "Amit P.", weight: "65 kg → 78 kg", loss: "13 kg muscle gained", duration: "24 weeks", imgBefore: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600", imgAfter: "https://images.unsplash.com/photo-1567013127542-490d732e519a?auto=format&fit=crop&q=80&w=600" }
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
            Real <span className="text-orange-500">Results</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            See what happens when dedication meets expert guidance. Your transformation starts here.
          </motion.p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {["All", "Weight Loss", "Muscle Gain", "Strength"].map((filter, i) => (
            <button key={i} className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${i === 0 ? 'bg-orange-500 text-white' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-square flex">
                <div className="w-1/2 h-full relative border-r border-zinc-950">
                  <img src={story.imgBefore} alt="Before" className="w-full h-full object-cover grayscale opacity-60" />
                  <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur text-xs font-bold text-white px-3 py-1 rounded-full">BEFORE</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <img src={story.imgAfter} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-orange-500 text-xs font-bold text-white px-3 py-1 rounded-full shadow-lg">AFTER</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <Camera className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{story.name}</h3>
                <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  {story.weight}
                </div>
                <div className="flex justify-between text-zinc-400 text-sm px-4">
                  <span>{story.loss}</span>
                  <span>{story.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transformations;