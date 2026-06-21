import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Loader2 } from 'lucide-react';

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Memberikan efek delay agar interaktif dan memuaskan secara visual
    setTimeout(() => {
      const text = `Halo Danial,%0A%0ASaya *${formData.name}* (${formData.email}).%0A%0A${formData.message}`;
      window.open(`https://wa.me/62895704121560?text=${text}`, '_blank');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold tracking-widest uppercase mb-2">{t.contact.title}</p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white max-w-2xl mx-auto">
            {t.contact.subtitle}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-zinc-500 tracking-widest">{t.contact.sysStatus}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">{t.contact.uplink}</h3>

              <div className="space-y-6">
                <a href="mailto:danialgibran0@gmail.com" className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 mb-1">{t.contact.emailLabel}</p>
                    <p className="text-zinc-900 dark:text-white font-medium group-hover:text-orange-500 transition-colors">danialgibran0@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/62895704121560" target="_blank" rel="noreferrer" className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 mb-1">{t.contact.waLabel}</p>
                    <p className="text-zinc-900 dark:text-white font-medium group-hover:text-orange-500 transition-colors">+62 895-7041-21560</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center space-x-2">
              <Terminal size={20} className="text-orange-500" />
              <span>{t.contact.formTitle}</span>
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl py-4 px-4 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl py-4 px-4 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                />
              </div>
              <div className="relative">
                <textarea 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder={t.contact.msgPlaceholder}
                  className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl py-4 px-4 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                ></textarea>
              </div>

              <button disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-orange-500/20 group mt-2">
                <span className="tracking-widest">{isSubmitting ? 'MENGIRIM...' : t.contact.btnSubmit}</span>
                {isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

// Simple Terminal Icon for the form title
const Terminal = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

export default Contact;
