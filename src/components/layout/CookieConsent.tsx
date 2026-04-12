'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // We check for the consent in a timeout to ensure animations feel smooth
    const checkConsent = () => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(checkConsent, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleCancel = () => {
    // Dismiss for this browser session/permanently as per "first time only" request
    localStorage.setItem('cookieConsent', 'dismissed');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ y: 100, opacity: 0, scale: 0.95 }}
           animate={{ y: 0, opacity: 1, scale: 1 }}
           exit={{ y: 100, opacity: 0, scale: 0.95 }}
           transition={{ type: 'spring', damping: 25, stiffness: 200 }}
           className="fixed bottom-4 left-4 right-4 md:bottom-8 md:right-8 md:left-auto md:w-[400px] z-[999]"
        >
           <div className="glass shadow-2xl rounded-[2.5rem] p-6 border border-white/10 overflow-hidden relative group">
              {/* Animated background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-pizza-primary/10 rounded-full blur-[80px] group-hover:bg-pizza-primary/20 transition-all duration-700" />
              
              <div className="relative z-10 flex flex-col gap-6">
                 <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-pizza-primary/20 flex items-center justify-center text-pizza-primary shadow-inner">
                       <Cookie size={28} className="animate-pulse" />
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-white italic leading-none uppercase tracking-tighter">Cookie Policy</h3>
                       <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">First Visit Special</p>
                    </div>
                 </div>

                 <p className="text-white/60 text-sm font-medium leading-relaxed">
                    We use artisanal cookies to enhance your flavor journey. By continuing, you agree to our recipe for a perfect experience.
                 </p>

                 <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                       <button 
                         onClick={handleAccept}
                         className="btn-primary flex-1 !h-12 !rounded-xl !text-[10px]"
                       >
                          Accept
                       </button>
                       <button 
                         onClick={handleReject}
                         className="btn-ghost flex-1 !h-12 !rounded-xl !text-[10px] !border-white/10 !text-white hover:!bg-white/5"
                       >
                          Reject
                       </button>
                    </div>
                    <button 
                      onClick={handleCancel}
                      className="w-full text-white/30 hover:text-white/60 transition-colors text-[9px] font-black uppercase tracking-[0.2em] py-1"
                    >
                       Cancel
                    </button>
                 </div>
              </div>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
