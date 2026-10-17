import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Heart, Terminal, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#12231C] border-t border-[#224233] text-[#A6C2B4] text-xs mt-16 relative overflow-hidden">
      {/* Top Mosaic Accent Strip */}
      <div className="mosaic-bar">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Institutional & Community Partners Showcase */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[#1E3B2D]">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7B9B8C]">
              Organized By
            </span>
            {/* White Pill Badge with NST & ADYPU Logos */}
            <div className="bg-white rounded-full px-4 py-2 shadow-sm flex items-center gap-3.5 border border-slate-200">
              <img
                src="/images/nstLogo.png"
                alt="Newton School of Technology"
                className="h-6 object-contain"
              />
              <span className="w-px h-5 bg-slate-300"></span>
              <img
                src="/images/adypuLogo.png"
                alt="Ajeenkya DY Patil University"
                className="h-5 object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7B9B8C]">Community</span>
              <img
                src="/images/nstsdc-logo.png"
                alt="NST SDC"
                className="h-7 object-contain drop-shadow-xs"
              />
            </div>
            <div className="h-6 w-px bg-[#264A39]"></div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7B9B8C]">Partner</span>
              <img
                src="/images/mlh-logo.png"
                alt="MLH"
                className="h-6 object-contain drop-shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
          {/* Col 1: About Event */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 bg-[#FF5757] rounded-xs"></div>
              <h3 className="text-base font-extrabold text-white font-display">
                Hacktoberfest Hack Day 2026
              </h3>
            </div>
            <p className="text-xs text-[#95B3A4] leading-relaxed max-w-md">
              A community celebration bringing together open-source enthusiasts, mentors, and student builders. Connect directly with organization maintainers at our physical booths and kickstart your open-source journey.
            </p>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-[#F5B041]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#55EFC4] animate-pulse"></span>
              <span className="font-mono font-bold">11:00 AM – 4:00 PM • Booths Active</span>
            </div>
          </div>

          {/* Col 2: Event Tracks */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span>Event Tracks</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#8BAEA0]">
              <li className="flex items-center gap-1.5">
                <span className="text-[#FF5757]">▸</span>
                <span>Open Source Booths</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#F5B041]">▸</span>
                <span>Community Tech Talks</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#4D96FF]">▸</span>
                <span>12-Hour Overnight Hackathon</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#55EFC4]">▸</span>
                <span>Swag &amp; Contributor Prizes</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Venue Information */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span>Venue</span>
            </h4>
            <div className="text-xs text-[#8BAEA0] space-y-1.5 leading-relaxed">
              <p className="font-semibold text-white">Newton School of Technology</p>
              <p>Ajeenkya DY Patil University Campus</p>
              <p>Lohegaon, Pune, Maharashtra 412105</p>
              <p className="text-[#7A9E8F] text-[11px]">India</p>
            </div>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-6 border-t border-[#1C382A] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#719182]">
          <p>
            © 2026 Newton School of Technology Software Development Club (NSTSDC). All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span>Built with passion for</span>
            <span className="text-[#FF5757]">♥</span>
            <span className="text-[#F1F3EC] font-semibold">Hacktoberfest 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
