import React, { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'landing' | 'website' | 'webapp'>('all');

  const projects = [
    {
      id: '1',
      titleBn: 'স্মার্ট ল্যান্ডিং পেজ (স্মার্টওয়াচ বিক্রয় পেজ)',
      titleEn: 'Smart Gadget Sales Landing Page',
      category: 'landing',
      image: 'https://images.unsplash.com/photo-1556742049-0a675409956b?auto=format&fit=crop&w=800&q=80',
      descriptionBn: 'পিক্সেল সেটআপ, ইনস্ট্যান্ট ক্যাশ অন ডেলিভারি ফর্ম ও অর্ডার ড্যাশবোর্ড সমৃদ্ধ ৳১,০০০ টাকার স্মার্ট ল্যান্ডিং পেজ।',
      descriptionEn: 'High-converting sales landing page with Meta pixel setup and admin order dashboard.',
      tags: ['Landing Page', 'Order Dashboard', 'Meta Pixel', 'Responsive'],
      demoUrl: '#',
    },
    {
      id: '2',
      titleBn: 'ফুল ই-কমার্স ওয়েবসাইট (কুরিয়ার ও ফ্রড চেক ইন্টিগ্রেশন)',
      titleEn: 'Full E-Commerce Shop & Courier Integration',
      category: 'website',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80',
      descriptionBn: 'স্টিডফাস্ট কাস্টমার ফ্রড চেক, অটো কুরিয়ার বুকিং ও ইনভেন্টরি ড্যাশবোর্ড সহ ৳১০,০০০ টাকার ই-কমার্স ওয়েবসাইট।',
      descriptionEn: 'Full e-commerce website with Steadfast customer fraud checker and courier API integration.',
      tags: ['Full Website', 'Steadfast Fraud Check', 'Courier API', 'Stock Dashboard'],
      demoUrl: '#',
    },
    {
      id: '3',
      titleBn: 'কাস্টম এডটেক লার্নিং অ্যান্ড স্টুডেন্ট পোর্টাল (Web App)',
      titleEn: 'Custom EdTech Learning & Student Portal (Web App)',
      category: 'webapp',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      descriptionBn: 'TanStack Start & Node.js ফ্রেমওয়ার্কে নির্মিত রিয়েল-টাইম ক্লাস, কুইজ ও রিপোর্টস সমৃদ্ধ কাস্টম ওয়েব অ্যাপ।',
      descriptionEn: 'Scalable TanStack Web App for online learning with multi-user admin controls.',
      tags: ['TanStack Start', 'React', 'Node.js', 'PostgreSQL'],
      demoUrl: '#',
    },
    {
      id: '4',
      titleBn: 'ক্লথিং ও ফ্যাশন ব্র্যান্ড ই-কমার্স ওয়েবসাইট',
      titleEn: 'Fashion Brand Online Store (Full Website)',
      category: 'website',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      descriptionBn: 'ফ্রি সাবডোমেইন ও হোস্টিং সহ কাস্টমাইজযোগ্য মেগা ক্যাটাগরি ই-কমার্স শপ।',
      descriptionEn: 'Fashion brand e-commerce website with free subdomain, hosting, and pixel setup.',
      tags: ['Full Website', 'Free Hosting', 'Meta Pixel', 'Order Dashboard'],
      demoUrl: '#',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Folder className="w-3.5 h-3.5" />
            <span>{t('আমাদের সম্প্রতি তৈরি কাজসমূহ', 'Our Recent Projects')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('আমরা যেসব ওয়েবসাইট, ল্যান্ডিং পেজ ও ', 'Showcasing Our Recent ')}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('ওয়েব অ্যাপ তৈরি করেছি', 'Websites & Landing Pages')}
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t(
              'বিভিন্ন ক্লায়েন্টদের জন্য নির্মিত আমাদের কিছু হাই-পারফরম্যান্স ওয়েবসাইট, ল্যান্ডিং পেজ এবং ওয়েব অ্যাপ।',
              'A showcase of custom websites, high-converting landing pages, and web apps delivered for our clients.'
            )}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', labelBn: 'সব প্রজেক্ট', labelEn: 'All Projects' },
            { id: 'landing', labelBn: 'ল্যান্ডিং পেজ', labelEn: 'Landing Pages' },
            { id: 'website', labelBn: 'ফুল ওয়েবসাইট', labelEn: 'Full Websites' },
            { id: 'webapp', labelBn: 'ওয়েব অ্যাপ (Web App)', labelEn: 'Web Apps' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {t(tab.labelBn, tab.labelEn)}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-panel overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t(project.titleBn, project.titleEn)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t(project.descriptionBn, project.descriptionEn)}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 text-cyan-400 text-[11px] font-mono border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => {
                    const text = encodeURIComponent(`হ্যালো Hhaq Plus IT! আমি "${project.titleBn}" এর মতো একটি ল্যান্ডিং পেজ / ওয়েবসাইট বানাতে চাই।`);
                    window.open(`https://wa.me/8801602867954?text=${text}`, '_blank');
                  }}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-500/40 text-xs font-bold text-cyan-300 transition-colors flex items-center justify-center gap-2"
                >
                  <span>{t('এই ধরনের ডেমোর জন্য ডাইরেক্ট নক দিন (01602867954)', 'Inquire Demo on WhatsApp')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
