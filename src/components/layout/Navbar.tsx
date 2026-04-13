'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Smartphone, ChevronRight } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Blog', href: '/blog' },
  { name: 'Download App', href: '/download' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-[110]">
            <div className="relative h-14 w-14 overflow-hidden group transition-transform hover:scale-110 active:scale-95">
               <Image 
                 src="https://i.postimg.cc/sXDQRxZM/PIZZA-STAR-LOGO.png" 
                 alt="Pizza Star Logo" 
                 fill 
                 className="object-contain"
                 priority
               />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-black uppercase tracking-widest transition-all hover:text-pizza-primary relative group ${pathname === link.href ? 'text-pizza-primary' : 'text-white/60'}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-1 bg-pizza-primary transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-black/5 dark:border-white/5">
                <button 
                  onClick={() => setSearchOpen(true)}
                  className="p-3 rounded-xl bg-pizza-primary/5 text-pizza-dark dark:text-white hover:bg-pizza-primary hover:text-white transition-all"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                
                <Link 
                  href="/download"
                  className="btn-primary h-12 px-6 text-[10px] flex items-center justify-center"
                >
                  Download App
                </Link>
            </div>
          </div>

          {/* Mobile Toggles */}
          <div className="flex items-center gap-3 lg:hidden relative z-[110]">
            <button 
              onClick={() => setSearchOpen(true)} 
              className="p-3 rounded-xl bg-pizza-primary/5 text-white"
              aria-label="Open Search"
            >
              <Search size={20} aria-hidden="true" />
            </button>
            <button 
              className={`p-3 rounded-xl transition-all ${isOpen ? 'bg-pizza-primary text-white' : 'bg-pizza-primary/5 text-white'}`} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation (Right Slide-in) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-pizza-dark/60 backdrop-blur-sm z-[140]"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-pizza-dark border-l border-white/5 shadow-2xl z-[150] p-8 flex flex-col"
            >
               <div className="flex items-center justify-between mb-16">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 relative overflow-hidden">
                       <Image src="https://i.postimg.cc/sXDQRxZM/PIZZA-STAR-LOGO.png" alt="Pizza Star Logo" fill className="object-contain" />
                    </div>
                    <span className="font-display font-black text-lg uppercase">Pizza <span className="text-pizza-primary">Star</span></span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="p-2 rounded-lg bg-black/5 dark:bg-white/5"
                    aria-label="Close Menu Drawer"
                  >
                    <X size={20} aria-hidden="true" />
                  </button>
               </div>

               <nav className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        className={`group flex items-center justify-between p-5 rounded-2xl transition-all ${pathname === link.href ? 'bg-pizza-primary text-white shadow-lg' : 'bg-pizza-primary/5 text-white hover:bg-pizza-primary/10'}`}
                      >
                        <span className="font-black uppercase tracking-widest text-sm">{link.name}</span>
                        <ChevronRight size={18} className={`transition-transform group-hover:translate-x-1 ${pathname === link.href ? 'opacity-100' : 'opacity-20'}`} />
                      </Link>
                    </motion.div>
                  ))}
               </nav>

               <div className="mt-auto space-y-6">
                  <Link 
                    href="/download" 
                    className="btn-primary w-full h-16 text-xs flex items-center justify-center"
                  >
                    Download Mobile App
                  </Link>
                  <p className="text-center text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                    © 2026 Pizza Star India
                  </p>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-pizza-dark/95 backdrop-blur-2xl p-6"
          >
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-3 bg-white/5 rounded-full"
              aria-label="Close Search Overlay"
            >
              <X size={28} aria-hidden="true" />
            </button>
            
            <div className="w-full max-w-4xl space-y-12">
               <div className="text-center space-y-4">
                  <h2 className="font-display text-4xl font-black text-white italic">Searching for flavor?</h2>
                  <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Type ingredients, recipes, or pizza history</p>
               </div>
               <form onSubmit={handleSearch} className="relative group">
                 <input 
                   autoFocus
                   type="text"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="Try 'Paneer', 'History'..."
                   className="w-full bg-transparent border-b-8 border-white/10 focus:border-pizza-primary py-8 text-3xl md:text-6xl font-black text-white focus:outline-none transition-all placeholder:text-white/5 uppercase"
                 />
                 <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-pizza-primary transition-colors">
                    <Search size={48} />
                 </button>
               </form>
               <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/20">Quick Bites:</span>
                  {['Recipes', 'Trends', 'News', 'Tips'].map(tag => (
                    <button 
                      key={tag} 
                      onClick={() => { setSearchQuery(tag); }}
                      className="px-6 py-3 rounded-full border border-white/10 text-white/40 hover:border-white/40 hover:text-pizza-primary transition-all bg-white/5 hover:scale-110"
                    >
                      {tag}
                    </button>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
