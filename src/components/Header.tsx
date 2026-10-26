/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2, ChevronLeft, ChevronRight, Atom, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentProblemIndex: number;
  totalProblems: number;
  onSelectProblem: (index: number) => void;
  onPrevProblem: () => void;
  onNextProblem: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentProblemIndex,
  totalProblems,
  onSelectProblem,
  onPrevProblem,
  onNextProblem,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen API error:', err);
    }
  };

  return (
    <header className="bg-white border-b-2 border-[#DDF7F3] sticky top-0 z-50 shadow-xs">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#008F8C] flex items-center justify-center text-white shadow-md shadow-[#008F8C]/20 shrink-0">
            <Atom className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-[#163A3A] tracking-tight">
                MISTER JO – DYNAMICS LAB
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#DDF7F3] text-[#006B69]">
                <Sparkles className="w-3 h-3 text-[#20BFAF]" /> 15 Tantangan HOTS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#008F8C] font-semibold">
              Belajar Gaya, Buktikan Geraknya! • Dinamika Gerak Lurus
            </p>
          </div>
        </div>

        {/* Right Actions: Counter & Fullscreen */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Problem Counter Indicator */}
          <div className="hidden md:flex flex-col items-end mr-1">
            <span className="text-[10px] uppercase font-bold text-gray-500">
              Navigasi Kasus
            </span>
            <span className="text-sm font-black text-[#006B69]">
              Soal {currentProblemIndex + 1} dari {totalProblems}
            </span>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#F4FBFA] text-[#006B69] border border-[#20BFAF] hover:bg-[#DDF7F3] transition shadow-xs"
            aria-label={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4" />
                <span>KELUAR LAYAR PENUH</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4" />
                <span>LAYAR PENUH</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Quick Problem Numbers Bar (1 to 15) & Prev/Next Nav */}
      <div className="bg-[#F4FBFA] border-t border-[#DDF7F3] px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto">
          {/* Prev Button */}
          <button
            onClick={onPrevProblem}
            disabled={currentProblemIndex === 0}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
              currentProblemIndex === 0
                ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                : 'text-[#006B69] bg-white border border-[#DDF7F3] hover:bg-[#DDF7F3]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">SOAL SEBELUMNYA</span>
          </button>

          {/* 15 Problem Number Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 px-2 scrollbar-none">
            {Array.from({ length: totalProblems }, (_, i) => {
              const isSelected = i === currentProblemIndex;
              return (
                <button
                  key={i}
                  onClick={() => onSelectProblem(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition shrink-0 flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#008F8C] text-white shadow-sm scale-105'
                      : 'bg-white text-[#163A3A] border border-gray-200 hover:border-[#20BFAF] hover:bg-gray-50'
                  }`}
                  title={`Buka Soal ${i + 1}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={onNextProblem}
            disabled={currentProblemIndex === totalProblems - 1}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
              currentProblemIndex === totalProblems - 1
                ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                : 'text-[#006B69] bg-white border border-[#DDF7F3] hover:bg-[#DDF7F3]'
            }`}
          >
            <span className="hidden sm:inline">SOAL BERIKUTNYA</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
