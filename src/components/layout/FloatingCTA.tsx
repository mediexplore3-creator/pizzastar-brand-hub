'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="relative">
            <button 
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 bg-pizza-dark text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Dismiss"
            >
              <X size={12} />
            </button>
            <Link 
              href="/download" 
              className="flex items-center gap-3 bg-pizza-primary text-white px-6 py-4 rounded-2xl shadow-2xl hover:scale-105 transition-transform active:scale-95"
            >
              <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Smartphone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Get the App</p>
                <p className="font-bold text-sm">Download Hub</p>
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
