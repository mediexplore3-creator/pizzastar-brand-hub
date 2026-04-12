import { BLOG_POSTS } from "@/data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Metadata } from "next";
import ShareActions from "@/components/blog/ShareActions";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Star Pizza Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": "2026-10-24T08:00:00+08:00",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "description": post.excerpt
  };

  return (
    <article className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Link href="/blog" className="inline-flex items-center gap-2 text-pizza-primary font-bold text-sm mb-12 hover:-translate-x-2 transition-transform">
        <ArrowLeft size={16} />
        <span>Back to Blog</span>
      </Link>

      <div className="space-y-8 mb-12">
        <div className="flex items-center gap-2">
           <span className="bg-pizza-primary/10 text-pizza-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
            {post.category}
           </span>
        </div>
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pizza-dark/30 dark:text-white/30 mb-8">
        <Link href="/" className="hover:text-pizza-primary transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-pizza-primary transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-pizza-dark/60 dark:text-white/60 truncate max-w-[200px]">{post.category}</span>
      </nav>

      <h1 className="font-display text-4xl md:text-6xl font-black text-pizza-dark dark:text-white leading-tight">
        {post.title}
      </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-pizza-dark/40 dark:text-white/40 uppercase tracking-widest">
           <div className="flex items-center gap-2"><Calendar size={18} /> {post.date}</div>
           <div className="flex items-center gap-2"><User size={18} /> {post.author}</div>
           <div className="flex items-center gap-2"><span>•</span> <span>6 min read</span></div>
        </div>
      </div>

      <div className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
         <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-16">
        {/* Content */}
        <div 
          className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-black prose-p:leading-relaxed prose-blockquote:border-pizza-primary prose-blockquote:bg-pizza-primary/5 prose-blockquote:p-6 prose-blockquote:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Sidebar / Sharing */}
        <aside className="space-y-12">
           <div className="sticky top-32 space-y-8">
              <div className="space-y-4">
                 <h4 className="text-xs font-black uppercase tracking-widest text-pizza-dark/40">Share Slice</h4>
                 <ShareActions title={post.title} />
              </div>

              {/* Sidebar Ad */}
              <div className="aspect-[3/4] rounded-2xl glass flex flex-col items-center justify-center p-6 text-center space-y-4">
                 <span className="text-[10px] font-bold text-pizza-primary/20 uppercase tracking-widest">Ad Slot</span>
                 <p className="text-xs font-bold text-pizza-dark/40">Recommended for you</p>
              </div>

              <div className="space-y-4">
                 <h4 className="text-xs font-black uppercase tracking-widest text-pizza-dark/40">Download App</h4>
                 <Link href="/download" className="block p-4 rounded-2xl bg-pizza-primary text-white text-center font-bold text-sm shadow-lg hover:brightness-110 transition-all">
                    Get Exclusive Hub Deals
                 </Link>
              </div>
           </div>
        </aside>
      </div>

      {/* Suggested / Internal Linking */}
      <section className="mt-32 pt-20 border-t border-pizza-dark/5">
         <h3 className="font-display text-3xl font-black mb-12">Suggested for You</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2).map((p, i) => (
              <Link key={i} href={`/blog/${p.slug}`} className="group glass p-6 rounded-[2rem] flex items-center gap-6 hover:shadow-xl transition-all">
                 <div className="relative h-20 w-20 rounded-2xl overflow-hidden shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                 </div>
                 <div className="min-w-0">
                    <h4 className="font-bold text-pizza-dark dark:text-white line-clamp-2 leading-tight group-hover:text-pizza-primary transition-colors">
                       {p.title}
                    </h4>
                    <p className="text-[10px] font-bold text-pizza-dark/40 uppercase tracking-widest mt-2">{p.category}</p>
                 </div>
              </Link>
            ))}
         </div>
      </section>
    </article>
  );
}
