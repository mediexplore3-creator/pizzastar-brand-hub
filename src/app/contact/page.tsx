'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const newErrors: Record<string, string> = {};
    if (!data.get('name')) newErrors.name = 'Name is required';
    const email = data.get('email') as string;
    if (!email || !email.includes('@')) newErrors.email = 'Valid email is required';
    if (!data.get('message')) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 2000);
  };

  return (
    <div className="pt-40 pb-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
           <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-7xl font-black text-white">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                Have a recipe idea? Want to collaborate? Or just want to talk about your favorite fusion toppings? We are here for it.
              </p>
           </div>

           <div className="space-y-8">
              {[
                { icon: <Mail />, title: 'Email Us', desc: 'officialpizzastar@gmail.com', link: 'mailto:officialpizzastar@gmail.com' },
                { icon: <Phone />, title: 'Call Center', desc: '7252958000', link: 'tel:7252958000' },
                { icon: <MapPin />, title: 'Headquarters', desc: 'near Gurudwara, Rajound, Haryana 136044', link: '#' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                   <div className="h-12 w-12 rounded-xl bg-pizza-primary/10 flex items-center justify-center text-pizza-primary shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   <div>
                      <h3 className="font-bold text-lg text-white">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-[3.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
        >
            {formState === 'sent' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
              >
                 <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 bg-pizza-success/20 rounded-full"
                    />
                    <div className="h-24 w-24 rounded-full bg-pizza-success/10 text-pizza-success flex items-center justify-center relative z-10">
                       <Send size={44} />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <h2 className="text-4xl font-black text-white">Message Sent!</h2>
                    <p className="text-white/60 font-medium">We've received your inquiry and will get back to you within 24 hours.</p>
                 </div>
                 <button 
                   onClick={() => setFormState('idle')} 
                   className="px-8 py-3 rounded-xl bg-white text-pizza-dark font-bold text-sm hover:bg-pizza-primary hover:text-white transition-colors"
                 >
                    Send another message
                 </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-white/60">Full Name</label>
                       <input 
                         name="name"
                         placeholder="John Doe"
                         className={`w-full h-14 rounded-2xl bg-pizza-primary/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} px-6 focus:outline-none focus:ring-2 focus:ring-pizza-primary/20 transition-all text-white placeholder:text-white/20`} 
                       />
                       {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-white/60">Email Address</label>
                       <input 
                         name="email"
                         type="email"
                         placeholder="john@example.com"
                         className={`w-full h-14 rounded-2xl bg-pizza-primary/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} px-6 focus:outline-none focus:ring-2 focus:ring-pizza-primary/20 transition-all text-white placeholder:text-white/20`} 
                       />
                       {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.email}</p>}
                    </div>
                 </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-white/60">Subject</label>
                    <select className="w-full h-14 rounded-2xl bg-pizza-primary/5 border border-white/10 px-6 focus:outline-none focus:ring-2 focus:ring-pizza-primary/20 cursor-pointer text-white">
                       <option className="bg-[#1e1d1d] text-white">General Inquiry</option>
                       <option className="bg-[#1e1d1d] text-white">Blog Contribution</option>
                       <option className="bg-[#1e1d1d] text-white">Brand Partnership</option>
                       <option className="bg-[#1e1d1d] text-white">App Support</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-white/60">Your Message</label>
                    <textarea 
                      name="message"
                      rows={5} 
                      placeholder="How can we help?"
                      className={`w-full rounded-2xl bg-pizza-primary/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} p-6 focus:outline-none focus:ring-2 focus:ring-pizza-primary/20 resize-none transition-all text-white placeholder:text-white/20`}
                    ></textarea>
                    {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.message}</p>}
                 </div>
                <button disabled={formState === 'sending'} className="btn-primary w-full h-16 flex items-center justify-center gap-3">
                   {formState === 'sending' ? (
                     <div className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                     </div>
                   ) : (
                     <>
                        <Send size={18} />
                        <span>Send Message</span>
                     </>
                   )}
                </button>
             </form>
           )}
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 rounded-[3.5rem] overflow-hidden glass border border-white/5 shadow-2xl h-[500px] w-full relative"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.9245067318207!2d76.47903047532611!3d29.576799775162428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e03560deef0f9%3A0x876b2becf1ca9d8e!2sPizza%20Star%20Rajound!5e0!3m2!1sen!2sin!4v1776006491507!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) shadow(0 0 0 1px #1e1d1d)' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 dark:hover:invert-0 transition-all duration-1000"
        ></iframe>
      </motion.div>
    </div>
  );
}
