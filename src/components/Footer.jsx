import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          <div>
            <p className="font-semibold">Product</p>
            <ul className="mt-4 space-y-2 text-white/70">
              <li><a href="#templates" className="hover:text-white">Templates</a></li>
              <li><a href="#how" className="hover:text-white">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Resources</p>
            <ul className="mt-4 space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Resume Guide</a></li>
              <li><a href="#" className="hover:text-white">Interview Tips</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-4 space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>support@resumify.ai</li>
              <li>+1 (555) 000-1234</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Resumify. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-xl bg-white/10" />
            <span className="h-8 w-8 rounded-xl bg-white/10" />
            <span className="h-8 w-8 rounded-xl bg-white/10" />
          </div>
        </div>
      </div>
    </footer>
  );
}
