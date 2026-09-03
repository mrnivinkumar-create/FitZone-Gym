import { motion } from 'framer-motion';
import { Users, CreditCard, Activity, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="bg-zinc-950 min-h-[calc(100vh-4rem)] pt-8 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 border-b border-zinc-800 pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-white uppercase tracking-tight"
          >
            Admin <span className="text-orange-500">Overview</span>
          </motion.h1>
          <p className="text-zinc-400 mt-2">Manage gym operations, members, and revenue.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Members", value: "5,234", icon: Users, color: "text-blue-500" },
            { label: "Active Revenue (MTD)", value: "₹4,25,000", icon: CreditCard, color: "text-green-500" },
            { label: "Today's Check-ins", value: "312", icon: Activity, color: "text-orange-500" },
            { label: "New Trials", value: "28", icon: Calendar, color: "text-yellow-500" }
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

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Recent Registrations</h2>
            <button className="text-sm font-bold text-orange-500 hover:text-orange-400">VIEW ALL</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-400">
              <thead className="text-xs uppercase bg-zinc-950 text-zinc-500">
                <tr>
                  <th className="px-6 py-4 rounded-tl-lg">Member Name</th>
                  <th className="px-6 py-4">Plan</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 rounded-tr-lg">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Siddharth Rao", plan: "Annual", status: "Active", date: "Oct 24, 2026" },
                  { name: "Priya Menon", plan: "Quarterly", status: "Active", date: "Oct 24, 2026" },
                  { name: "Karan Singh", plan: "Trial", status: "Pending", date: "Oct 23, 2026" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{row.name}</td>
                    <td className="px-6 py-4">{row.plan}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;