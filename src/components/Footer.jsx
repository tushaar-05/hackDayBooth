import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-[#10201d]">
      
      {/* Top Banner Bar */}
      <div className="bg-[#f7f7f2] border-b-2 border-[#10201d] py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-[#10201d]">
          <div className="flex items-center gap-2">
            <span className="font-extrabold uppercase">Hack Day 2026:</span>
            <span className="text-[#e53927] font-extrabold">Open Source belongs to everyone.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 uppercase">POWERED BY</span>
              <img src="/images/mlh.png" alt="MLH" className="h-6 object-contain" />
              <span>x</span>
              <img src="/images/devClub.png" alt="Developers Club" className="h-6 object-contain" />
            </div>

            <div className="hidden lg:block h-4 w-px bg-slate-300"></div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 uppercase">HOST INSTITUTIONS</span>
              <div className="bg-white px-2 py-0.5 rounded border border-[#10201d] flex items-center gap-2">
                <img src="/images/nstLogo.png" alt="NST" className="h-4 object-contain" />
                <span className="w-px h-3 bg-slate-300"></span>
                <img src="/images/adypuLogo.png" alt="ADYPU" className="h-3 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="bg-[#2e4742] text-[#f7f7f2] py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#3d5f58]">
            {/* Col 1 */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-display text-2xl font-extrabold text-white uppercase">
                  OPEN SOURCE BOOTHS
                </span>
              </div>
              <p className="text-xs text-[#cfdeda] leading-relaxed max-w-md">
                Official Hack Day open-source booth directory for Newton School of Technology x Ajeenkya DY Patil University, Pune. Organized by Developers Club in partnership with Major League Hacking (MLH).
              </p>
              <div className="mt-4 font-mono text-xs text-[#f1c40f]">
                ✦ Saturday, 24 October 2026 • Booths Active 11:00 AM – 4:00 PM
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-3">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs text-[#cfdeda]">
                <li>
                  <a href="#directory" className="hover:text-[#f18379] transition-colors">
                    ▸ 7 Featured Booths
                  </a>
                </li>
                <li>
                  <a href="#directory" className="hover:text-[#f18379] transition-colors">
                    ▸ Good First Issues
                  </a>
                </li>
                <li>
                  <span className="text-[#88baaf]">▸ 12-Hour Overnight Hackathon</span>
                </li>
                <li>
                  <span className="text-[#88baaf]">▸ Contributor Swag</span>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-3">
                Venue &amp; Location
              </h4>
              <div className="text-xs text-[#cfdeda] space-y-1 leading-relaxed">
                <p className="font-semibold text-white">Newton School of Technology</p>
                <p>Ajeenkya DY Patil University Campus</p>
                <p>Lohegaon, Pune, Maharashtra 412105</p>
                <p className="text-[#88baaf]">India</p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#88baaf] font-mono">
            <p>
              © 2026 Developers Club at NST x ADYPU.
            </p>
            <p>
              Celebrating Open Source with MLH &amp; Developers Club.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
