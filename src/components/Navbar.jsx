import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] shadow-sm" />
          <span className="font-semibold text-lg tracking-tight text-slate-900">Resumify</span>
        </div>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#templates" className="hover:text-slate-900 transition-colors">Templates</a>
          <a href="#how" className="hover:text-slate-900 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        {/* Right: CTAs */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 items-center rounded-2xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition">Login</button>
          <button className="inline-flex h-9 px-4 items-center rounded-2xl bg-[#2563EB] text-white shadow hover:shadow-md transition">Get Started</button>
        </div>
      </div>
    </header>
  );
}
