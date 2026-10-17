import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { HelpCircle, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header compact={true} />

      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5 shadow-xs">
          <HelpCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold tracking-wider uppercase text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 mb-2">
          404 Not Found
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
          Organization Not Found
        </h1>

        <p className="text-sm text-slate-600 max-w-sm mb-6 leading-relaxed">
          The requested organization or booth profile does not exist or may have been updated in the directory.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white text-sm font-semibold transition-colors shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Booth Directory</span>
        </Link>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-400">
        Hacktoberfest Hack Day 2026 • NSTSDC at NST x ADYPU
      </footer>
    </div>
  );
}
