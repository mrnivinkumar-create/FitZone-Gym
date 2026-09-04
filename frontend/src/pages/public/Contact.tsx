import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from "react";
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const trainerParam = searchParams.get('trainer');

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: trainerParam ? `Hi, I would like to book a personal training session with ${trainerParam}.` : ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.first_name.trim() || !formData.last_name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      setStatus('success');
      setFormData({ first_name: '', last_name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact error:', error);
      setStatus('error');
      setErrorMessage('Unable to send your message. Please try again.');
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
          >
            Get In <span className="text-orange-500">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Have questions about memberships or our facilities? We're here to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-green-500">Thank you! Your message has been sent successfully. Our team will contact you soon.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-red-500">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">First Name *</label>
                  <input 
                    type="text" 
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors disabled:opacity-50" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors disabled:opacity-50" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors disabled:opacity-50" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">Message *</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors resize-none disabled:opacity-50"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full flex justify-center items-center rounded-md bg-orange-500 py-4 font-bold text-white hover:bg-orange-400 transition-colors disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    SENDING...
                  </>
                ) : (
                  'SEND MESSAGE'
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex items-start gap-6">
              <div className="bg-orange-500/10 p-4 rounded-xl shrink-0">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Our Location</h3>
                <p className="text-zinc-400 leading-relaxed">
                  61,tamilan street<br />
                  New York, NY 10001<br />
                  United States
                </p>
               <a
                href="https://maps.app.goo.gl/HnkTTJM7uiJYeByMA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-orange-500 text-sm font-bold hover:text-orange-400"
               >
  GET DIRECTIONS →
</a>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex items-start gap-6">
              <div className="bg-orange-500/10 p-4 rounded-xl shrink-0">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Mon-Fri: 6am - 10pm<br />
                  Sat-Sun: 8am - 8pm<br />
                  <span className="text-white mt-2 inline-block">+91 9344517223</span>
                </p>
                <a
                 href="https://wa.me/919344517212?text=Hi%20FitZone,%20I%20would%20like%20to%20know%20more%20about%20your%20gym."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-4 inline-block text-orange-500 text-sm font-bold hover:text-orange-400"
                >
                CHAT ON WHATSAPP →
                </a>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex items-start gap-6">
              <div className="bg-orange-500/10 p-4 rounded-xl shrink-0">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>

<p className="text-zinc-400 leading-relaxed">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@fitzone.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-500 transition-colors"
  >
    support@fitzone.com
  </a>
  <br />

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@fitzone.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-500 transition-colors"
  >
    careers@fitzone.com
  </a>
</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;