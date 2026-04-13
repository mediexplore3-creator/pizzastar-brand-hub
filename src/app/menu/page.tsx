'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Flame, LayoutGrid } from 'lucide-react';

interface MenuItem {
  name: string;
  desc: string;
  p?: string;
  m?: string;
  l?: string;
  price?: string;
}

interface MenuCategory {
  category: string;
  info: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [ 
  {
    category: "Indian Fusion Pizzas",
    info: "Wood-fired, hand-stretched, and topped with our signature fusion masalas.",
    items: [
      { name: "Margherita", p: "99", m: "199", l: "349", desc: "Classic mozzarella with home-grown basil and tomato sauce." },
      { name: "Farm House", p: "159", m: "299", l: "449", desc: "Capsicum, onion, tomato, and fresh farm mushrooms." },
      { name: "Veggie Feast", p: "179", m: "329", l: "499", desc: "Golden corn, black olives, jalapenos, and mixed peppers." },
      { name: "Paneer Special", p: "189", m: "349", l: "549", desc: "Cottage cheese marinated in secret spices, onion, and capsicum." },
      { name: "Tandoori Paneer", p: "199", m: "379", l: "599", desc: "Clay-oven roasted paneer, red paprika, and coriander pesto." },
      { name: "Pizza Star Supreme", p: "219", m: "429", l: "649", desc: "The ultimate load: Double paneer, all veggies, and extra cheese burst." }
    ]
  },
  {
    category: "Burgers & Calzones",
    info: "Fresh buns and hand-folded calzones oozing with artisanal cheese.",
    items: [
      { name: "Veg Burger", price: "40", desc: "Crispy herb patty with house mayo." },
      { name: "Cheese Burger", price: "60", desc: "Double cheese slice with fresh lettuce." },
      { name: "Paneer Burger", price: "70", desc: "Spiced paneer patty with tandoori spread." },
      { name: "Pizza Star Special Burger", price: "99", desc: "Chef's signature double-decker creation." },
      { name: "Veg Calzone", price: "99", desc: "Hand-folded pizza pocket filled with veggies." },
      { name: "Paneer Calzone", price: "129", desc: "Stuffed with masala paneer and liquid cheese." }
    ]
  },
  {
    category: "Sides & Continental",
    info: "The perfect companions for your pizza journey.",
    items: [
      { name: "Garlic Bread Sticks", price: "79", desc: "Baked fresh with garlic butter and herbs." },
      { name: "Stuffed Garlic Bread", price: "129", desc: "Paneer, corn, and cheese explosion." },
      { name: "French Fries (Masala)", price: "70", desc: "Crispy gold fries with peri-peri seasoning." },
      { name: "White Sauce Pasta", price: "129", desc: "Creamy, cheesy, and utterly delicious." },
      { name: "Mix Sauce Pasta", price: "149", desc: "The best of both worlds with extra heat." }
    ]
  },
  {
    category: "Beverages & Shakes",
    info: "Chill out with our artisanal blended beverages.",
    items: [
      { name: "Cold Coffee", price: "80", desc: "Smooth, bold, and served ice cold." },
      { name: "Chocolate Shake", price: "99", desc: "Rich Belgian chocolate blend." },
      { name: "Strawberry Shake", price: "99", desc: "Fresh fruit preserve and velvet cream." },
      { name: "Vanilla Shake", price: "99", desc: "Classic Madagascar vanilla beans." }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="pt-32 pb-20 bg-pizza-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
           <Image 
             src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070" 
             alt="Menu Hero Background" 
             fill 
             priority
             unoptimized={true}
             className="object-cover blur-sm opacity-70"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-pizza-dark/40 via-transparent to-pizza-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-pizza-primary/20 text-pizza-primary border border-pizza-primary/30 text-xs font-black uppercase tracking-widest"
           >
             <Flame size={14} className="animate-pulse" />
             <span>The Flavor Laboratory</span>
           </motion.div>
           <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
             OUR <span className="gradient-text">MENU</span>
           </h1>
           <p className="max-w-2xl mx-auto text-white/50 text-lg font-medium leading-relaxed">
             From wood-fired fusion masterpieces to street-style experimental burgers, every item is crafted with artisanal passion.
           </p>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
           <div className="absolute top-0 right-0 w-96 h-96 bg-pizza-primary rounded-full blur-[160px]" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-pizza-secondary rounded-full blur-[160px]" />
        </div>
      </section>

      {/* Wednesday Special Callout */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-pizza-primary relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pizza-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-6 relative z-10">
             <div className="h-20 w-20 rounded-2xl bg-pizza-primary flex items-center justify-center text-white shadow-lg shadow-pizza-primary/30 rotate-3">
                <Zap size={40} />
             </div>
             <div>
                <h3 className="text-2xl md:text-4xl font-black text-white italic">WEDNESDAY SPECIAL</h3>
                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Mid-week Flavor Explosion</p>
             </div>
          </div>
          <div className="text-center md:text-right relative z-10">
             <div className="text-5xl md:text-6xl font-black text-white italic gradient-text">BUY 1 GET 1</div>
             <p className="text-pizza-primary font-black uppercase tracking-widest text-sm mt-2">FREE ON MEDIUM & LARGE PIZZAS</p>
          </div>
        </motion.div>
      </div>

      {/* Menu Images Display */}
      <section className="max-w-7xl mx-auto px-6 mb-32 space-y-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden group shadow-2xl border border-white/5"
            >
               <Image 
                 src="https://i.postimg.cc/wvHHvXnZ/MENU-FORNT.webp" 
                 alt="Pizza Star Menu Front" 
                 fill 
                 unoptimized={true}
                 className="object-contain transition-transform duration-[2s] group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-pizza-dark via-transparent to-transparent opacity-50" />
               <div className="absolute bottom-10 left-10">
                  <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest border border-white/10">Menu Front / Featured</span>
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden group shadow-2xl border border-white/5"
            >
               <Image 
                 src="https://i.postimg.cc/2y9f2Pys/MENY-BACK.webp" 
                 alt="Pizza Star Menu Back" 
                 fill 
                 unoptimized={true}
                 className="object-contain transition-transform duration-[2s] group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-pizza-dark via-transparent to-transparent opacity-50" />
               <div className="absolute bottom-10 left-10">
                  <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest border border-white/10">Menu Back / Details</span>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Manual Listing Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
           <h2 className="text-4xl md:text-6xl font-black text-white">THE FULL <span className="text-pizza-primary">LIST</span></h2>
           <p className="text-white/40 uppercase font-bold tracking-[0.3em] text-xs">Artisanal Curation of Ingredients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
          {menuData.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className="space-y-3 relative">
                 <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-pizza-primary rounded-full" />
                 <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">{cat.category}</h3>
                 <p className="text-white/40 text-sm leading-relaxed max-w-sm">{cat.info}</p>
              </div>

              <div className="space-y-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="group relative">
                     <div className="flex justify-between items-end gap-4 border-b border-white/5 pb-4 group-hover:border-pizza-primary/30 transition-colors">
                        <div className="space-y-1">
                           <h4 className="text-lg font-black text-white group-hover:text-pizza-primary transition-colors">{item.name}</h4>
                           <p className="text-white/30 text-xs font-medium italic">{item.desc}</p>
                        </div>
                        <div className="text-right shrink-0">
                           {item.p ? (
                             <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-white/40">
                                <div><span className="text-pizza-primary">P:</span> ₹{item.p}</div>
                                <div><span className="text-pizza-primary">M:</span> ₹{item.m}</div>
                                <div><span className="text-pizza-primary">L:</span> ₹{item.l}</div>
                             </div>
                           ) : (
                             <div className="text-xl font-black text-white italic">₹{item.price}</div>
                           )}
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Branding Section */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
         <div className="relative rounded-[4rem] bg-gradient-to-br from-[#1e1d1d] to-[#121212] p-12 md:p-20 overflow-hidden text-center space-y-8 border border-white/5">
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                <Image 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070" 
                  alt="Pizza Background" 
                  fill 
                  unoptimized={true}
                  className="object-cover opacity-5 grayscale"
                />
            </div>
            <div className="flex justify-center mb-6">
               <div className="h-24 w-24 relative animate-bounce">
                  <Image src="https://i.postimg.cc/sXDQRxZM/PIZZA-STAR-LOGO.png" alt="Pizza Star Logo" fill unoptimized={true} className="object-contain" />
               </div>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white italic leading-none relative z-10">CAN&apos;T WAIT? <br /> <span className="gradient-text">ORDER NOW.</span></h2>
            <p className="text-white/50 font-bold uppercase tracking-widest text-sm relative z-10">Download our mobile app for faster delivery and exclusive rewards.</p>
            <div className="flex flex-wrap justify-center gap-6 pt-10 relative z-10">
               <Link 
                 href="/download"
                 className="btn-primary px-10 h-16 rounded-2xl flex items-center justify-center gap-3"
               >
                  <LayoutGrid size={20} />
                  <span>Download Our App</span>
               </Link>
               <Link 
                 href="/contact"
                 className="glass px-10 h-16 rounded-2xl border border-white/10 text-white font-bold hover:bg-white hover:text-pizza-dark transition-all flex items-center justify-center"
               >
                  Contact Kitchen
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
