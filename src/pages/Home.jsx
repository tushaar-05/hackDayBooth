import React from 'react';
import Header from '../components/Header';
import OrgGrid from '../components/OrgGrid';
import orgsData from '../data/orgs.json';
import { GitPullRequest, HelpCircle, Heart, Award } from 'lucide-react';

export default function Home() {
  const { orgs = [] } = orgsData;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header with event intro and prominent booth timings */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6">
        {/* Quick Participant Info Banner */}
        <section className="mt-6 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <GitPullRequest className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Beginner Friendly
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Every organization has dedicated good-first-issues and guides ready for first-time contributors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Meet the Mentors
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Visit the physical booths during Hack Day to get in-person guidance on code reviews and PRs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Non-Code Contributions
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Documentation, translations, test suites, and UI feedback are equally celebrated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Directory */}
        <OrgGrid orgs={orgs} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-12 text-slate-500 text-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-semibold text-slate-800">
              Hacktoberfest Hack Day 2026
            </p>
            <p className="mt-0.5 text-slate-500">
              Organized with pride by <span className="font-semibold text-orange-600">NSTSDC</span> at NST x ADYPU, Pune.
            </p>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Celebrating Open Source & Community</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
