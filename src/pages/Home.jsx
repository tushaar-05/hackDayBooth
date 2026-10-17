import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrgGrid from '../components/OrgGrid';
import orgsData from '../data/orgs.json';
import { GitPullRequest, Users, Trophy } from 'lucide-react';

export default function Home() {
  const { orgs = [] } = orgsData;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Official Hacktoberfest 2026 Header with NST & ADYPU badges */}
      <Header />

      {/* Main Content on clean white/light background */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        
        {/* Hack Day Highlights Bar */}
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <GitPullRequest className="w-5 h-5 text-[#4D96FF]" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  Beginner Friendly
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Every booth maintainer has curated Good First Issues prepared for first-time open-source contributors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                <Users className="w-5 h-5 text-[#FF5757]" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  In-Person Mentorship
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Get real-time code reviews, architecture discussions, and merge assistance right at the physical booth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                <Trophy className="w-5 h-5 text-[#F5B041]" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  Hacktoberfest Swag &amp; Track
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Your accepted contributions count towards global Hacktoberfest badges, MLH challenges, and hackathon prizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Directory */}
        <OrgGrid orgs={orgs} />

      </main>

      {/* Footer featuring NST, ADYPU, MLH & NSTSDC */}
      <Footer />
    </div>
  );
}
