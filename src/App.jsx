import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiPromptLab from './components/AiPromptLab';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import { Search } from 'lucide-react';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 relative">
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <AiPromptLab />
        <Experience />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Floating Quick Command Pill (Bottom-Right) */}
      <button
        onClick={() => setIsCommandOpen(true)}
        className="fixed bottom-5 right-5 z-40 hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 shadow-xl backdrop-blur-md text-xs font-mono transition-all hover:scale-105 cursor-pointer group"
        title="Open Command Palette (Ctrl+K)"
      >
        <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
        <span>Quick Menu</span>
        <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-950 rounded border border-slate-700 text-slate-400">
          ⌘K
        </kbd>
      </button>
    </div>
  );
}

export default App;
