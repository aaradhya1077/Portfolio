'use client'

import React from 'react';
import { useMode } from '@/context/mode';
import { FiUsers, FiAward, FiCalendar, FiCheck } from 'react-icons/fi';

const LeadershipSection = () => {
  const { darkMode } = useMode();

  return (
    <section 
      id="leadership" 
      className={`py-20 px-6 md:px-12 md:pl-72 scrollspy transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 text-violet-500 mb-2 font-semibold tracking-wider uppercase text-sm">
            <FiUsers className="text-xl" /> Leadership & Impact
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400' : 'text-slate-900'}`}>
            Leadership & Achievements
          </h2>
          <p className={`mt-3 max-w-2xl text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Demonstrated administration, cross-functional team coordination, and student representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Head Girl Card */}
          <div 
            className={`rounded-2xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
              darkMode 
                ? 'bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 shadow-xl' 
                : 'bg-slate-50 border border-slate-200 hover:border-purple-300 shadow-md'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-lg shrink-0">
                <FiAward />
              </div>
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 inline-block mb-1">
                  Student Executive Council
                </span>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                  Head Girl
                </h3>
              </div>
            </div>

            <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Demonstrated strong leadership and administrative capabilities by coordinating the student body, managing school activities, and representing student interests to faculty and institutional management.
            </p>

            <ul className="space-y-2.5 pt-4 border-t border-slate-800/40">
              <li className="flex items-center gap-2.5 text-sm">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <FiCheck className="text-xs" />
                </span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Student Council Administration & Management</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <FiCheck className="text-xs" />
                </span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Faculty & Student Liaison Communication</span>
              </li>
            </ul>
          </div>

          {/* Event Coordination Card */}
          <div 
            className={`rounded-2xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
              darkMode 
                ? 'bg-slate-950/80 border border-slate-800 hover:border-pink-500/50 shadow-xl' 
                : 'bg-slate-50 border border-slate-200 hover:border-pink-300 shadow-md'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white text-2xl shadow-lg shrink-0">
                <FiCalendar />
              </div>
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 inline-block mb-1">
                  Organizational Leadership
                </span>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                  Event Coordination
                </h3>
              </div>
            </div>

            <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Actively managed academic and extracurricular events, highlighting strong organizational, cross-functional communication, logistics planning, and public speaking skills.
            </p>

            <ul className="space-y-2.5 pt-4 border-t border-slate-800/40">
              <li className="flex items-center gap-2.5 text-sm">
                <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                  <FiCheck className="text-xs" />
                </span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Academic & Technical Event Management</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                  <FiCheck className="text-xs" />
                </span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Public Speaking & Moderation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
