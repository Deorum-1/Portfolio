import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Laptop,
  Tablet,
  Smartphone,
  RotateCw,
  Lock,
  CheckCircle2,
  Code2,
  Layers,
  Sparkles
} from 'lucide-react';

export default function ProjectPreviewModal({ project, isOpen, onClose }) {
  const [deviceMode, setDeviceMode] = useState('desktop'); // desktop | tablet | mobile
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('preview'); // preview | details

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const reloadIframe = () => {
    setIsLoading(true);
    const iframe = document.getElementById('preview-iframe');
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const getDeviceWidthClass = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'w-[375px] max-w-full h-[620px] rounded-3xl border-4 border-slate-700 shadow-2xl';
      case 'tablet':
        return 'w-[768px] max-w-full h-[620px] rounded-2xl border-4 border-slate-700 shadow-2xl';
      case 'desktop':
      default:
        return 'w-full h-[640px] rounded-b-2xl border border-slate-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[95vh] bg-[#090d16] border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>{project.title}</span>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                  Live Preview
                </span>
              </h3>
            </div>
          </div>

          {/* Device Mockup Toggle Buttons */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 cursor-pointer transition-colors ${
                deviceMode === 'desktop'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View"
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>

            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 cursor-pointer transition-colors ${
                deviceMode === 'tablet'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>

            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 cursor-pointer transition-colors ${
                deviceMode === 'mobile'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Actions: Fullscreen / Open Tab / Close */}
          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Address Bar Simulation */}
        <div className="flex items-center justify-between px-5 py-2 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-2 flex-grow max-w-xl bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-slate-300 truncate">
              {project.liveUrl}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={reloadIframe}
              className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer"
              title="Reload preview"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
              <span className="text-[11px] font-mono">Reload</span>
            </button>
          </div>
        </div>

        {/* Live Device Frame Container */}
        <div className="grow bg-[#05070c] p-4 sm:p-6 flex flex-col items-center justify-center overflow-y-auto min-h-[500px]">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm pointer-events-none">
              <div className="w-10 h-10 border-3 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin mb-3"></div>
              <p className="text-xs text-slate-300 font-mono">
                Connecting to {project.title}...
              </p>
            </div>
          )}

          <div className={`transition-all duration-300 relative bg-slate-950 overflow-hidden ${getDeviceWidthClass()}`}>
            <iframe
              id="preview-iframe"
              src={project.liveUrl}
              title={project.title}
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>

        {/* Modal Bottom Architecture & Stack Strip */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-slate-500">Tech Stack:</span>
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live on Vercel Edge Network
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
