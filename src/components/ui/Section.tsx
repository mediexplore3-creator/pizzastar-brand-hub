'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export default function Section({ children, className = '', dark = false, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={`relative overflow-hidden ${dark ? 'bg-pizza-dark text-white' : 'bg-white text-pizza-dark'} ${className}`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  );
}
