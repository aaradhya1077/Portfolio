'use client'

import React, { useState } from 'react';
import { useMode } from '@/context/mode';
import { FiMail, FiMapPin, FiGithub, FiCopy, FiCheck, FiSend } from 'react-icons/fi';

const ContactSection = () => {
  const { darkMode } = useMode();
  const [copied, setCopied] = useState(false);
  const email = "aaradhyabajpai321@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 px-6 md:px-12 md:pl-72 scrollspy transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 text-cyan-500 mb-2 font-semibold tracking-wider uppercase text-sm">
            <FiMail className="text-xl" /> Get In Touch
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400' : 'text-slate-900'}`}>
            Let&apos;s Connect & Collaborate
          </h2>
          <p className={`mt-3 max-w-xl text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Currently seeking an internship or part-time opportunity in AI Engineering, Generative AI, or Data Science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div 
            className={`rounded-2xl p-6 text-center flex flex-col items-center justify-between transition-all duration-300 ${
              darkMode ? 'bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40' : 'bg-white border border-slate-200 hover:border-cyan-300 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl mb-4">
              <FiMail />
            </div>
            <h3 className="text-lg font-bold mb-1">Email</h3>
            <p className={`text-sm mb-4 break-all ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{email}</p>
            <div className="flex gap-2 w-full">
              <a 
                href={`mailto:${email}`}
                className="flex-1 py-2 px-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-slate-950 font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition duration-200"
              >
                <FiSend /> Send Email
              </a>
              <button 
                onClick={handleCopyEmail}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition duration-200 ${
                  darkMode ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                }`}
              >
                {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div 
            className={`rounded-2xl p-6 text-center flex flex-col items-center justify-between transition-all duration-300 ${
              darkMode ? 'bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40' : 'bg-white border border-slate-200 hover:border-cyan-300 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl mb-4">
              <FiGithub />
            </div>
            <h3 className="text-lg font-bold mb-1">GitHub Profile</h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>@aaradhya1077</p>
            <a 
              href="https://github.com/aaradhya1077"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition duration-200"
            >
              <FiGithub /> Visit Profile
            </a>
          </div>

          {/* Location Card */}
          <div 
            className={`rounded-2xl p-6 text-center flex flex-col items-center justify-between transition-all duration-300 ${
              darkMode ? 'bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40' : 'bg-white border border-slate-200 hover:border-cyan-300 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl mb-4">
              <FiMapPin />
            </div>
            <h3 className="text-lg font-bold mb-1">Location</h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Indore, Madhya Pradesh</p>
            <span className="w-full py-2 px-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5">
              Available for Onsite / Remote
            </span>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center text-xs text-slate-500 border-t border-slate-800/50 pt-8">
          <p>© {new Date().getFullYear()} Aaradhya Bajpai. Built with Next.js, React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
