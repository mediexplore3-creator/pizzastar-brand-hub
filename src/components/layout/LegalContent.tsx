import { ReactNode } from "react";

export default function LegalContent({ title, children, lastUpdated }: { title: string, children: ReactNode, lastUpdated?: string }) {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
       {lastUpdated && (
         <p className="text-[10px] font-black uppercase tracking-widest text-pizza-primary mb-2">Last Updated: {lastUpdated}</p>
       )}
      <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-12">
        {title}
      </h1>
      <div className="prose prose-lg prose-invert prose-headings:font-display prose-headings:font-black prose-p:leading-relaxed prose-p:text-white/70 prose-li:text-white/70 prose-strong:text-white">
        {children}
      </div>
    </div>
  );
}
