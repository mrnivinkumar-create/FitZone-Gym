const Terms = () => {
  return (
    <div className="bg-zinc-950 min-h-screen pt-12 pb-24 text-zinc-400">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold uppercase text-white tracking-tight mb-8">Terms of Service</h1>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6 leading-relaxed">
          <p>Welcome to FitZone Gym. By accessing our platform or facility, you agree to be bound by these terms.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Membership & Access</h2>
          <p>Memberships are non-transferable. You must present your digital access pass to enter the facility.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Facility Rules</h2>
          <p>All members must adhere to gym etiquette, including racking weights, using towels, and respecting other members.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. AI Fitness Coach Liability</h2>
          <p>Pulse AI provides general fitness and nutritional guidance, not medical advice. Consult a physician before starting any new fitness program.</p>
          <p className="mt-8 text-sm text-zinc-500">Last updated: October 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;