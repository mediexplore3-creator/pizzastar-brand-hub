'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail, Share2, Phone, MapPin, Camera, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = [
  { 
    title: 'Brand', 
    links: [
      { name: 'Home', href: '/' },
      { name: 'Menu', href: '/menu' },
      { name: 'About Us', href: '/about' },
      { name: 'Our Kitchen', href: '/kitchen' },
      { name: 'Contact', href: '/contact' },
      { name: 'Jobs', href: '/jobs' },
    ]
  },
  { 
    title: 'Legal', 
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  },
  { 
    title: 'Resources', 
    links: [
      { name: 'Download App', href: '/download' },
      { name: 'Pizza Recipes', href: '/blog?category=Pizza%20Recipes' },
      { name: 'Global News', href: '/blog?category=Industry%20News' },
      { name: 'Cooking Tips', href: '/blog?category=Cooking%20Tips' },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-pizza-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand Section */}
        <div className="space-y-8">
          <Link href="/" className="flex items-center gap-3 relative h-16 w-16 transition-transform hover:scale-110 active:scale-95">
             <Image src="https://i.postimg.cc/sXDQRxZM/PIZZA-STAR-LOGO.png" alt="Pizza Star Logo" fill className="object-contain" />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed font-medium">
            India's premier content hub for artisanal wood-fired pizza lovers. Join our community for secret recipes and brand updates.
          </p>
          <div className="flex gap-4">
             {[
               { 
                 label: 'Instagram', 
                 href: 'https://instagram.com/pizzastar_rajound', 
                 color: '#E4405F',
                 path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
               },
               { 
                 label: 'Facebook', 
                 href: 'https://facebook.com/pizzastar_rajound', 
                 color: '#1877F2',
                 path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
               },
               { 
                 label: 'X (Twitter)', 
                 href: 'https://x.com/pizzastar_rajound', 
                 color: '#000000',
                 path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.313 17.404z"
               },
               { 
                 label: 'Telegram', 
                 href: 'https://t.me/pizzastar_rajound', 
                 color: '#24A1DE',
                 path: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.462 15.598c-.145.234-.145.234-.462.462-.313.226-1.125.683-1.406.844-.067.038-.138.031-.219-.015-.081-.046-.145-.125-.194-.236l-1.041-2.484-.462 2.484c-.046.246-.046.246-.225.432-.178.185-.436.313-.675.313a.62.62 0 0 1-.413-.153.642.642 0 0 1-.212-.331L9.675 14.5l-2.062-.672c-.172-.056-.25-.2-.234-.35.015-.15.156-.244.331-.281l9.625-3.626c.15-.056.287-.031.381.075.093.106.125.262.075.412L16.462 15.598z"
               },
             ].map(({ label, href, color, path }, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ scale: 1.2, backgroundColor: color }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center transition-all text-white/40 hover:text-white group"
                  aria-label={`Visit Pizza Star on ${label}`}
                  title={label}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transition-colors" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </motion.a>
             ))}
          </div>
        </div>

        {/* Links Sections */}
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-8">
            <h4 className="font-display font-black text-xs uppercase tracking-[0.3em] text-pizza-primary">{section.title}</h4>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-all text-sm font-bold uppercase tracking-widest flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-pizza-primary transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* AdSense Placement / Divider */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="h-28 w-full rounded-[2rem] bg-white/5 flex items-center justify-center border border-white/5 group relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
           <p className="text-white/10 text-[10px] font-black uppercase tracking-[0.6em] group-hover:text-white/20 transition-all">Partner Ad Discovery Zone</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
           <p>© 2026 Pizza Star India Pvt Ltd.</p>
           <p className="flex items-center gap-2">FSSAI: 12345678901234</p>
        </div>
        <div className="flex gap-8">
           <p>Made with Hub Love</p>
           <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
