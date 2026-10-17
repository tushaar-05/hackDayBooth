import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#172D24] text-[#F1F3EC]">
      <Header compact={true} />

      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#234536] text-[#FF5757] flex items-center justify-center mb-5 border border-[#34604C] shadow-lg">
          <HelpCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#F5B041] bg-[#1E3B2F] px-3 py-1 rounded-full border border-[#2F5744] mb-3">
          404 ERROR
        </span>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 font-display">
          Organization Not Found
        </h1>

        <p className="text-sm text-[#8BAEA0] max-w-sm mb-7 leading-relaxed">
          The requested organization or booth profile does not exist in the Hack Day directory.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5757] hover:bg-[#FF6B6B] text-white text-sm font-bold transition-colors shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Booth Directory</span>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
