'use client';

import { useState, useMemo, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Calendar, User, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { BLOG_POSTS } from '@/data/posts';

const CATEGORIES = ['All', 'Pizza Recipes', 'Industry News', 'Cooking Tips', 'Food Trends'];

function BlogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialQuery = searchParams.get('q') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [visibleCount, setVisibleCount] = useState(6);

  // Sync with search params if they change (e.g. from global search)
  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'All');
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 underline-offset-8">
        <div className="space-y-4">
          <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-tight">
            The <span className="gradient-text">Brand Journal</span>
          </h1>
          <p className="text-white/60 max-w-xl pr-4 text-base font-medium">
            Discover the stories, science, and street-food secrets that make Pizza Star India's premier artisanal choice.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-pizza-primary transition-all duration-300" size={18} />
            <input 
              type="text" 
              placeholder="Search flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 w-full sm:w-80 pl-11 pr-10 rounded-2xl bg-[#1e1d1d] border border-white/10 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-pizza-primary/20 transition-all placeholder:text-white/20 text-white"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-pizza-primary transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex items-center gap-3 bg-pizza-primary/5 dark:bg-white/5 border border-pizza-dark/10 dark:border-white/10 rounded-2xl px-5 h-14">
            <Filter size={18} className="text-pizza-primary" />
            <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="bg-transparent text-sm font-black focus:outline-none cursor-pointer appearance-none pr-2"
            >
              {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredPosts.slice(0, visibleCount).map((post, i) => (
            <motion.article 
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i % 6 * 0.1 }}
              className="group glass rounded-[2.5rem] overflow-hidden flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500 border border-pizza-dark/5 dark:border-white/5"
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/11] overflow-hidden block">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-pizza-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex-1 flex flex-col space-y-5">
                  <div className="flex items-center gap-6 text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-2 font-bold italic tracking-normal"><User size={14} /> By {post.author}</span>
                  </div>
                
                  <h2 className="text-2xl font-black text-white leading-[1.2] group-hover:text-pizza-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-sm text-white/60 leading-relaxed line-clamp-3 font-medium">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 mt-auto">
                    <Link href={`/blog/${post.slug}`} className="btn-secondary h-12 px-6 flex items-center justify-center gap-2 w-full sm:w-max group/link">
                      <span className="text-xs font-black uppercase tracking-widest">Open Full Article</span>
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {visibleCount < filteredPosts.length && (
         <div className="mt-24 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="btn-primary px-16 h-16 text-lg font-black group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                 Load More Slices
                 <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 >
                    🍕
                 </motion.div>
              </span>
              <motion.div 
                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
            </button>
         </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="py-32 text-center space-y-6">
           <motion.div 
             animate={{ scale: [1, 1.2, 1] }} 
             transition={{ duration: 2, repeat: Infinity }}
             className="text-8xl"
           >
              🔍
           </motion.div>
            <h3 className="text-3xl font-black text-white italic">"No slices found for your search"</h3>
            <p className="text-white/60 text-lg max-w-md mx-auto">Try searching for recipes, tips, or another category like Industry News.</p>
           <button 
             onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} 
             className="text-pizza-primary font-black uppercase tracking-widest border-b-2 border-pizza-primary pb-1 hover:text-white transition-colors"
           >
             Reset Oven (Clear Filters)
           </button>
        </div>
      )}

      {/* AdSense Placement */}
      <div className="mt-32 max-w-5xl mx-auto h-32 w-full rounded-3xl glass flex items-center justify-center border-dashed border-2 border-pizza-primary/20 bg-pizza-primary/5 transition-all hover:bg-pizza-primary/10">
         <div className="flex flex-col items-center gap-2">
            <span className="text-pizza-primary/10 font-black uppercase tracking-[0.6em] text-[10px]">Google AdSense Optimized Slot</span>
            <div className="flex gap-2 opacity-5">
               {[1,2,3,4,5].map(i => <div key={i} className="h-1 w-12 bg-pizza-primary rounded-full transition-all group-hover:w-16" />)}
            </div>
         </div>
      </div>
    </div>
  );
}

export default function BlogClient() {
  return (
    <Suspense fallback={
      <div className="pt-40 pb-20 text-center flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin h-14 w-14 border-4 border-pizza-primary border-t-transparent rounded-full" />
        <p className="text-white/40 font-black uppercase tracking-widest text-xs">Preheating the Blog...</p>
      </div>
    }>
      <BlogContent />
    </Suspense>
  );
}
