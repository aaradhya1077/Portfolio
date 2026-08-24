"use client";
import React from "react";
import Image from "next/image";
import { useMode } from "@/context/mode";
import { FiLayers, FiGithub, FiExternalLink, FiTrendingUp, FiCpu, FiCheckCircle } from "react-icons/fi";

const Projects = () => {
  const { darkMode } = useMode();

  const projectsData = [
    {
      title: "Apex Stock AI",
      subtitle: "TypeScript Neural Stock Prediction & Technical Analysis Engine",
      banner: "/apex_stock_ai.jpg",
      repo: "https://github.com/aaradhya1077/Stock-Market-Prediction",
      tech: ["TypeScript", "React 18", "Vite", "TensorFlow.js", "Express", "Tailwind CSS", "Recharts", "Zod", "Vitest"],
      metrics: [
        { label: "Confidence Bounds", value: "95%" },
        { label: "R² Accuracy Score", value: "98.4%" },
        { label: "Engine Type", value: "Multi-Layer LSTM" }
      ],
      highlights: [
        "Engineered an elite-level full-stack stock market prediction suite in 100% strict TypeScript, utilizing TensorFlow.js multi-layer LSTM neural networks to forecast multi-step price action with 95% confidence bounds.",
        "Developed a zero-dependency high-performance technical analysis library computing SMA, EMA, RSI, MACD, and Bollinger Bands, driving an automated AI Trade Signal recommendation engine (STRONG BUY to STRONG SELL).",
        "Architected a walk-forward strategy backtesting engine evaluating quantitative trades to compute Sharpe Ratio, Win Rate, Max Drawdown, and model regression metrics (MAE, RMSE, R² score = 98.4%).",
        "Implemented an Express REST API backend with Zod schema validation, a dark TradingView-inspired React dashboard with dynamic hyperparameter tuning, and a comprehensive Vitest unit test suite."
      ]
    },
    {
      title: "Aaradhya Social Mirror",
      subtitle: "AI Social Perception Engine & Simulator",
      banner: "/social_mirror.jpg",
      repo: "https://github.com/aaradhya1077",
      tech: ["React", "Vite", "Tailwind CSS", "Groq API", "Google GenAI SDK", "Framer Motion", "Web Speech API"],
      metrics: [
        { label: "AI Agent Personas", value: "8 Custom" },
        { label: "Inference Engine", value: "Groq Cloud + Gemini" },
        { label: "Risk Gauge", value: "0–100% Post Score" }
      ],
      highlights: [
        "Engineered a full-stack social media simulation platform that evaluates post risk (0–100%) and models contextual reactions across 8 custom AI agent personas prior to public publishing.",
        "Architected a resilient, dual-engine AI backend utilizing Groq Cloud API (gpt-oss, qwen) for ultra-low latency inference, implementing Google Gemini API as an intelligent fallback layer.",
        "Integrated the Web Speech API (TTS) for real-time voice synthesis and built automated pipelines for JSON simulation audit report generation.",
        "Designed a highly responsive and animated user interface using React and Tailwind CSS, deploying the production build seamlessly to Vercel."
      ]
    },
    {
      title: "Aradhya MedSched",
      subtitle: "Smart Clinical Healthcare & Medicine Reminder Platform",
      banner: "/medsched.jpg",
      repo: "https://github.com/aaradhya1077/Aradhya-MedSched",
      tech: ["Python (Flask)", "Tailwind CSS", "HTML5", "Email Alerts", "WhatsApp API", "PharmEasy API"],
      metrics: [
        { label: "Notification Pipeline", value: "Email + WhatsApp" },
        { label: "Dosage Timeline", value: "3-Day Interactive" },
        { label: "Pharmacy Refills", value: "PharmEasy 1-Click" }
      ],
      highlights: [
        "Clinical Healthcare UI: Engineered a hospital-grade smart medicine reminder application featuring a modern clinical design system, soft slate backgrounds (#F8FAFC), ocean sky blue (#0284C7), and medical teal (#0D9488) glassmorphic accents.",
        "Multi-Channel Notification Pipeline: Automated dosage reminder system supporting Email alerts and WhatsApp integration, featuring an interactive 3-day timeline (Today, Tomorrow, Day 3) and Next Up vs. Completed status tracking.",
        "Digital Health Vault & Pharmacy Refills: Secure drag-and-drop prescription document vault alongside a verified medicine search directory integrated with PharmEasy for 1-click medicine ordering.",
        "Dynamic Patient Management: Integrated patient profile switching (Priya Sharma, Rahul Verma, Ananya Kapoor) tailored for clinical demo sessions."
      ]
    }
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-6 md:px-12 md:pl-72 scrollspy transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 text-cyan-500 mb-2 font-semibold tracking-wider uppercase text-sm">
            <FiLayers className="text-xl" /> Portfolio Showcase
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold ${darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400" : "text-slate-900"}`}>
            Featured AI Engineering Projects
          </h2>
          <p className={`mt-3 max-w-xl text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Generative AI simulators, clinical healthcare platforms, and machine learning stock prediction systems.
          </p>
        </div>

        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 shadow-xl ${
                darkMode 
                  ? "bg-slate-900/90 border-slate-800 hover:border-cyan-500/40" 
                  : "bg-white border-slate-200 hover:border-cyan-300 shadow-slate-200"
              }`}
            >
              {/* Top Banner Image Container */}
              <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden bg-slate-950">
                <Image
                  src={project.banner}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={idx === 0}
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
                
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                  <div>
                    <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md inline-block mb-1.5">
                      Featured Project #{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-medium mt-1 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-cyan-500 text-white hover:text-slate-950 border border-slate-700 font-semibold text-xs flex items-center gap-2 backdrop-blur-md transition-all duration-200 shrink-0 self-start sm:self-auto"
                  >
                    <FiGithub className="text-sm" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8">
                {/* Highlights list */}
                <div className="mb-6 space-y-3">
                  {project.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm">
                      <FiCheckCircle className="text-cyan-400 text-base mt-0.5 shrink-0" />
                      <p className={darkMode ? "text-slate-300 leading-relaxed" : "text-slate-700 leading-relaxed"}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Metrics Pill Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center sm:text-left">
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{m.label}</p>
                      <p className="text-lg font-extrabold text-cyan-400">{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                    Technologies & Tools:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                          darkMode 
                            ? "bg-slate-800 text-slate-200 border border-slate-700" 
                            : "bg-slate-100 text-slate-800 border border-slate-200"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

