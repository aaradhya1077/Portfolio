'use client'; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMode } from '@/context/mode';
import { FiHome, FiUser, FiCode, FiLayers, FiAward, FiBook, FiUsers, FiMail, FiGithub, FiSun, FiMoon } from 'react-icons/fi';

const Sidebar = ({ profilePicUrl = '/aaradhya_profile.jpg' }) => {
  const [activeLink, setActiveLink] = useState('Home');
  const { darkMode, toggleDarkMode } = useMode(); 
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { 
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scrollspy');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#Home', icon: FiHome },
    { name: 'About', href: '#about', icon: FiUser },
    { name: 'Education', href: '#education', icon: FiBook },
    { name: 'Skills', href: '#skills', icon: FiCode },
    { name: 'Projects', href: '#projects', icon: FiLayers },
    { name: 'Certifications', href: '#certifications', icon: FiAward },
    { name: 'Leadership', href: '#leadership', icon: FiUsers },
    { name: 'Contact', href: '#contact', icon: FiMail },
  ];

  return (
    <>
      {/* Mobile Topbar Toggle */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-40 px-4 py-3 flex items-center justify-between backdrop-blur-md border-b ${
        darkMode ? 'bg-slate-950/90 border-slate-800 text-white' : 'bg-white/90 border-slate-200 text-slate-900'
      }`}>
        <button 
          onClick={toggleNavbar}
          className="p-2 rounded-lg bg-slate-800/20 hover:bg-slate-800/40 text-cyan-400 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
          Aaradhya Bajpai
        </span>

        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg text-lg transition-colors ${
            darkMode ? 'bg-slate-800 text-amber-300' : 'bg-slate-100 text-indigo-600'
          }`}
          aria-label="Toggle theme"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Sidebar - Desktop & Mobile Drawer */}
      <aside className={`fixed top-0 bottom-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out flex flex-col justify-between p-5 border-r ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } ${
        darkMode 
          ? 'bg-slate-950/95 border-slate-800/80 text-slate-100' 
          : 'bg-white/95 border-slate-200/80 text-slate-800'
      }`}>
        <div>
          {/* Profile Card */}
          <div className="flex flex-col items-center text-center mt-2 mb-6">
            <div className="relative w-32 h-32 mb-3 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-pink-500 shadow-xl shadow-cyan-500/20">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                <Image
                  src={profilePicUrl}
                  alt="Aaradhya Bajpai"
                  fill
                  sizes="128px"
                  priority
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Aaradhya Bajpai
            </h2>
            <p className={`text-xs font-medium mt-0.5 ${darkMode ? 'text-cyan-400/90' : 'text-indigo-600'}`}>
              M.Tech AI & Data Science
            </p>
            <p className={`text-[11px] mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              DAVV, Indore
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-semibold' 
                      : darkMode 
                        ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-900' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`text-base ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between">
          <a
            href="https://github.com/aaradhya1077"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl transition-colors ${
              darkMode ? 'bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800' : 'bg-slate-100 text-slate-700 hover:text-indigo-600 hover:bg-slate-200'
            }`}
            title="GitHub Profile"
          >
            <FiGithub className="text-lg" />
          </a>

          <a
            href="mailto:aaradhyabajpai321@gmail.com"
            className={`p-2.5 rounded-xl transition-colors ${
              darkMode ? 'bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800' : 'bg-slate-100 text-slate-700 hover:text-indigo-600 hover:bg-slate-200'
            }`}
            title="Email Aaradhya"
          >
            <FiMail className="text-lg" />
          </a>

          <button
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-xl text-lg transition-colors flex items-center gap-1.5 px-3 text-xs font-semibold ${
              darkMode ? 'bg-slate-900 text-amber-300 hover:bg-slate-800' : 'bg-slate-100 text-indigo-600 hover:bg-slate-200'
            }`}
          >
            {darkMode ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

