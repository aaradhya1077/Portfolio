'use client'

import IntroSection from "@/components/IntroSection";
import Sidenav from "@/components/Sidenav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import EducationSection from "@/components/education";
import CertificationsSection from "@/components/Certifications";
import LeadershipSection from "@/components/Leadership";
import ContactSection from "@/components/Contact";
import { ModeProvider } from "@/context/mode";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ModeProvider value={{ darkMode, toggleDarkMode }}>
      <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        <Sidenav profilePicUrl="/aaradhya_avatar.jpg" />

        <main className="w-full">
          <IntroSection />
          <About />
          <EducationSection />
          <SkillsSection />
          <Projects />
          <CertificationsSection />
          <LeadershipSection />
          <ContactSection />
        </main>
      </div>
    </ModeProvider>
  );
}

