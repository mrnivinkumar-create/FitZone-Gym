import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { title: "The Ultimate Guide to Progressive Overload", excerpt: "Learn how to effectively increase your training volume to force muscle growth and bust through plateaus.", category: "Training", date: "Oct 15, 2026", author: "Coach Arun" },
    { title: "Macro-Tracking vs. Intuitive Eating", excerpt: "Which nutrition strategy is best for your goals? We break down the pros and cons of tracking every calorie.", category: "Nutrition", date: "Oct 10, 2026", author: "Priya Sharma" },
    { title: "5 Mobility Exercises You Should Do Daily", excerpt: "Prevent injuries and improve your lifting technique by incorporating these 5 simple movements into your routine.", category: "Recovery", date: "Oct 05, 2026", author: "Neha Patel" }
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
            Fitness <span className="text-orange-500">Journal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Expert insights, training tips, and nutrition advice to fuel your progress.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="aspect-[16/9] bg-zinc-800 overflow-hidden">
                {/* Placeholder for blog image */}
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700 transition-transform duration-500 group-hover:scale-110">
                   Image
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider">
                  <span className="text-orange-500">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  <Link to="#">{post.title}</Link>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs font-medium text-zinc-500 pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</div>
                  <div className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;