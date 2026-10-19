import React, { useState } from 'react';
import {
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCw,
  Terminal,
  Layers,
  ArrowRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export default function AiPromptLab() {
  const [selectedCase, setSelectedCase] = useState('schema');
  const [promptMode, setPromptMode] = useState('engineered'); // 'naive' | 'engineered'
  const [isSimulating, setIsSimulating] = useState(false);

  const cases = {
    schema: {
      title: "Strict JSON Schema Extraction",
      tagline: "Extracting structured customer requirements from messy human descriptions",
      naivePrompt: `Extract the project requirements and budget from this email: "Hey Feranmi, we need a 5-page real estate site built with React and Tailwind. Our budget is around 4.5 million Naira and we need it by next month." Format as JSON.`,
      naiveOutput: `{
  "pages": 5,
  "tech": ["React", "Tailwind"],
  "budget": "around 4.5 million Naira",
  "timeline": "next month"
}
// ⚠️ Note: budget is an unparsed string, timeline has no ISO date, no schema validation, prone to drift`,
      engineeredPrompt: `<system>
You are an expert requirements parser. Output strictly valid JSON conforming to the RequirementPayload schema. Never output markdown wraps or conversational chatter.
</system>

<context>
Currency: NGN (Nigerian Naira)
Target Date Calculation Reference: ISO-8601
</context>

<schema>
{
  "projectType": "string",
  "pageCount": "integer",
  "techStack": ["string"],
  "budget": { "amount": "number", "currency": "string" },
  "deadlineIso": "string (YYYY-MM-DD)",
  "validationStatus": "VALID"
}
</schema>

<input>
"Hey Feranmi, we need a 5-page real estate site built with React and Tailwind. Our budget is around 4.5 million Naira and we need it by next month."
</input>`,
      engineeredOutput: `{
  "projectType": "Real Estate Platform",
  "pageCount": 5,
  "techStack": ["React.js", "Tailwind CSS"],
  "budget": {
    "amount": 4500000,
    "currency": "NGN"
  },
  "deadlineIso": "2026-11-19",
  "validationStatus": "VALID"
}
// ✓ 100% Schema validation passed, strongly-typed numeric values, zero hallucinations.`,
      metrics: {
        accuracy: { naive: '64%', engineered: '99.8%' },
        hallucinationRate: { naive: '28%', engineered: '0.1%' },
        schemaCompliance: { naive: '60%', engineered: '100%' },
        edgeCaseHandling: { naive: 'Low', engineered: 'Production-Grade' }
      }
    },
    refactor: {
      title: "Edge-Case Frontend Code Refactoring",
      tagline: "Transforming fragile imperative DOM code into robust, memoized React 19 architecture",
      naivePrompt: `Make this React component better and fix lag:
function PropertyCard({ item }) {
  return <div>{item.title}</div>
}`,
      naiveOutput: `// Naive AI suggestion lacks accessibility tags, image fallbacks, key validation, and memoization.`,
      engineeredPrompt: `<role>
Principal Frontend Systems Engineer specializing in React 19 and Web Vitals optimization.
</role>

<instructions>
1. Refactor the component to support accessible ARIA attributes.
2. Implement memoized image fallbacks with blur-up placeholders.
3. Validate property types with comprehensive runtime guards.
4. Guarantee zero unnecessary re-renders with React.memo or fine-grained signals.
</instructions>`,
      engineeredOutput: `export const PropertyCard = React.memo(function PropertyCard({ item }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  
  if (!item?.id) return null;

  return (
    <article aria-labelledby={\`prop-\${item.id}\`} className="group rounded-2xl overflow-hidden">
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
        onLoad={() => setImgLoaded(true)}
        className={\`transition-opacity duration-300 \${imgLoaded ? 'opacity-100' : 'opacity-0'}\`}
      />
      <h3 id={\`prop-\${item.id}\`} className="font-bold text-white">{item.title}</h3>
    </article>
  );
});`,
      metrics: {
        accuracy: { naive: '72%', engineered: '99.4%' },
        hallucinationRate: { naive: '18%', engineered: '0.0%' },
        schemaCompliance: { naive: '75%', engineered: '100%' },
        edgeCaseHandling: { naive: 'Basic', engineered: 'Exhaustive' }
      }
    }
  };

  const current = cases[selectedCase];

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 700);
  };

  return (
    <section id="ai-lab" className="py-24 relative bg-[#06080e]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Anthropic AI Certified · 200+ Hours Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            AI Prompt Engineering & Benchmark Lab
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Explore how disciplined prompt engineering transforms unpredictable LLM behavior into enterprise-grade, deterministic software systems.
          </p>
        </div>

        {/* Case Study Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedCase('schema')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCase === 'schema'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Case 1: Strict JSON Schema Extraction
          </button>
          <button
            onClick={() => setSelectedCase('refactor')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCase === 'refactor'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Case 2: Frontend Code Refactoring & Guards
          </button>
        </div>

        {/* Main Interactive Lab Board */}
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Lab Toolbar */}
          <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{current.title}</h4>
                <p className="text-xs text-slate-400">{current.tagline}</p>
              </div>
            </div>

            {/* Prompt Mode Toggle (Naive vs Engineered) */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setPromptMode('naive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  promptMode === 'naive'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Naive (0-Shot)
              </button>
              <button
                onClick={() => setPromptMode('engineered')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  promptMode === 'engineered'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Anthropic Engineered (Chain-of-Thought)
              </button>
            </div>
          </div>

          {/* Interactive Dual Panel: Prompt Input & Model Response */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Left Panel: Prompt Architecture */}
            <div className="p-6 bg-slate-950/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    Prompt Structure ({promptMode.toUpperCase()})
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] ${
                      promptMode === 'engineered'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {promptMode === 'engineered' ? 'Role + XML Tags + Constraints' : 'Unconstrained Zero-Shot'}
                  </span>
                </div>

                <div className="bg-[#04060a] p-4 rounded-xl border border-slate-800/80 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto min-h-[220px] whitespace-pre-wrap">
                  {promptMode === 'engineered' ? current.engineeredPrompt : current.naivePrompt}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Target: Claude 3.5 Sonnet / GPT-4o
                </span>
                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 text-xs font-semibold cursor-pointer transition-colors"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Evaluating...' : 'Re-Evaluate Response'}</span>
                </button>
              </div>
            </div>

            {/* Right Panel: Output & Evaluation */}
            <div className="p-6 bg-slate-950/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                    LLM Execution Output
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] ${
                      promptMode === 'engineered'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}
                  >
                    {promptMode === 'engineered' ? 'Deterministic Pass ✓' : 'Schema Drift Warning ⚠️'}
                  </span>
                </div>

                <div className="bg-[#04060a] p-4 rounded-xl border border-slate-800/80 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto min-h-[220px] whitespace-pre-wrap">
                  {promptMode === 'engineered' ? current.engineeredOutput : current.naiveOutput}
                </div>
              </div>

              {/* Benchmarking Comparison Strip */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                  <span className="block text-[10px] text-slate-500 font-mono">Accuracy</span>
                  <span className={`text-xs font-bold font-mono ${promptMode === 'engineered' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {promptMode === 'engineered' ? current.metrics.accuracy.engineered : current.metrics.accuracy.naive}
                  </span>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                  <span className="block text-[10px] text-slate-500 font-mono">Hallucination</span>
                  <span className={`text-xs font-bold font-mono ${promptMode === 'engineered' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {promptMode === 'engineered' ? current.metrics.hallucinationRate.engineered : current.metrics.hallucinationRate.naive}
                  </span>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                  <span className="block text-[10px] text-slate-500 font-mono">Schema Valid</span>
                  <span className={`text-xs font-bold font-mono ${promptMode === 'engineered' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {promptMode === 'engineered' ? current.metrics.schemaCompliance.engineered : current.metrics.schemaCompliance.naive}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
