import { Star, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <div className="inline-flex items-center gap-2 bg-pizza-primary/10 px-4 py-2 rounded-full text-pizza-primary font-bold text-sm">
              <Star size={16} />
              <span>Founded in 2021</span>
           </div>
           <h1 className="font-display text-5xl md:text-7xl font-black text-pizza-dark dark:text-white leading-tight">
             We are the <span className="gradient-text">Stars of Sizzle</span>
           </h1>
           <p className="text-lg text-pizza-dark/60 dark:text-white/60 leading-relaxed">
             Pizza Star began as a small wood-fired cloud kitchen in Mumbai with a single mission: to prove that Indian spices and Italian traditions aren't just compatible—they're soulmates.
           </p>
           <p className="text-pizza-dark/60 dark:text-white/60">
             Today, we are a digital-first brand hub, connecting millions of pizza enthusiasts through our content, recipes, and cutting-edge mobile app.
           </p>
        </div>
        <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl skew-x-3">
           <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974" alt="Pizza Star Kitchen" fill className="object-cover" />
        </div>
      </section>

      <section className="bg-pizza-dark py-32 relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pizza-primary rounded-full blur-[160px]" />
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-32">
               {[
                 { icon: <Heart size={40} className="text-pizza-primary" />, title: 'Deeply Authentic', desc: 'Every spice blend in our blog is tested in a real tandoor by our master chefs.' },
                 { icon: <ShieldCheck size={40} className="text-pizza-primary" />, title: 'Quality First', desc: 'From the APK you download to the recipes you cook, safety and quality are our north stars.' },
                 { icon: <Award size={40} className="text-pizza-primary" />, title: 'Fusion Pioneers', desc: 'We led the 2024 "Butter Chicken Pizza" revolution and continue to push boundaries.' },
               ].map((feature, i) => (
                 <div key={i} className="space-y-6 flex flex-col items-center">
                    <div className="h-20 w-20 rounded-3xl bg-white/5 flex items-center justify-center">
                       {feature.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white">{feature.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-xs">{feature.desc}</p>
                 </div>
               ))}
            </div>

            {/* Developer Spotlight */}
            <div className="pt-20 border-t border-white/5 flex flex-col items-center text-center space-y-10">
               <div className="space-y-4">
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pizza-primary">The Architect</h2>
                  <h3 className="text-5xl font-black text-white italic">OUR DEVELOPER</h3>
               </div>
               
               <div className="relative group">
                  <div className="absolute inset-0 bg-pizza-primary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="h-80 w-80 rounded-full border-4 border-pizza-primary/30 p-2 relative z-10 overflow-hidden">
                     <Image 
                       src="https://i.postimg.cc/0jy6BMdk/DEVLOPER.webp" 
                       alt="Nitin Sharma - Developer" 
                       width={400}
                       height={400}
                       unoptimized={true}
                       className="object-cover rounded-full h-full w-full grayscale group-hover:grayscale-0 transition-all duration-700"
                     />
                  </div>
               </div>

               <div className="max-w-2xl space-y-6">
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Nitin Sharma</h4>
                  <p className="text-pizza-primary font-bold uppercase tracking-widest text-xs">Full-Stack Developer</p>
                  <p className="text-white/60 leading-relaxed italic">
                     "Nitin is the engineering force behind the Pizza Star digital ecosystem. Passionate about merging culinary storytelling with high-performance code, he has crafted this portal to be as bold as our flavors and as smooth as artisanal dough."
                  </p>
                  
                  <div className="flex flex-col items-center gap-6 pt-8">
                     <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Ready to elevate your digital presence?</p>
                     <div className="flex flex-wrap justify-center gap-4">
                        <Link 
                          href="https://instagram.com/itz_nitin_sharma08" 
                          target="_blank"
                          className="px-8 py-3 rounded-xl bg-white text-pizza-dark font-display font-black text-sm hover:bg-pizza-primary hover:text-white transition-all flex items-center gap-3"
                        >
                           <span>Hire The Architect</span>
                           <ArrowRight size={18} />
                        </Link>
                        <p className="w-full text-pizza-primary font-black uppercase tracking-widest text-[9px] mt-2">
                           If you need a premium website, let’s build something extraordinary together.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-40 flex flex-col lg:flex-row items-center justify-between gap-12">
         <div className="max-w-xl space-y-6 text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl font-black text-pizza-dark dark:text-white">Our Mission</h2>
            <p className="text-lg text-pizza-dark/60 dark:text-white/60 leading-relaxed italic">
              "To make artisanal fusion pizza accessible to every Indian home, through digital education and a seamless app experience."
            </p>
            <div className="pt-6">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Join our Journey
                <ArrowRight size={20} />
              </Link>
            </div>
         </div>
         <div className="flex gap-4">
            <div className="w-24 h-48 bg-pizza-primary rounded-full" />
            <div className="w-24 h-64 bg-pizza-secondary rounded-full mt-10" />
            <div className="w-24 h-32 bg-pizza-dark rounded-full mt-20" />
         </div>
      </section>
    </div>
  );
}
