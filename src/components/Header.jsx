import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Sparkles, Terminal } from 'lucide-react';

export default function Header({ compact = false }) {
  if (compact) {
    return (
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1"
            aria-label="Back to Hack Day Booth Directory"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold tracking-wider uppercase text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
                  NSTSDC
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">NST x ADYPU</span>
              </div>
              <p className="text-sm font-bold text-slate-900 leading-tight">Hacktoberfest Hack Day 2026</p>
            </div>
          </Link>

          <Link
            to="/"
            className="text-xs font-semibold text-slate-700 hover:text-orange-600 bg-slate-100 hover:bg-orange-50 px-3 py-1.5 rounded-md transition-colors border border-slate-200"
          >
            ← Booth Directory
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white border-b border-slate-200">
      {/* Top Navbar */}
      <div className="border-b border-slate-100 bg-slate-900 text-slate-200 text-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-wide text-orange-400">NSTSDC</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">NST x ADYPU, Pune</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Community Hack Day</span>
          </div>
        </div>
      </div>

      {/* Main Hero / Intro Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-7 pb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Official Event Directory</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hacktoberfest Hack Day <span className="text-orange-600">2026</span>
            </h1>

            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Welcome to the official booth directory for Hacktoberfest Hack Day, organized by NSTSDC at NST x ADYPU. Discover open-source organizations, explore active repositories, visit booth locations, and kickstart your first contributions.
            </p>
          </div>

          {/* Prominent Booth Timings Card */}
          <div className="shrink-0 w-full md:w-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 border-2 border-orange-200/80 rounded-xl p-4 sm:p-5 shadow-xs max-w-md">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-700 flex items-center gap-1.5 mb-2.5">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>Booth Timings</span>
              </div>
              
              <div className="space-y-1.5">
                <div className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="tabular-nums">11:00 AM – 4:00 PM</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Saturday, 24 October 2026</span>
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-2 pt-1 border-t border-orange-200/50">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>NST x ADYPU Campus, Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
