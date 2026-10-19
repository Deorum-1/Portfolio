import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Palette, Sparkles } from 'lucide-react';
import { toggleSound, isSoundEnabled, playPopSound } from '../utils/audio';

export default function ThemeToggle() {
  const [audioActive, setAudioActive] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('cyber');
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'cyber';
    setTheme(saved);
  }, []);

  const setTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    playPopSound(750, 0.05);
  };

  const handleAudioToggle = () => {
    const enabled = toggleSound();
    setAudioActive(enabled);
  };

  return (
    <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 p-1 rounded-xl shadow-inner">
      {/* Sound Toggle */}
      <button
        onClick={handleAudioToggle}
        className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
          audioActive ? 'text-cyan-400 bg-cyan-950/60' : 'text-slate-400 hover:text-slate-200'
        }`}
        title={audioActive ? 'Mute UI Sound' : 'Enable Subtle UI Audio'}
      >
        {audioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
      </button>

      {/* Palette Selector */}
      <div className="relative">
        <button
          onClick={() => setPaletteOpen(!paletteOpen)}
          className="p-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer flex items-center gap-1"
          title="Change Theme Palette"
        >
          <Palette className="w-3.5 h-3.5 text-cyan-400" />
        </button>

        {paletteOpen && (
          <div className="absolute right-0 top-full mt-2 w-36 bg-slate-900 border border-slate-700/80 rounded-xl p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95">
            <button
              onClick={() => {
                setTheme('cyber');
                setPaletteOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                currentTheme === 'cyber' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span>Cyber Cyan</span>
            </button>
            <button
              onClick={() => {
                setTheme('emerald');
                setPaletteOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                currentTheme === 'emerald' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span>Emerald Mint</span>
            </button>
            <button
              onClick={() => {
                setTheme('amethyst');
                setPaletteOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                currentTheme === 'amethyst' ? 'bg-purple-500/20 text-purple-300 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
              <span>Amethyst Neon</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
