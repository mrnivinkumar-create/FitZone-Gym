import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { q: "What are your operating hours?", a: "We are open from 6:00 AM to 10:00 PM on weekdays, and 8:00 AM to 8:00 PM on weekends." },
    { q: "Can I freeze my membership?", a: "Yes, annual and half-yearly memberships can be frozen for up to 30 days once per billing cycle." },
    { q: "Do you offer personal training?", a: "Absolutely. We have elite certified personal trainers specializing in strength, weight loss, and mobility." },
    { q: "What is Pulse AI?", a: "Pulse AI is our proprietary 24/7 fitness assistant available to premium members for workout generation and nutrition advice." }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold uppercase text-white tracking-tight"
          >
            Frequently Asked <span className="text-orange-500">Questions</span>
          </motion.h1>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
              <p className="text-zinc-400">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;