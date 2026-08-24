'use client'

import React from 'react';
import { useMode } from '@/context/mode';
import { FiAward, FiCheckCircle } from 'react-icons/fi';
import { SiMicrosoft } from 'react-icons/si';

const CertificationsSection = () => {
  const { darkMode } = useMode();

  const certifications = [
    {
      title: "Develop a generative AI chat app with Microsoft Foundry",
      issuer: "Microsoft",
      date: "Aug 2026",
      skills: ["Generative AI", "Microsoft Foundry", "Chat Application Prototyping"],
      badgeColor: "from-cyan-500 to-blue-600"
    },
    {
      title: "Plan and prepare to develop AI solutions on Azure",
      issuer: "Microsoft",
      date: "Aug 2026",
      skills: ["Azure AI Services", "Cloud AI Architecture", "Solution Planning"],
      badgeColor: "from-blue-600 to-indigo-600"
    },
    {
      title: "Optimize generative AI model performance with Microsoft Foundry",
      issuer: "Microsoft",
      date: "Aug 2026",
      skills: ["Model Optimization", "Latency Tuning", "LLM Performance"],
      badgeColor: "from-purple-600 to-pink-600"
    },
    {
      title: "Implement a responsible generative AI solution in Microsoft Foundry",
      issuer: "Microsoft",
      date: "Aug 2026",
      skills: ["Responsible AI", "AI Safety & Ethics", "Safety Guardrails"],
      badgeColor: "from-emerald-500 to-teal-600"
    },
    {
      title: "Drive business value with Microsoft Copilot solutions",
      issuer: "Microsoft",
      date: "Aug 2026",
      skills: ["Microsoft Copilot Studio", "Enterprise AI", "Workflow Automation"],
      badgeColor: "from-violet-600 to-purple-600"
    }
  ];

  return (
    <section 
      id="certifications" 
      className={`py-20 px-6 md:px-12 md:pl-72 scrollspy transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 text-cyan-500 mb-2 font-semibold tracking-wider uppercase text-sm">
            <FiAward className="text-xl" /> Verified Expertise
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400' : 'text-slate-900'}`}>
            Microsoft AI Certifications
          </h2>
          <p className={`mt-3 max-w-2xl text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Validated capabilities in cloud AI architecture, generative AI orchestration, model optimization, and enterprise Copilot solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg relative overflow-hidden flex flex-col justify-between ${
                darkMode 
                  ? 'bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-500/10' 
                  : 'bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xl'
              }`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${cert.badgeColor} opacity-10 rounded-bl-full pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <SiMicrosoft className="text-blue-400 text-sm" />
                    <span>{cert.issuer} Verified</span>
                  </div>
                  <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {cert.date}
                  </span>
                </div>

                <h3 className={`text-lg font-bold mb-3 line-clamp-2 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/50 flex flex-wrap gap-1.5">
                {cert.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <FiCheckCircle className="text-cyan-400 text-[10px]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
