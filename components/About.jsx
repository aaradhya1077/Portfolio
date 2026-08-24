'use client'

import React from 'react';
import { useMode } from '@/context/mode';
import { FiUser, FiCpu, FiLayers, FiActivity } from 'react-icons/fi';

const About = () => {
  const { darkMode } = useMode();

  const highlights = [
    {
      icon: FiCpu,
      title: "Generative AI & LLMs",
      desc: "LLM orchestration, prompt engineering, multi-persona agent simulations, Groq Cloud API & Google GenAI SDK."
    },
    {
      icon: FiActivity,
      title: "Machine Learning & Analytics",
      desc: "TensorFlow.js sequence networks, time-series forecasting, quantitative backtesting math, indicators (RSI, MACD, Bollinger Bands)."
    },
    {
      icon: FiLayers,
      title: "Web Application Development",
      desc: "React 18, Vite, Python Flask, TypeScript, Express REST APIs, Tailwind CSS, Recharts, Zod schema validation."
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-20 px-6 md:px-12 md:pl-72 scrollspy transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 text-cyan-500 mb-2 font-semibold tracking-wider uppercase text-sm">
            <FiUser className="text-xl" /> About Me
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400' : 'text-slate-900'}`}>
            AI & Data Science Beginner & Learner
          </h2>
        </div>

        <div className={`p-8 rounded-2xl mb-12 border ${
          darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
        }`}>
          <blockquote className="text-lg sm:text-xl font-medium leading-relaxed mb-4 text-cyan-400">
            &ldquo;Building generative AI applications, quantitative modeling tools, and clinical healthcare platforms that bridge research with practical application.&rdquo;
          </blockquote>
          
          <p className={`text-base leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Motivated M.Tech. Artificial Intelligence & Data Science student at Devi Ahilya Vishwavidyalaya (DAVV), Indore with hands-on experience building generative AI applications and smart web platforms, validated by Microsoft AI certifications. Skilled in AI prototyping, LLM orchestration, Python Flask, and modern front-end development.
          </p>
          
          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Combines a quick-learning aptitude with proven leadership experience, actively seeking an internship or part-time opportunity to apply engineering skills and contribute effectively to a professional, data-driven environment.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-slate-950/50 border-slate-800 hover:border-cyan-500/50' 
                    : 'bg-slate-50 border-slate-200 hover:border-cyan-300 shadow-sm'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl mb-4">
                  <Icon />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

