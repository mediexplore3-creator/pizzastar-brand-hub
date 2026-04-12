'use client';

import { motion } from 'framer-motion';
import { Home, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="space-y-12 max-w-2xl">
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="relative inline-block"
        >
           <div className="text-[12rem] font-black leading-none gradient-text opacity-10">404</div>
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl">🍕</span>
           </div>
        </motion.div>

        <div className="space-y-4">
          <h1 className="font-display text-5xl font-black text-white">A Lost Slice?</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            The page you are looking for might have been eaten, or it has moved to a new kitchen. Let us get you back to the flavor.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
           <Link href="/" className="btn-primary flex items-center gap-2">
              <Home size={20} />
              <span>Back to Home</span>
           </Link>
           <Link href="/blog" className="glass px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-pizza-primary/5 transition-colors">
              <Search size={20} />
              <span>Search Blog</span>
              <ArrowRight size={16} />
           </Link>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/30">
           <Link href="/download" className="hover:text-pizza-primary transition-colors">Download App</Link>
           <Link href="/contact" className="hover:text-pizza-primary transition-colors">Contact Support</Link>
           <Link href="/about" className="hover:text-pizza-primary transition-colors">Brand Story</Link>
        </div>
      </div>
    </div>
  );
}
