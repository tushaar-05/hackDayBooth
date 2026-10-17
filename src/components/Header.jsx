import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Calendar, Terminal, Sparkles, ChevronRight, Layers } from 'lucide-react';

export default function Header({ compact = false }) {
  if (compact) {
    return (
      <header className="sticky top-0 z-40 bg-[#14261F]/95 backdrop-blur-md border-b border-[#254637] shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#FF5757] rounded-xl p-1"
            aria-label="Back to Hack Day Booth Directory"
          >
            {/* White pill with NST & ADYPU Logos */}
            <div className="bg-white/95 px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-2 shadow-xs group-hover:bg-white transition-colors">
              <img
                src="/images/nstLogo.png"
                alt="Newton School of Technology"
                className="h-5 sm:h-6 object-contain"
              />
              <span className="w-px h-4 bg-slate-300"></span>
              <img
                src="/images/adypuLogo.png"
                alt="Ajeenkya DY Patil University"
                className="h-4 sm:h-5 object-contain"
              />
            </div>

            <div className="hidden sm:block border-l border-[#2E5241] pl-3">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF7675]">
                  NSTSDC
                </span>
                <span className="text-[10px] text-[#7A988B]">•</span>
                <span className="text-[10px] text-[#A5C2B4]">Hacktoberfest 2026</span>
              </div>
              <p className="text-xs font-bold text-[#F3F4EE] leading-tight">Booth Directory</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <img
              src="/images/mlh-logo.png"
              alt="Major League Hacking"
              className="h-6 object-contain hidden md:block opacity-90"
            />
            <Link
              to="/"
              className="text-xs font-bold text-[#F3F4EE] hover:text-white bg-[#203D31] hover:bg-[#2B5040] active:bg-[#1C362B] px-3.5 py-2 rounded-lg transition-colors border border-[#345B47] flex items-center gap-1.5"
            >
              <span>← All Booths</span>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="relative bg-[#172D24] border-b border-[#244536] overflow-hidden">
      {/* Decorative Pixel Grid Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#264D3C]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF5757]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Partnership & Organization Banner */}
      <div className="border-b border-[#224233] bg-[#12231C]/90 backdrop-blur-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          {/* Left: MLH Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/images/mlh-logo.png"
              alt="Major League Hacking (MLH)"
              className="h-6 sm:h-7 object-contain drop-shadow-xs"
            />
          </div>

          {/* Center: White Pill Badge with NST & ADYPU Logos */}
          <div className="bg-white rounded-full px-3 sm:px-4 py-1.5 shadow-md flex items-center gap-2 sm:gap-3.5 border border-slate-200">
            <img
              src="/images/nstLogo.png"
              alt="Newton School of Technology Logo"
              className="h-5 sm:h-6 object-contain"
            />
            <span className="w-px h-4 sm:h-5 bg-slate-300"></span>
            <img
              src="/images/adypuLogo.png"
              alt="Ajeenkya DY Patil University Logo"
              className="h-4 sm:h-5 object-contain"
            />
          </div>

          {/* Right: NSTSDC Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/images/nstsdc-logo.png"
              alt="NST SDC Logo"
              className="h-6 sm:h-7 object-contain drop-shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* Main Hacktoberfest Poster Style Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-10 relative">
        <div className="flex flex-col items-center text-center">
          
          {/* Mosaic "2026" Geometric Pixel Blocks */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 bg-[#13241C]/80 px-4 py-1.5 rounded-lg border border-[#2B4E3E]">
            <div className="flex gap-1">
              <span className="w-3 h-3 bg-[#4D96FF] rounded-xs inline-block"></span>
              <span className="w-3 h-3 bg-[#FF5757] rounded-xs inline-block"></span>
              <span className="w-3 h-3 bg-[#F5B041] rounded-xs inline-block"></span>
              <span className="w-3 h-3 bg-[#55EFC4] rounded-xs inline-block"></span>
            </div>
            <span className="font-mono text-base sm:text-lg font-extrabold tracking-widest text-[#F5B041]">
              2 0 2 6
            </span>
            <div className="flex gap-1">
              <span className="w-3 h-3 bg-[#F5B041] rounded-xs inline-block"></span>
              <span className="w-3 h-3 bg-[#55EFC4] rounded-xs inline-block"></span>
              <span className="w-3 h-3 bg-[#4D96FF] rounded-xs inline-block"></span>
              <span className="w-3 h-3 bg-[#FF5757] rounded-xs inline-block"></span>
            </div>
          </div>

          {/* Giant Retro Hacktoberfest Headline matching poster */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#FAF9F5] uppercase select-none drop-shadow-sm font-display leading-none">
            HACKTOBERFEST
          </h1>

          {/* Track subtitles bar: OSS TALKS | OSS BOOTHS | 12-HR HACKATHON | PRIZES */}
          <div className="mt-4 px-3 sm:px-6 py-2 rounded-full bg-[#1F3D30] border border-[#315A46] text-[#E4EDE7] font-mono text-[11px] sm:text-sm font-bold tracking-wider sm:tracking-widest flex items-center justify-center flex-wrap gap-2 shadow-xs">
            <span>OSS TALKS</span>
            <span className="text-[#FF5757]">•</span>
            <span className="text-[#F5B041] font-extrabold">OSS BOOTHS</span>
            <span className="text-[#FF5757]">•</span>
            <span>12-HR HACKATHON</span>
            <span className="text-[#FF5757]">•</span>
            <span>PRIZES</span>
          </div>

          <p className="mt-5 text-sm sm:text-base text-[#B0C8BC] max-w-2xl leading-relaxed">
            Welcome to the official Open Source Booth Directory for Hacktoberfest Hack Day 2026, hosted by <strong className="text-white">NSTSDC</strong> at <strong className="text-white">NST x ADYPU, Pune</strong>. Explore verified organizations, visit in-person booths, and start contributing.
          </p>
        </div>

        {/* Lower Banner Info Cards (Pune Location + Booth Timings + Hackathon Schedule) */}
        <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          
          {/* Card 1: Venue / Pune */}
          <div className="bg-[#1C362B] border border-[#2F5643] rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#284C3D] text-[#FF7675] flex items-center justify-center shrink-0 border border-[#37614E]">
              <MapPin className="w-5 h-5 text-[#FF7675]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-xs bg-[#4D96FF]"></span>
                <span className="w-2 h-2 rounded-xs bg-[#FF5757]"></span>
                <span className="w-2 h-2 rounded-xs bg-[#F5B041]"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAF9F5]">PUNE</span>
              </div>
              <p className="text-[11px] font-semibold text-[#8DAEA0] leading-snug">
                Newton School of Technology, Lohegaon, Pune, Maharashtra 412105, India
              </p>
            </div>
          </div>

          {/* Card 2: Prominently Highlighted Booth Timings */}
          <div className="bg-gradient-to-br from-[#244537] to-[#1C362B] border-2 border-[#F5B041] rounded-2xl p-4 flex items-start gap-3.5 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#F5B041] text-[#172D24] text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-bl-lg">
              Featured Activity
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#F5B041]/15 text-[#F5B041] flex items-center justify-center shrink-0 border border-[#F5B041]/40">
              <Clock className="w-5 h-5 text-[#F5B041]" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F5B041] block mb-0.5">
                OSS Booths Schedule
              </span>
              <p className="text-sm font-extrabold text-white leading-tight">
                11:00 AM – 4:00 PM
              </p>
              <p className="text-[11px] font-medium text-[#CFDEC6] mt-0.5">
                Saturday, 24 October 2026
              </p>
            </div>
          </div>

          {/* Card 3: Hackathon Dates & Overnight Details */}
          <div className="bg-[#1C362B] border border-[#2F5643] rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#284C3D] text-[#55EFC4] flex items-center justify-center shrink-0 border border-[#37614E]">
              <Calendar className="w-5 h-5 text-[#55EFC4]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAF9F5]">24-25 OCT</span>
                <span className="text-[10px] text-[#7A988B]">• Saturday – Sunday</span>
              </div>
              <p className="text-[11px] font-semibold text-[#8DAEA0] leading-snug">
                4:00 PM 24 Oct – 4:00 AM 25 Oct (12 Hours, Overnight Hackathon)
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Mosaic Bar */}
      <div className="mosaic-bar">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
