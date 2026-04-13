'use client';

import { motion } from 'framer-motion';
import { Smartphone, Download, ShieldCheck, Zap, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  { icon: <Zap size={24} />, title: "Instant Access", desc: "Browse our full menu and blog content in real-time with zero lag." },
  { icon: <ShieldCheck size={24} />, title: "Secure Downloads", desc: "Our APK and App Store versions are verified for maximum security." },
  { icon: <Globe size={24} />, title: "Regional Updates", desc: "Get specific content and offers tailored for your city." }
];

export default function DownloadClient() {
  return (
    <div className="pt-28 md:pt-32 pb-12 md:pb-20 max-w-6xl mx-auto px-6 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
             <span className="bg-pizza-primary/10 text-pizza-primary text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-pizza-primary/20">Mobile Experience</span>
             <h1 className="font-display text-4xl md:text-7xl font-black text-white leading-[1.1]">
               Pizza Star in Your <span className="gradient-text">Pocket</span>
             </h1>
             <p className="text-white/60 max-w-xl text-base md:text-lg leading-relaxed font-medium">
               Experience the Star of Flavor anywhere. Our mobile app is designed for speed, beauty, and the ultimate pizza discovery journey.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
             <Link 
               href="#" 
               className="hover:scale-105 transition-transform shadow-2xl"
               aria-label="Download on the App Store"
             >
                <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width={180} height={54} className="h-12 md:h-14 w-auto" />
             </Link>
             <Link 
               href="#" 
               className="hover:scale-105 transition-transform shadow-2xl"
               aria-label="Get it on Google Play"
             >
                <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" width={180} height={54} className="h-12 md:h-14 w-auto" />
             </Link>
          </div>

          <div className="pt-6 border-t border-white/5">
             <Link 
               href="https://github.com/mediexplore3-creator/star-pizza/releases/latest" 
               className="flex items-center gap-4 text-white/60 hover:text-pizza-primary transition-colors group"
             >
                <div className="h-12 w-12 rounded-full bg-pizza-primary/5 flex items-center justify-center group-hover:bg-pizza-primary group-hover:text-white transition-all">
                   <Download size={20} />
                </div>
                <div>
                   <p className="text-sm font-black text-pink-500 underline decoration-pink-500/30 underline-offset-4">Download APK Directly</p>
                   <p className="text-xs font-medium text-amber-500 opacity-90 italic">Version 2.4.0 (Recommended for Android)</p>
                </div>
             </Link>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative flex justify-center lg:justify-end py-10"
        >
           <div className="relative z-10 w-full max-w-[280px] md:max-w-sm glass p-3 md:p-4 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl rotate-2">
              <div className="relative aspect-[9/19.5] w-full rounded-[2.2rem] md:rounded-[2.8rem] overflow-hidden bg-pizza-dark group">
                 <Image 
                   src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070" 
                   alt="App Preview" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-pizza-dark/90 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                    <div className="h-8 w-8 md:h-10 md:w-10 bg-pizza-primary rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-center justify-center font-bold text-lg md:text-xl">S</div>
                    <h3 className="text-xl md:text-2xl font-black italic">Star App</h3>
                    <p className="text-[10px] md:text-xs opacity-70">Experience the crunch in 4K.</p>
                 </div>
              </div>
           </div>
           
           {/* Decorative Elements */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[140%] h-full md:h-[140%] bg-pizza-primary/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />
           <div className="absolute bottom-5 -left-5 md:bottom-10 md:-left-10 glass p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                 <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-green-500/20 text-green-500 flex items-center justify-center"><ShieldCheck size={18}/></div>
                 <div>
                    <p className="text-[8px] md:text-[10px] font-black uppercase text-white/40">Security</p>
                    <p className="text-[10px] md:text-xs font-bold text-white">Verified Package</p>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>

      <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
         {features.map((f, i) => (
           <div key={i} className="space-y-4">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-pizza-primary/10 flex items-center justify-center text-pizza-primary">
                 {f.icon}
              </div>
              <h3 className="text-lg md:text-xl font-black text-white">{f.title}</h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed font-medium">
                {f.desc}
              </p>
           </div>
         ))}
      </div>

      <div className="mt-20 md:mt-32 glass rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 border border-pizza-primary/20 bg-pizza-primary/5">
         <div className="space-y-4 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white">Scan to Download</h2>
            <p className="text-white/60 text-base md:text-lg">
              Quickly install Pizza Star by scanning this QR code with your smartphone camera. No account required to browse.
            </p>
         </div>
         <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl md:rotate-3 relative group shrink-0">
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-pizza-primary text-white text-[8px] md:text-[10px] font-black px-3 md:px-4 py-1.5 md:py-2 rounded-full uppercase tracking-widest shadow-lg z-10">Scan Me</div>
            <div className="h-32 w-32 md:h-40 md:w-40 relative">
               <svg viewBox="0 0 100 100" className="w-full h-full text-black" aria-hidden="true">
                  <path d="M0,0 h30 v10 h-20 v20 h-10 Z M70,0 h30 v30 h-10 v-20 h-20 Z M0,70 v30 h30 v-10 h-20 v-20 Z M100,100 v-30 h-10 v-20 h-20 v10 h10 v10 Z" fill="currentColor"/>
                  <rect x="20" y="20" width="15" height="15" fill="currentColor"/>
                  <rect x="65" y="20" width="15" height="15" fill="currentColor"/>
                  <rect x="20" y="65" width="15" height="15" fill="currentColor"/>
                  <rect x="45" y="45" width="10" height="10" fill="currentColor"/>
               </svg>
            </div>
         </div>
      </div>
    </div>
  );
}
