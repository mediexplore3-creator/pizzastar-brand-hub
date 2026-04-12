'use client';

import { useState } from 'react';
import { Share2, Globe, Link as LinkIcon, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ShareActionsProps = {
  title: string;
};

export default function ShareActions({ title }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Pizza Star | ${title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled or failed: ', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      handleCopy();
      alert('Link copied to clipboard! (Share API not supported in this browser)');
    }
  };

  const openCommunity = () => {
    window.open('https://t.me/starpizza', '_blank');
  };

  return (
    <div className="flex flex-col gap-3">
      <button 
        onClick={openCommunity}
        className="flex items-center gap-3 p-3 rounded-xl bg-pizza-primary/5 hover:bg-pizza-primary/10 text-pizza-primary transition-all font-bold text-sm active:scale-95"
      >
        <Globe size={18} /> Community
      </button>

      <button 
        onClick={handleShare}
        className="flex items-center gap-3 p-3 rounded-xl bg-pizza-primary/5 hover:bg-pizza-primary/10 text-pizza-primary transition-all font-bold text-sm active:scale-95"
      >
        <Share2 size={18} /> Share
      </button>

      <button 
        onClick={handleCopy}
        className="relative flex items-center gap-3 p-3 rounded-xl bg-pizza-primary/5 hover:bg-pizza-primary/10 text-pizza-primary transition-all font-bold text-sm active:scale-95 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div 
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-center gap-3"
            >
               <Check size={18} /> Copied!
            </motion.div>
          ) : (
            <motion.div 
              key="link"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-center gap-3"
            >
               <LinkIcon size={18} /> Copy Link
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
