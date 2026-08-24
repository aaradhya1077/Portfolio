'use client'

import React from 'react';
import { useMode } from '@/context/mode';
import { FiBookOpen, FiAward, FiMapPin, FiCalendar } from 'react-icons/fi';

const EducationSection = () => {
  const { darkMode } = useMode(); 

  const educationData = [
    {
      degree: "M.Tech. in Artificial Intelligence & Data Science",
      institution: "Devi Ahilya Vishwavidyalaya (DAVV)",
      location: "Indore, Madhya Pradesh",
      status: "Currently Pursuing",
      highlight: "Specializing in Deep Learning, Generative AI & Large Language Models",
      color: "from-cyan-500 to-blue-600"
    },
    {
      degree: "Class XII (CBSE)",
      institution: "CBSE Board",
      location: "Indore, Madhya Pradesh",
      status: "Completed",
      score: "87.8%",
      highlight: "Higher Secondary Education in Science & Mathematics",
      color: "from-purple-500 to-indigo-600"
    },
    {
      degree: "Class X (CBSE)",
      institution: "CBSE Board",
      location: "Indore, Madhya Pradesh",
      status: "Completed",
      score: "85.4% (427/500)",
      highlight: "Secondary School Certificate Examination",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section 
      id="education" 
      className={`py-20 px-6 md:px-12 md:pl-72 scrollspy transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 text-cyan-500 mb-2 font-semibold tracking-wider uppercase text-sm">
            <FiBookOpen className="text-xl" /> Academic Background
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400' : 'text-slate-900'}`}>
            Education & Qualifications
          </h2>
        </div>

        <div className="space-y-6">
          {educationData.map((item, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 border relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                darkMode 
                  ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 shadow-lg' 
                  : 'bg-white border-slate-200 hover:border-cyan-300 shadow-md'
              }`}
            >
              {/* Left Color Indicator Accent */}
              <div className={`absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b ${item.color}`} />

              <div className="pl-3 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.status}
                  </span>
                  {item.score && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <FiAward className="text-sm" /> Score: {item.score}
                    </span>
                  )}
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                  {item.degree}
                </h3>

                <p className="text-cyan-400 font-medium text-base mb-2">
                  {item.institution}
                </p>

                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.highlight}
                </p>
              </div>

              <div className={`flex flex-col gap-1.5 text-xs text-right border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6 border-slate-800/40 shrink-0 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <div className="flex items-center gap-1.5 justify-end">
                  <FiMapPin className="text-cyan-400" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

