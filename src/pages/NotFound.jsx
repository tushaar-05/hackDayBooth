import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f2f2eb] text-[#10201d]">
      <Header compact={true} />

      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-lg bg-[#f2a900] text-[#10201d] border-2 border-[#10201d] brutal-shadow flex items-center justify-center mb-5">
          <HelpCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#10201d] bg-[#e97b77] px-3 py-1 rounded border-2 border-[#10201d] brutal-shadow-sm mb-3">
          404 ERROR
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#10201d] mb-3 font-display">
          Booth Not Found
        </h1>

        <p className="text-sm text-[#34433f] max-w-sm mb-8 leading-relaxed">
          The requested organization or booth profile does not exist in the Hack Day directory.
        </p>

        <Link
          to="/"
          className="brutal-btn inline-flex items-center gap-2 px-6 py-3 rounded text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Booth Directory</span>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
