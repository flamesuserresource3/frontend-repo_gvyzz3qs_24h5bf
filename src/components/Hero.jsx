import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
            AI-powered resume creation
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Build Your Resume Smarter, Not Harder.
          </h1>
          <p className="mt-5 text-slate-600 text-lg max-w-xl">
            Use AI to craft professional, tailored resumes that stand out to recruiters.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-2xl bg-[#2563EB] text-white px-5 py-3 shadow hover:shadow-md transition">
              Start for Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#templates" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 text-slate-800 px-5 py-3 hover:bg-slate-50 transition">
              <Play className="h-4 w-4" />
              View Templates
            </a>
          </div>
        </div>

        {/* Right visual with Spline */}
        <div className="relative h-[420px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Gradient overlay that does not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E0F2FE]/70 via-white/40 to-white/80" />

          {/* Mockup card floating */}
          <div className="absolute left-6 right-6 bottom-6">
            <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4]" />
                  <div>
                    <p className="font-semibold text-slate-900">Resume Preview</p>
                    <p className="text-xs text-slate-500">ATS-Friendly • Auto-Formatted</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="h-6 w-20 rounded-full bg-slate-100" />
                  <span className="h-6 w-12 rounded-full bg-slate-100" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-xl bg-slate-100" />
                <div className="h-20 rounded-xl bg-slate-100" />
                <div className="h-20 rounded-xl bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
