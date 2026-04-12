'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Plus, 
  Settings, 
  LogOut, 
  Search, 
  Edit3, 
  Trash2, 
  Eye,
  BarChart3,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { BLOG_POSTS, BlogPost } from '@/data/posts';

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-pizza-surface">
      {/* Sidebar */}
      <aside className="w-64 bg-pizza-dark text-white hidden md:flex flex-col p-6 sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-8 w-8 rounded-lg bg-pizza-primary flex items-center justify-center font-bold">S</div>
          <span className="font-display font-black tracking-tighter uppercase">Brand Admin</span>
        </div>

        <nav className="space-y-2 flex-1">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-pizza-primary/10 text-pizza-primary font-bold">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/60">
            <FileText size={20} />
            <span>Articles</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/60">
            <BarChart3 size={20} />
            <span>Analytics</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/60">
            <Users size={20} />
            <span>Team</span>
          </button>
        </nav>

        <div className="pt-6 border-t border-white/5 space-y-2">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/60">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <Link href="/" className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 transition-colors text-red-500">
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black text-pizza-dark">Content Hub</h1>
            <p className="text-pizza-dark/40 font-bold uppercase tracking-widest text-[10px] mt-1">Status: Operational & Secured</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            <span>Create New Post</span>
          </button>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {[
             { label: 'Total Posts', value: '30', icon: <FileText className="text-blue-500" /> },
             { label: 'Avg Read Time', value: '6 min', icon: <Eye className="text-purple-500" /> },
             { label: 'AdSense Health', value: 'Perfect', icon: <BarChart3 className="text-emerald-500" /> },
           ].map((stat, i) => (
             <div key={i} className="glass p-6 rounded-3xl flex items-center gap-6">
                <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl border border-pizza-dark/5">
                   {stat.icon}
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-pizza-dark/40">{stat.label}</p>
                   <p className="text-xl font-bold text-pizza-dark">{stat.value}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Post Management */}
        <div className="glass rounded-3xl overflow-hidden shadow-xl border border-pizza-dark/5">
           <div className="p-6 border-b border-pizza-dark/5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50">
              <h2 className="font-bold text-lg">Manage Articles</h2>
              <div className="relative group">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-pizza-dark/30 group-focus-within:text-pizza-primary transition-colors" size={16} />
                 <input 
                   type="text" 
                   placeholder="Search posts..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="h-10 pl-10 pr-4 rounded-xl border border-pizza-dark/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pizza-primary/20 transition-all"
                 />
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-pizza-dark/5 text-[10px] font-black uppercase tracking-widest text-pizza-dark/40">
                       <th className="px-6 py-4">Article Title</th>
                       <th className="px-6 py-4">Category</th>
                       <th className="px-6 py-4">Author</th>
                       <th className="px-6 py-4">Status</th>
                       <th className="px-6 py-4">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-pizza-dark/5">
                    {filteredPosts.map((post) => (
                      <tr key={post.slug} className="hover:bg-pizza-primary/5 transition-colors group">
                         <td className="px-6 py-4">
                            <span className="font-bold text-sm text-pizza-dark line-clamp-1">{post.title}</span>
                            <span className="text-[10px] text-pizza-dark/40 font-mono">{post.slug}</span>
                         </td>
                         <td className="px-6 py-4 text-xs">
                            <span className="px-3 py-1 rounded-full bg-pizza-primary/10 text-pizza-primary font-bold">{post.category}</span>
                         </td>
                         <td className="px-6 py-4 text-sm font-medium text-pizza-dark/60">{post.author}</td>
                         <td className="px-6 py-4">
                            <span className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-black uppercase tracking-wider">
                               <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                               Published
                            </span>
                         </td>
                         <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                               <button className="h-8 w-8 rounded-lg border border-pizza-dark/10 flex items-center justify-center hover:bg-pizza-primary hover:text-white hover:border-pizza-primary transition-all shadow-sm">
                                  <Edit3 size={14} />
                               </button>
                               <button className="h-8 w-8 rounded-lg border border-pizza-dark/10 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-sm">
                                  <Trash2 size={14} />
                               </button>
                            </div>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {filteredPosts.length === 0 && (
             <div className="p-20 text-center font-bold text-pizza-dark/20 text-xl tracking-tighter">No Articles Found</div>
           )}
        </div>
      </main>
    </div>
  );
}
