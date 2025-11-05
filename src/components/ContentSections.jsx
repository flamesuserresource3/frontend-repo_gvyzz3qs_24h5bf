import React from 'react';
import { User, Wand2, Download, Share2, Sparkles, Layers, AlignLeft, Shield, Star } from 'lucide-react';

export default function ContentSections() {
  return (
    <main>
      {/* How It Works */}
      <section id="how" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">How It Works</h2>
            <p className="mt-3 text-slate-600">Three simple steps to create a professional, job-winning resume.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card icon={<User className=\"h-6 w-6 text-[#2563EB]\" />} title="Enter Your Details" desc="Add your experience, skills, and achievements — or import from LinkedIn." />
            <Card icon={<Wand2 className=\"h-6 w-6 text-[#06B6D4]\" />} title="Enhance with AI" desc="Let our AI refine your bullet points, tailor for roles, and fix wording." />
            <Card icon={<Share2 className=\"h-6 w-6 text-[#2563EB]\" />} title="Download or Share" desc="Export to PDF or share a link with a beautiful, responsive view." />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Packed with features that help you shine</h3>
              <p className="mt-3 text-slate-600">Everything you need to quickly build a resume that clears ATS and impresses humans.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#2563EB]" /> Smart job-matching keywords</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#06B6D4]" /> Clean, modern templates</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#2563EB]" /> One-click export to PDF</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard icon={<Sparkles className=\"h-6 w-6\" />} title="AI Suggestions" desc="Instant bullet improvements and tailored summaries." />
              <FeatureCard icon={<Layers className=\"h-6 w-6\" />} title="Multiple Templates" desc="Switch styles without rewriting your content." />
              <FeatureCard icon={<AlignLeft className=\"h-6 w-6\" />} title="Auto Formatting" desc="Perfect spacing, headings, and alignment." />
              <FeatureCard icon={<Shield className=\"h-6 w-6\" />} title="ATS-Friendly Design" desc="Optimized to pass applicant tracking systems." />
            </div>
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section id="templates" className="py-16 sm:py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Template Showcase</h3>
              <p className="mt-2 text-slate-600">Choose from clean, recruiter-approved layouts.</p>
            </div>
            <a href="#pricing" className="hidden sm:inline-flex h-10 items-center rounded-2xl px-4 border border-slate-300 text-slate-700 hover:bg-white bg-white shadow-sm">Get Started</a>
          </div>
          <div className="mt-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 min-w-max pr-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="group w-[280px] sm:w-[320px] flex-shrink-0">
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition transform group-hover:-translate-y-1 group-hover:shadow-lg">
                    <div className="h-44 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center">
                      <div className="h-28 w-20 bg-white rounded-md shadow-inner border border-slate-200" />
                    </div>
                    <div className="p-4">
                      <div className="h-2 w-24 rounded-full bg-slate-200" />
                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-full rounded-full bg-slate-100" />
                        <div className="h-2 w-5/6 rounded-full bg-slate-100" />
                        <div className="h-2 w-4/6 rounded-full bg-slate-100" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Loved by job seekers</h3>
            <p className="mt-2 text-slate-600">Real stories from people who landed interviews faster.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
                <div className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/80?img=${i + 10}`} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex text-[#F59E0B]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className={`h-4 w-4 ${s < t.stars ? '' : 'opacity-30'}`} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-3 text-slate-700">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Simple, transparent pricing</h3>
            <p className="mt-2 text-slate-600">Start free. Upgrade when you need more power.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 flex flex-col">
              <h4 className="text-xl font-semibold text-slate-900">Free</h4>
              <p className="mt-1 text-slate-600">Everything you need to get started.</p>
              <p className="mt-4 text-4xl font-extrabold text-slate-900">$0</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• 1 resume project</li>
                <li>• Basic AI suggestions</li>
                <li>• 3 templates</li>
                <li>• PDF export</li>
              </ul>
              <a href="#" className="mt-6 inline-flex justify-center rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 hover:bg-white shadow-sm">Choose Plan</a>
            </div>
            <div className="rounded-2xl p-[2px] bg-gradient-to-br from-[#2563EB] to-[#06B6D4]">
              <div className="rounded-2xl bg-white/90 p-6 h-full flex flex-col">
                <h4 className="text-xl font-semibold text-slate-900">Pro</h4>
                <p className="mt-1 text-slate-700">For serious job seekers.</p>
                <p className="mt-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">$9/mo</p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li>• Unlimited resumes</li>
                  <li>• Advanced AI rewrites</li>
                  <li>• All templates + custom colors</li>
                  <li>• Priority support</li>
                </ul>
                <a href="#" className="mt-6 inline-flex justify-center rounded-2xl bg-[#2563EB] px-4 py-3 text-white shadow hover:shadow-md">Choose Plan</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <div className="rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-10 sm:p-14 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
            <div className="relative">
              <h3 className="text-white text-2xl sm:text-3xl font-bold">Ready to Build Your Professional Resume?</h3>
              <p className="mt-2 text-white/90">Join thousands using AI to land interviews faster.</p>
              <a href="#pricing" className="mt-6 inline-flex items-center rounded-2xl bg-white text-slate-900 px-5 py-3 shadow">
                Start Now — It’s Free
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#E0F2FE] to-white flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#E0F2FE] to-white flex items-center justify-center text-[#2563EB]">
        {icon}
      </div>
      <h5 className="mt-3 font-semibold text-slate-900">{title}</h5>
      <p className="mt-1 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

const testimonials = [
  { name: 'Ava Thompson', role: 'Product Manager', stars: 5, quote: 'The AI suggestions were spot on. I got two interviews within a week.' },
  { name: 'Marcus Lee', role: 'Software Engineer', stars: 5, quote: 'Clean templates and super fast. Best resume tool I’ve tried.' },
  { name: 'Priya Patel', role: 'Data Analyst', stars: 5, quote: 'Loved how easy it was to tailor my resume for different roles.' },
];
