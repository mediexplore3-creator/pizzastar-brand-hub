'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChefHat, Flame, Utensils, Award } from 'lucide-react';

const steps = [
  {
    icon: <ChefHat size={32} />,
    title: "The Artisanal Start",
    desc: "Our dough is hand-kneaded using a 48-hour cold fermentation process, ensuring a light, airy, and flavorful crust that is easy on the gut."
  },
  {
    icon: <Utensils size={32} />,
    title: "Fusion Marination",
    desc: "Every topping, from Paneer to Chicken Tikka, is marinated in-house using traditional clay-pot techniques and secret spice blends."
  },
  {
    icon: <Flame size={32} />,
    title: "The Wood-Fired Kiss",
    desc: "We bake our pizzas at 450°C in traditional wood-fired ovens, giving them that signature smoky aroma and perfect leopard-spotted char."
  },
  {
    icon: <Award size={32} />,
    title: "Quality Check",
    desc: "Every single pizza is inspected by our Head Chef before it leaves the kitchen, ensuring it meets the 'Star' standard of excellence."
  }
];

export default function KitchenPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
           <h1 className="font-display text-5xl md:text-7xl font-black text-pizza-dark dark:text-white">
             Inside Our <span className="gradient-text">Kitchen</span>
           </h1>
           <p className="text-pizza-dark/60 dark:text-white/60 max-w-2xl mx-auto text-lg">
             Where tradition meets innovation. Discover the meticulous process behind every artisanal slice we create.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
           >
              <Image 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070" 
                alt="Our Oven" 
                fill 
                className="object-cover" 
              />
           </motion.div>
           <div className="space-y-8">
              <h2 className="text-3xl font-black text-pizza-dark dark:text-white">The Heart of the Brand</h2>
              <p className="text-pizza-dark/60 dark:text-white/60 leading-relaxed">
                At Pizza Star, our kitchen isn't just a production line; it's a sanctuary of flavor. We source our tomatoes from the foothills of the Himalayas and our mozzarella from artisanal diaries that share our passion for quality.
              </p>
              <div className="space-y-6">
                 {steps.map((step, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="flex gap-6 items-start"
                   >
                      <div className="h-14 w-14 rounded-2xl bg-pizza-primary/10 flex items-center justify-center text-pizza-primary shrink-0">
                         {step.icon}
                      </div>
                      <div>
                         <h3 className="font-bold text-xl">{step.title}</h3>
                         <p className="text-pizza-dark/60 dark:text-white/60 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>

        <section className="glass rounded-[4rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-pizza-primary to-transparent" />
           <h2 className="text-4xl font-black italic">"Great pizza isn't made by machines. It is crafted by stars."</h2>
           <p className="text-pizza-dark/40 font-bold uppercase tracking-[0.2em]">Our Founder's Philosophy</p>
        </section>
      </div>
    </div>
  );
}
