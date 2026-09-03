const Privacy = () => {
  return (
    <div className="bg-zinc-950 min-h-screen pt-12 pb-24 text-zinc-400">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold uppercase text-white tracking-tight mb-8">Privacy Policy</h1>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6 leading-relaxed">
          <p>At FitZone Gym, we take your privacy seriously. This policy describes how we collect, use, and protect your personal data.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">Information Collection</h2>
          <p>We collect information you provide directly to us when registering, booking trainers, or using our AI Coach, including biometric data voluntarily submitted to calculators.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">Data Security</h2>
          <p>Your payment information is securely processed via Razorpay and never stored on our servers. User passwords and data are encrypted.</p>
          <p className="mt-8 text-sm text-zinc-500">Last updated: October 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;