'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" } : {}}
      className={`glass-card p-6 border border-black/5 dark:border-white/5 overflow-hidden group transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}
