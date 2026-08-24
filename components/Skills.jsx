'use client'

import React, { useState } from 'react';
import { useMode } from '@/context/mode';
import { FiCode, FiCpu, FiGlobe, FiCloud, FiCheckCircle, FiSmile } from 'react-icons/fi';
import { SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss3, SiTensorflow, SiReact, SiVite, SiTailwindcss, SiExpress, SiGit, SiGithub, SiVercel, SiMicrosoftazure } from 'react-icons/si';

const SkillsSection = () => {
  const { darkMode } = useMode();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'genai', label: 'GenAI & LLMs' },
    { id: 'mldl', label: 'Machine Learning' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web & Tools' },
    { id: 'cloud', label: 'Cloud AI' },
    { id: 'soft', label: 'Soft Skills' }
  ];

  const skillGroups = [
    {
      category: 'genai',
      title: "Generative AI & LLMs",
      icon: FiCpu,
      skills: [
        { name: "Groq Cloud API", detail: "Ultra-low latency inference (gpt-oss, qwen)" },
        { name: "Google GenAI SDK", detail: "Gemini 1.5 Pro/Flash integration & fallback" },
        { name: "Prompt Engineering", detail: "Chain-of-thought, system persona design" },
        { name: "Multi-Persona Simulation", detail: "8 custom agent reaction modeling" }
      ]
    },
    {
      category: 'mldl',
      title: "Machine Learning & Analytics",
      icon: FiCpu,
      skills: [
        { name: "TensorFlow.js", icon: SiTensorflow, detail: "In-browser & Node neural networks" },
        { name: "LSTM Neural Networks", detail: "Multi-layer sequence forecasting" },
        { name: "Time-Series Forecasting", detail: "Multi-step price action prediction" },
        { name: "MinMaxScaler Normalization", detail: "Feature scale preprocessing" },
        { name: "Backtesting Quantitative Math", detail: "Sharpe Ratio, Win Rate, Max Drawdown" },
        { name: "Technical Indicators", detail: "RSI, MACD, Bollinger Bands, SMA, EMA" }
      ]
    },
    {
      category: 'languages',
      title: "Programming Languages",
      icon: FiCode,
      skills: [
        { name: "TypeScript", icon: SiTypescript, detail: "100% strict type safety" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, detail: "Modern async / promise architecture" },
        { name: "Python", icon: SiPython, detail: "AI / ML scripting, Flask web applications & backend APIs" },
        { name: "HTML5 / CSS3", icon: SiHtml5, detail: "Responsive layout & accessibility" },
        { name: "SQL", detail: "Relational query optimization" }
      ]
    },
    {
      category: 'web',
      title: "Web Technologies & Developer Tools",
      icon: FiGlobe,
      skills: [
        { name: "React 18", icon: SiReact, detail: "Component architecture & custom hooks" },
        { name: "Vite", icon: SiVite, detail: "Ultra-fast frontend build tooling" },
        { name: "Tailwind CSS", icon: SiTailwindcss, detail: "Modern responsive UI design" },
        { name: "Express", icon: SiExpress, detail: "RESTful API microservices" },
        { name: "Recharts", detail: "Dynamic AI analytics visualization" },
        { name: "Framer Motion", detail: "Fluid UI micro-animations" },
        { name: "Zod Schema", detail: "Runtime API input validation" },
        { name: "Vitest", detail: "Unit testing & test-driven development" },
        { name: "Git & GitHub", icon: SiGit, detail: "Version control & CI workflows" },
        { name: "Vercel", icon: SiVercel, detail: "Seamless production deployment" },
        { name: "REST APIs", detail: "Scalable backend integration" }
      ]
    },
    {
      category: 'cloud',
      title: "Cloud & Enterprise AI",
      icon: FiCloud,
      skills: [
        { name: "Microsoft Foundry", detail: "AI chat app prototyping & optimization" },
        { name: "Microsoft Azure", icon: SiMicrosoftazure, detail: "Azure AI Services & cloud solutions" },
        { name: "Microsoft Copilot Studio", detail: "Enterprise Copilot agent workflows" }
      ]
    },
    {
      category: 'soft',
      title: "Soft Skills & Professional Strengths",
      icon: FiSmile,
      skills: [
        { name: "Leadership", detail: "Head Girl student executive leadership" },
        { name: "Problem-Solving", detail: "Quantitative analytical mindset" },
        { name: "Cross-functional Coordination", detail: "Team alignment & project execution" },
        { name: "Public Speaking", detail: "Event hosting & presentations" },
        { name: "Time Management", detail: "Prioritization & delivery under deadlines" }
      ]
    }
  ];

  const filteredGroups = activeTab === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.category === activeTab);

  return (
    <section 
      id="skills" 
      className={`py-20 px-6 md:px-12 md:pl-72 scrollspy transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 text-cyan-500 mb-2 font-semibold tracking-wider uppercase text-sm">
            <FiCode className="text-xl" /> Technical Capabilities
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400' : 'text-slate-900'}`}>
            Skills & Competencies
          </h2>
          <p className={`mt-3 max-w-xl text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            AI application development, machine learning architecture, LLM orchestration, and enterprise web & cloud tools.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : darkMode 
                    ? 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800' 
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Groups Grid */}
        <div className="space-y-8">
          {filteredGroups.map((group, idx) => {
            const GroupIcon = group.icon;
            return (
              <div 
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/40">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl">
                    <GroupIcon />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon || FiCheckCircle;
                    return (
                      <div 
                        key={sIdx}
                        className={`p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 ${
                          darkMode 
                            ? 'bg-slate-900/80 border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900' 
                            : 'bg-white border-slate-200 hover:border-cyan-300 shadow-xs'
                        }`}
                      >
                        <SkillIcon className="text-cyan-400 text-lg mt-0.5 shrink-0" />
                        <div>
                          <p className={`font-semibold text-sm ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                            {skill.name}
                          </p>
                          <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            {skill.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
