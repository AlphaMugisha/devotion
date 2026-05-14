'use client';

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Flame, 
  Moon, 
  Sun, 
  LogIn, 
  ArrowRight, 
  Compass, 
  Book, 
  Users, 
  Calendar,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark mode (simulated)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, we'd toggle a class on the html element
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-orange-100 selection:text-orange-900 ${isDarkMode ? 'dark bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Decorative Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[30%] w-48 h-48 bg-purple-400/5 rounded-full blur-3xl"></div>
        
        {/* Geometric Shapes */}
        <svg className="absolute top-20 left-[15%] opacity-[0.03]" width="100" height="100" viewBox="0 0 100 100">
          <polygon points="50,15 90,85 10,85" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-40 left-[40%] opacity-[0.03]" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
        <svg className="absolute top-[60%] right-[15%] opacity-[0.03] rotate-45" width="60" height="60" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="currentColor" />
        </svg>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-orange-500 p-2 rounded-lg text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
              <Flame size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              NGA-DEVOTION
            </span>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'About Us', 'Contact us', 'Platform Features'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all active:scale-90"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-orange-600/20 active:scale-95">
              <LogIn size={18} />
              <span>Portal Login</span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {['Home', 'About Us', 'Contact us', 'Platform Features'].map((item) => (
              <a key={item} href="#" className="text-lg font-medium text-slate-600 dark:text-slate-400">
                {item}
              </a>
            ))}
            <button className="flex items-center justify-center gap-2 bg-orange-600 text-white px-5 py-3 rounded-xl font-medium">
              <LogIn size={18} />
              <span>Portal Login</span>
            </button>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-12 pb-24 md:pt-24 md:pb-32 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-6 border border-emerald-200 dark:border-emerald-800/50">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                NGA DEVOTION V1.0
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 dark:text-white leading-[1.1] mb-6">
                The Future of <br />
                <span className="text-orange-600 bg-clip-text">Spiritual Growth</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                A next-generation devotion management platform designed to streamline classroom sermons, scripture tracking, and spiritual engagement — all in one unified system.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-slate-950/20 active:scale-95">
                  Enter Workspace
                  <ArrowRight size={20} />
                </button>
                <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-bold text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm active:scale-95">
                  <Compass size={20} />
                  Explore Platform
                </button>
              </div>

              {/* Quick Trust Stats */}
              <div className="mt-12 flex items-center gap-6 pt-12 border-t border-slate-200 dark:border-slate-800">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold`}>
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="block font-bold dark:text-white">Join 50+ Schools</span>
                  <span className="text-slate-500">Transforming spiritual education</span>
                </div>
              </div>
            </div>

            {/* Right Side: Mockup */}
            <div className="flex-1 relative w-full max-w-[600px]">
              <div className="relative z-10 bg-white dark:bg-slate-900 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-200/50 dark:border-slate-800 p-6 md:p-8 transform hover:-translate-y-2 transition-transform duration-500">
                {/* Mockup Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-bold text-xl dark:text-white">NGA Devotion Planner</h3>
                    <p className="text-slate-400 text-xs">Manage your school devotions</p>
                  </div>
                  <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    ONLINE
                  </div>
                </div>

                {/* Verse of the Day Card */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-6 border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">Verse of the Day</span>
                    <Book size={14} className="text-slate-400" />
                  </div>
                  <p className="text-sm font-medium italic mb-2 dark:text-slate-200">
                    "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil..."
                  </p>
                  <span className="text-xs text-slate-400 font-semibold">Jeremiah 29:11</span>
                </div>

                {/* Progress Card */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold dark:text-white">Sermon Prepared</span>
                      <span className="text-xs font-bold text-orange-600">85%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-xl shadow-sm">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Total Classes</span>
                      <span className="text-lg font-bold dark:text-white">24</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-xl shadow-sm">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Engagement</span>
                      <span className="text-lg font-bold text-emerald-600">+12%</span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Floating Element */}
                <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-4 rounded-2xl shadow-xl shadow-orange-600/30 hidden md:block animate-bounce-slow">
                   <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <span className="block text-xs font-bold">Upcoming Session</span>
                        <span className="text-[10px] opacity-80">Today @ 8:00 AM</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 blur-3xl -z-10 rounded-[3rem]"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="platform-features" className="bg-white dark:bg-slate-900/50 py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Everything you need to <span className="text-orange-600">elevate devotionals</span></h2>
              <p className="text-slate-600 dark:text-slate-400">Our platform is built to handle the complexities of school-wide spiritual management with ease and precision.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-orange-900/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Structured Sessions</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Tailored devotion plans grouped by specific classes and grades. Ensure age-appropriate spiritual growth across the entire student body.
                </p>
                <a href="#" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-orange-600">
                  Learn more <ChevronRight size={16} />
                </a>
              </div>

              {/* Feature 2 */}
              <div className="group bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-900/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Calendar size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Teacher Planning</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Dedicated tools for teachers to schedule sermons, pick bible verses, and prepare daily devotionals with a unified interface.
                </p>
                <a href="#" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-blue-600">
                  Learn more <ChevronRight size={16} />
                </a>
              </div>

              {/* Feature 3 */}
              <div className="group bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-900/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Complete Logs & Oversight</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Admin-level tracking to view past devotions, manage schedules, and monitor engagement across the school in real-time.
                </p>
                <a href="#" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-emerald-600">
                  Learn more <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </section>

        {/* Testimonials */}
        <section id="about-us" className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Trusted by <span className="text-orange-600">Visionary Educators</span></h2>
                <p className="text-slate-600 dark:text-slate-400">Hear from school administrators and teachers who have transformed their spiritual curriculum with NGA-DEVOTION.</p>
              </div>
              <div className="flex gap-2">
                 <button className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-colors">
                   <ChevronRight className="rotate-180" size={20} />
                 </button>
                 <button className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-colors">
                   <ChevronRight size={20} />
                 </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Jenkins",
                  role: "Head of Spiritual Life",
                  school: "St. Andrews Academy",
                  text: "The ability to sync scripture across 40 different classrooms simultaneously has saved our staff hours of coordination every week."
                },
                {
                  name: "David Chen",
                  role: "Principal",
                  school: "Lighthouse Christian School",
                  text: "Finally, a platform that treats spiritual growth with the same professional rigor as academic subjects. The analytics are a game-changer."
                },
                {
                  name: "Maria Rodriguez",
                  role: "Grade 5 Teacher",
                  school: "Grace International",
                  text: "The UI is so intuitive. I can prepare my morning sermon in minutes and focus more on my students and less on the logistics."
                }
              ].map((t, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex gap-1 text-orange-500 mb-6">
                    {[1,2,3,4,5].map(s => <Sun key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm dark:text-white">{t.name}</h4>
                      <p className="text-xs text-slate-500">{t.role}, {t.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing/Plans */}
        <section id="pricing" className="py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Simple, <span className="text-orange-600">Scaleable</span> Pricing</h2>
              <p className="text-slate-600 dark:text-slate-400">Choose the plan that fits your school's size and spiritual goals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-xl mb-2 dark:text-white">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold dark:text-white">$49</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {['Up to 10 Classes', 'Sermon Planner', 'Scripture Library', 'Email Support'].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-white dark:hover:bg-slate-800 transition-colors dark:text-white">Get Started</button>
              </div>

              {/* Pro */}
              <div className="bg-slate-950 dark:bg-orange-600 p-10 rounded-3xl border-4 border-orange-500/20 relative transform scale-105 shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Most Popular</div>
                <h3 className="font-bold text-xl mb-2 text-white">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">$129</span>
                  <span className="text-slate-400 dark:text-orange-100">/mo</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {['Unlimited Classes', 'Advanced Analytics', 'Custom Branding', 'Priority Support', 'Mobile App Access'].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/90">
                      <CheckCircle2 size={16} className="text-orange-400 dark:text-white" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-orange-600 dark:bg-white text-white dark:text-orange-600 font-bold hover:bg-orange-700 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-orange-600/20">Get Started</button>
              </div>

              {/* Enterprise */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-xl mb-2 dark:text-white">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold dark:text-white">Custom</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {['Multi-School Sync', 'SSO Integration', 'Dedicated Manager', 'Custom API Access'].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-white dark:hover:bg-slate-800 transition-colors dark:text-white">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 container mx-auto px-6">
          <div className="bg-orange-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-orange-600/20">
            {/* Animated Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">Ready to transform your <br /> school's devotion?</h2>
              <p className="text-orange-100 text-lg md:text-xl mb-12">Join hundreds of educators building a brighter, more spiritually engaged future for their students.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">Get Started Free</button>
                <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">Book a Demo</button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="contact-us" className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold dark:text-white">Frequently Asked <span className="text-orange-600">Questions</span></h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "Is NGA-DEVOTION compatible with my school's LMS?", a: "Yes, we offer seamless integrations with Google Classroom, Canvas, and most modern School Management Systems via our Pro and Enterprise plans." },
                { q: "Can we use our own curriculum or bible versions?", a: "Absolutely. While we provide a rich library of resources, you can upload your own sermons and select from over 50 bible translations." },
                { q: "What kind of support do you provide for teachers?", a: "We provide 24/7 technical support, monthly webinars for spiritual leads, and a comprehensive 'Teacher's Guide' knowledge base." },
                { q: "Is student data secure and private?", a: "Data security is our top priority. We are fully compliant with COPPA and FERPA regulations, ensuring all student information remains encrypted and private." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold dark:text-white">
                    {faq.q}
                    <ChevronRight size={18} className="group-open:rotate-90 transition-transform text-orange-600" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Flame size={20} className="text-orange-600" fill="currentColor" />
            <span className="font-bold text-lg tracking-tight dark:text-white">NGA-DEVOTION</span>
          </div>
          <p className="text-slate-500 dark:text-slate-500 text-sm mb-8">
            &copy; 2026 NGA-DEVOTION Platform. All rights reserved. <br />
            Built for spiritual excellence in education.
          </p>
          <div className="flex justify-center gap-6">
             {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
               <a key={social} href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors text-xs font-semibold">
                 {social}
               </a>
             ))}
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
