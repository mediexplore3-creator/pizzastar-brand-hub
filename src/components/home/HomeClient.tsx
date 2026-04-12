'use client';

import { motion } from 'framer-motion';
import { Smartphone, ArrowRight, Pizza, Zap, Star, Utensils, Info, Calendar, User, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CATEGORIES = [
  { name: 'Pizza', icon: <Pizza />, count: 12, color: 'bg-red-500' },
  { name: 'Fast Food', icon: <Zap />, count: 8, color: 'bg-amber-500' },
  { name: 'Recipes', icon: <Utensils />, count: 15, color: 'bg-emerald-500' },
  { name: 'Offers', icon: <Star />, count: 5, color: 'bg-pizza-primary' },
  { name: 'Tips', icon: <Info />, count: 10, color: 'bg-blue-500' },
];

const FEATURED_POSTS = [
  { 
    slug: 'perfect-tandoori-paneer-pizza-at-home',
    title: 'The Secret to Perfect Tandoori Pizza Crust', 
    excerpt: 'Discover why the traditional tandoor makes our crust uniquely smoky and crisp...',
    category: 'Pizza Recipes',
    author: 'Chef Rajesh',
    date: 'Oct 24, 2026',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070'
  },
  { 
    slug: 'indian-street-food-trends-2026',
    title: '5 Fusion Toppings That Are Topping the Charts', 
    excerpt: 'Paneer tikka is just the beginning. Meet the new kings of the Indian pizza scene...',
    category: 'Food Trends',
    author: 'Amit Sharma',
    date: 'Oct 22, 2026',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1974'
  },
];

export default function HomeClient() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 lg:pt-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pizza-primary/5 -skew-x-12 translate-x-1/4 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 w-full">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="space-y-10"
           >
              <div className="inline-flex items-center gap-2 bg-amber-400/20 px-5 py-2.5 rounded-full text-amber-600 dark:text-amber-400 font-black text-[10px] uppercase tracking-widest border border-amber-400/30">
                 <Star size={14} fill="currentColor" />
                 <span>India's #1 Content Hub for Pizza Lovers</span>
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-black text-white leading-tight">
                Taste the <br />
                <span className="gradient-text">Star of Flavor</span> 🍕
              </h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                More than just a brand. We are a community celebrating the fusion of Indian spices and artisanal wood-fired pizza traditions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                 <Link href="/blog" className="btn-primary flex items-center gap-2">
                    <span>Explore Blog</span>
                    <ArrowRight size={20} />
                 </Link>
                 <Link href="/download" className="glass px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-pizza-primary/5 transition-colors">
                    <Smartphone size={20} />
                    <span>Download App</span>
                 </Link>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative hidden lg:block"
           >
              <div className="relative aspect-square w-full">
                 <div className="absolute inset-0 bg-pizza-primary/10 rounded-full animate-pulse-slow" />
                 <Image 
                   src="https://i.postimg.cc/wjCdDGkh/header-pizza-image.png" 
                   alt="Hero Pizza" 
                   fill 
                   className="object-contain drop-shadow-2xl hover:rotate-6 transition-transform duration-700"
                   priority
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
              </div>
           </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-pizza-dark overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
               <h2 className="font-display text-4xl font-black text-white">Explore Categories</h2>
               <p className="text-white/40">From kitchen secrets to the latest toppings.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
               {CATEGORIES.map((cat, i) => (
                 <Link 
                   href={`/blog?category=${cat.name}`}
                   key={cat.name}
                   className="glass p-8 rounded-[2rem] flex flex-col items-center gap-4 group transition-all"
                 >
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className={`h-16 w-16 rounded-2xl flex items-center justify-center text-3xl text-white ${cat.color} shadow-lg transition-transform group-hover:scale-110`}
                    >
                       {cat.icon}
                    </motion.div>
                    <div className="text-center">
                       <h3 className="font-bold text-white transition-colors group-hover:text-pizza-primary">{cat.name}</h3>
                       <p className="text-[10px] uppercase font-bold text-white/20 tracking-widest">{cat.count} Articles</p>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-32 max-w-7xl mx-auto px-6 overflow-hidden">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex items-end justify-between mb-16"
         >
            <div className="space-y-4">
               <h2 className="font-display text-4xl md:text-5xl font-black text-white">Fresh from the Kitchen</h2>
               <p className="text-white/60">Insights, recipes, and news from the heart of Pizza Star.</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-pizza-primary font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
               <span>View All Posts</span>
               <ArrowRight size={20} />
            </Link>
         </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FEATURED_POSTS.map((post, i) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group glass rounded-[2.5rem] overflow-hidden flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500 border border-pizza-dark/5 dark:border-white/5"
              >
                     <Link href={`/blog/${post.slug}`} className="relative aspect-[16/11] overflow-hidden block">
                       <Image 
                         src={post.image} 
                         alt={post.title} 
                         fill 
                         loading={i < 3 ? "eager" : "lazy"}
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
             </div>
      </section>

      {/* App Promotion Section */}
      <section className="py-24 px-6">
         <motion.div 
           whileInView={{ opacity: 1, scale: 1 }}
           initial={{ opacity: 0, scale: 0.95 }}
           className="max-w-7xl mx-auto glass rounded-[4rem] p-12 md:p-20 relative overflow-hidden"
         >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-pizza-primary/20 rounded-full blur-[100px]" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
               <div className="space-y-8">
                  <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-tight">
                    Order smarter, <br />
                    <span className="gradient-text">eat better.</span>
                  </h2>
                  <p className="text-lg text-white/60">
                    Get the Pizza Star mobile app for a faster checkout, exclusive Indian fusion pizza deals, and secret recipes.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                     <Link href="/download" className="hover:scale-105 transition-transform shadow-2xl">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width={160} height={48} className="h-12 w-auto" />
                     </Link>
                     <Link href="/download" className="hover:scale-105 transition-transform shadow-2xl">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" width={160} height={48} className="h-12 w-auto" />
                     </Link>
                  </div>
               </div>
               
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                 whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                 viewport={{ once: true }}
                 className="relative h-[500px] flex items-center justify-center"
               >
                  <Image 
                    src="/images/star-pizza-app-mockup.png" 
                    alt="Pizza Star Phone App Mockup" 
                    width={350} 
                    height={700} 
                    className="object-contain drop-shadow-[0_35px_35px_rgba(255,60,60,0.3)]"
                  />
               </motion.div>
            </div>
         </motion.div>
      </section>

      {/* Newsletter */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-32 max-w-4xl mx-auto px-6 text-center space-y-12"
      >
         <div className="space-y-4">
            <h2 className="font-display text-4xl font-black text-white">Join the Pizza Fam</h2>
            <p className="text-white/60">Get weekly recipes and exclusive brand updates straight in your inbox.</p>
         </div>
         <form 
           onSubmit={(e) => {
             e.preventDefault();
             alert('🍕 Welcome to the family! Check your inbox for your first slice of news.');
           }}
           className="flex flex-col md:flex-row gap-4"
         >
            <input 
              required
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 h-14 rounded-2xl bg-pizza-primary/5 dark:bg-[#1e1d1d] border border-pizza-dark/10 dark:border-white/10 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-pizza-primary/20"
            />
            <button type="submit" className="btn-primary h-14 px-12 transition-all hover:scale-105 active:scale-95">Subscribe</button>
         </form>
         <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">
            By subscribing, you agree to our privacy policy and consent to receive marketing emails. 
            No spam, just pizza love.
         </p>
      </motion.section>
    </div>
  );
}
