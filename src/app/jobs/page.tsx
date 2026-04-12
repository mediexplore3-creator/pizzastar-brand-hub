'use client';

import { motion } from 'framer-motion';
import { Briefcase, Heart, Rocket, Coffee } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    title: "Senior Artisanal Pizzaiolo",
    location: "Mumbai, MH",
    type: "Full-Time",
    desc: "Responsible for leading our wood-fired kitchen and mentoring junior chefs in the art of cold fermentation."
  },
  {
    title: "Brand Storyteller (Social Media)",
    location: "Remote / Multiple",
    type: "Full-Time",
    desc: "Help us share the fusion heritage of Pizza Star across all digital platforms through visual storytelling."
  },
  {
    title: "Delivery Star (Rider)",
    location: "Delhi, DL",
    type: "Flexible",
    desc: "The final link in our flavor chain. Ensure our artisanal creations reach customers in pristine condition."
  }
];

export default function JobsPage() {
  return (
    <div className="pt-40 pb-20 max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-20">
         <h1 className="font-display text-5xl md:text-7xl font-black text-pizza-dark dark:text-white">
           Join the <span className="gradient-text">Star Team</span>
         </h1>
         <p className="text-pizza-dark/60 dark:text-white/60 max-w-2xl mx-auto text-lg">
           We are not just hiring employees; we are looking for passionate individuals who want to redefine the Indian culinary landscape.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
         {[
           { icon: <Heart />, title: "Culture of Love", desc: "We believe in respect, diversity, and a shared love for great food." },
           { icon: <Rocket />, title: "Rapid Growth", desc: "Join India's fastest-growing premium pizza brand." },
           { icon: <Coffee />, title: "Work-Life Balance", desc: "We prioritize the well-being and happiness of our team." },
           { icon: <Briefcase />, title: "Career Path", desc: "Clear roadmap for growth from the kitchen to management." }
         ].map((perk, i) => (
           <div key={i} className="glass p-8 rounded-3xl space-y-4 hover:shadow-xl transition-shadow">
              <div className="text-pizza-primary">{perk.icon}</div>
              <h3 className="font-bold text-lg">{perk.title}</h3>
              <p className="text-sm text-pizza-dark/60 dark:text-white/60 leading-relaxed">{perk.desc}</p>
           </div>
         ))}
      </div>

      <div className="space-y-8">
         <h2 className="text-3xl font-black text-pizza-dark dark:text-white mb-12">Open Opportunities</h2>
         <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-pizza-primary/5 transition-colors"
              >
                 <div className="space-y-4 text-center md:text-left">
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                       <span className="bg-pizza-primary/10 text-pizza-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{job.location}</span>
                       <span className="bg-pizza-dark/5 dark:bg-white/5 text-pizza-dark/40 dark:text-white/40 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{job.type}</span>
                    </div>
                    <h3 className="text-2xl font-black">{job.title}</h3>
                    <p className="text-sm text-pizza-dark/60 dark:text-white/60 max-w-xl">{job.desc}</p>
                 </div>
                 <Link href="/contact" className="btn-primary px-8 py-4 whitespace-nowrap">Apply Now</Link>
              </motion.div>
            ))}
         </div>
      </div>

      <div className="mt-32 text-center glass rounded-[3rem] p-16 space-y-6">
         <h3 className="text-3xl font-black">Don't see your dream role?</h3>
         <p className="text-pizza-dark/60">We are always on the lookout for stars. Send your portfolio or CV to us directly.</p>
         <Link href="/contact" className="inline-block text-pizza-primary font-black uppercase tracking-widest border-b-2 border-pizza-primary pb-1">careers@starpizzahub.com</Link>
      </div>
    </div>
  );
}
