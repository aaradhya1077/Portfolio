'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiMail, FiMapPin, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import Typed from 'typed.js';
import { useMode } from '@/context/mode';

const IntroSection = () => {
  const { darkMode } = useMode(); 

  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: [
        'M.Tech. AI & Data Science Student',
        'Generative AI Beginner Learner',
        'AI & ML Developer',
        'Web & Healthcare App Developer'
      ],
      loop: true, 
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1800,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section 
      id="Home" 
      className={`min-h-screen relative flex items-center px-6 md:px-12 md:pl-72 py-24 scrollspy transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background visual elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-80 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
          <div>
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Seeking AI & ML Internships / Part-time Opportunities</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                Aaradhya Bajpai
              </span>
            </h1>
          </div>

          {/* Hero Profile Avatar Focus */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-pink-500 shadow-2xl shadow-cyan-500/20">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-slate-900">
              <Image
                src="/aaradhya_profile.jpg"
                alt="Aaradhya Bajpai"
                fill
                priority
                sizes="144px"
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Typing Subtitle */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-12 flex items-center text-cyan-400">
          <span className="typing"></span>
        </div>

        {/* Bio paragraph */}
        <p className={`text-base sm:text-lg max-w-2xl leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Motivated M.Tech. Artificial Intelligence & Data Science student at Devi Ahilya Vishwavidyalaya with hands-on experience building generative AI applications and smart healthcare platforms, validated by Microsoft AI certifications.
        </p>

        {/* Quick specs */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium mb-8">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${darkMode ? 'bg-slate-900 border border-slate-800 text-slate-300' : 'bg-white border border-slate-200 text-slate-700'}`}>
            <FiMapPin className="text-cyan-400 text-sm" />
            <span>Indore, Madhya Pradesh</span>
          </div>

          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${darkMode ? 'bg-slate-900 border border-slate-800 text-slate-300' : 'bg-white border border-slate-200 text-slate-700'}`}>
            <FiBookOpen className="text-purple-400 text-sm" />
            <span>DAVV University</span>
          </div>

          <a 
            href="https://github.com/aaradhya1077" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${darkMode ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400' : 'bg-white border border-slate-200 text-slate-700 hover:text-indigo-600'}`}
          >
            <FiGithub className="text-cyan-400 text-sm" />
            <span>github.com/aaradhya1077</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <FiArrowRight className="text-base" />
          </a>

          <a
            href="#contact"
            className={`px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 flex items-center gap-2 ${
              darkMode 
                ? 'border-slate-700 hover:border-cyan-400 bg-slate-900 text-slate-200 hover:text-cyan-400' 
                : 'border-slate-300 hover:border-indigo-600 bg-white text-slate-800 hover:text-indigo-600'
            }`}
          >
            <FiMail className="text-base text-cyan-400" />
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

