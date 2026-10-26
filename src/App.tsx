/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MISTER JO – DYNAMICS LAB
 * 15 TANTANGAN HOTS DINAMIKA GERAK LURUS – PAHAMI GAYA, KUASAI GERAK!
 */

import React, { useState, useEffect, useRef } from 'react';
import { PROBLEMS_DATA } from './data/problems';
import { Header } from './components/Header';
import { StimulusCard } from './components/StimulusCard';
import { AnalysisPanel } from './components/AnalysisPanel';
import { FbdViewer } from './components/FbdViewer';
import { SolutionNormal } from './components/SolutionNormal';
import { SolutionFast } from './components/SolutionFast';
import { PhysicsSimulation } from './components/PhysicsSimulation';
import { tts } from './services/ttsService';
import {
  BookOpen,
  Compass,
  Layers,
  Calculator,
  Zap,
  PlayCircle,
  Quote,
  Eye,
  ArrowDownCircle,
} from 'lucide-react';

export default function App() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [activeTabFilter, setActiveTabFilter] = useState<'all' | 'fbd' | 'normal' | 'fast' | 'sim'>('all');

  const problem = PROBLEMS_DATA[currentProblemIndex];

  // Section references for direct smooth scrolling
  const fbdSectionRef = useRef<HTMLDivElement>(null);
  const normalSectionRef = useRef<HTMLDivElement>(null);
  const fastSectionRef = useRef<HTMLDivElement>(null);
  const simSectionRef = useRef<HTMLDivElement>(null);

  // Stop any speech whenever problem changes
  useEffect(() => {
    tts.stop();
  }, [currentProblemIndex]);

  const handleSelectProblem = (index: number) => {
    tts.stop();
    setCurrentProblemIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevProblem = () => {
    if (currentProblemIndex > 0) {
      handleSelectProblem(currentProblemIndex - 1);
    }
  };

  const handleNextProblem = () => {
    if (currentProblemIndex < PROBLEMS_DATA.length - 1) {
      handleSelectProblem(currentProblemIndex + 1);
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#F4FBFA] text-[#163A3A] flex flex-col antialiased selection:bg-[#DDF7F3] selection:text-[#006B69]">
      {/* Sticky Header with 1-15 Nav & Fullscreen */}
      <Header
        currentProblemIndex={currentProblemIndex}
        totalProblems={PROBLEMS_DATA.length}
        onSelectProblem={handleSelectProblem}
        onPrevProblem={handlePrevProblem}
        onNextProblem={handleNextProblem}
      />

      {/* Main Learning Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Quick Action Navigation Toolbar */}
        <div className="bg-white rounded-2xl border-2 border-[#DDF7F3] p-3 shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#006B69]">
            <Eye className="w-4 h-4 text-[#008F8C]" />
            <span className="hidden sm:inline">Pintasan Belajar Soal Ini:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setActiveTabFilter('all');
                scrollToSection(fbdSectionRef);
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#DDF7F3] text-[#006B69] hover:bg-[#bbf0ea] transition"
            >
              <Layers className="w-3.5 h-3.5" /> LIHAT FBD
            </button>

            <button
              onClick={() => {
                setActiveTabFilter('all');
                scrollToSection(normalSectionRef);
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#DDF7F3] text-[#006B69] hover:bg-[#bbf0ea] transition"
            >
              <Calculator className="w-3.5 h-3.5" /> LIHAT PEMBAHASAN NORMAL
            </button>

            <button
              onClick={() => {
                setActiveTabFilter('all');
                scrollToSection(fastSectionRef);
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 hover:bg-amber-200 transition"
            >
              <Zap className="w-3.5 h-3.5" /> LIHAT CARA CEPAT
            </button>

            <button
              onClick={() => {
                setActiveTabFilter('all');
                scrollToSection(simSectionRef);
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#008F8C] text-white hover:bg-[#006B69] transition shadow-xs"
            >
              <PlayCircle className="w-3.5 h-3.5 fill-current" /> MENUJU KE SIMULASI
            </button>
          </div>
        </div>

        {/* TAHAP 1: SOAL & STIMULUS LENGKAP */}
        <section aria-label="Soal dan Stimulus">
          <StimulusCard problem={problem} />
        </section>

        {/* TAHAP 2: ANALISIS FISIKA AWAL */}
        <section aria-label="Analisis Fisika">
          <AnalysisPanel
            analysis={problem.physicsAnalysis}
            ttsAnalysis={problem.ttsAnalysis}
          />
        </section>

        {/* TAHAP 3: FREE BODY DIAGRAM (FBD) */}
        <section ref={fbdSectionRef} aria-label="Free Body Diagram">
          <FbdViewer
            bodies={problem.fbdBodies}
            ttsExplanation={problem.ttsFbd}
          />
        </section>

        {/* TAHAP 4 & TAHAP 5: DUA KOLOM PEMBAHASAN MATEMATIS */}
        <section aria-label="Pembahasan Normal dan Cara Cepat" className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* TAHAP 4: PEMBAHASAN CARA NORMAL */}
          <div ref={normalSectionRef} className="w-full">
            <SolutionNormal
              steps={problem.normalSolution.steps}
              finalAnswer={problem.normalSolution.finalAnswer}
              consistencyCheck={problem.normalSolution.consistencyCheck}
              ttsNormal={problem.ttsNormalSolution}
            />
          </div>

          {/* TAHAP 5: PEMBAHASAN CARA CEPAT */}
          <div ref={fastSectionRef} className="w-full">
            <SolutionFast
              fastSolution={problem.fastSolution}
              ttsFast={problem.ttsFastSolution}
            />
          </div>
        </section>

        {/* TAHAP 6: PEMBUKTIAN SIMULASI FISIKA */}
        <section ref={simSectionRef} aria-label="Simulasi Fisika Newton">
          <PhysicsSimulation
            simulation={problem.simulation}
            problemId={problem.id}
          />
        </section>

        {/* TAHAP 7: KESIMPULAN MISTER JO */}
        <section aria-label="Kesimpulan Mister Jo">
          <div className="bg-gradient-to-r from-[#006B69] to-[#008F8C] rounded-2xl p-6 text-white shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xs shrink-0 text-white">
                <Quote className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs uppercase tracking-wider font-black text-[#DDF7F3]">
                  Pesan Kunci Filosofi Mister Jo
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                  "{problem.misterJoTakeaway}"
                </h3>
                <p className="text-xs text-[#DDF7F3]/90 pt-1 font-medium">
                  Mister Jo Dynamics Lab • Pahami Gaya, Kuasai Gerak!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation Bar */}
        <div className="flex items-center justify-between gap-4 pt-4 pb-12">
          <button
            onClick={handlePrevProblem}
            disabled={currentProblemIndex === 0}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition ${
              currentProblemIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-gray-200 text-gray-500'
                : 'bg-white text-[#006B69] border-2 border-[#DDF7F3] hover:bg-[#DDF7F3] shadow-xs'
            }`}
          >
            ← Soal Sebelumnya ({currentProblemIndex > 0 ? currentProblemIndex : 1})
          </button>

          <span className="text-sm font-bold text-[#006B69] text-center">
            {currentProblemIndex + 1} / {PROBLEMS_DATA.length} Selesai Dipelajari
          </span>

          <button
            onClick={handleNextProblem}
            disabled={currentProblemIndex === PROBLEMS_DATA.length - 1}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition ${
              currentProblemIndex === PROBLEMS_DATA.length - 1
                ? 'opacity-40 cursor-not-allowed bg-gray-200 text-gray-500'
                : 'bg-[#008F8C] text-white hover:bg-[#006B69] shadow-md'
            }`}
          >
            Soal Berikutnya ({currentProblemIndex < PROBLEMS_DATA.length - 1 ? currentProblemIndex + 2 : 15}) →
          </button>
        </div>
      </main>
    </div>
  );
}
