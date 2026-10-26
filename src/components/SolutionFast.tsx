/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MathView } from './MathView';
import { Zap, Volume2, Square, Sparkles, CheckCircle2 } from 'lucide-react';
import { tts } from '../services/ttsService';

interface SolutionFastProps {
  fastSolution: {
    concept: string;
    reasoning: string;
    mathFormula: string;
    steps: string[];
    finalAnswer: string;
  };
  ttsFast: string;
}

export const SolutionFast: React.FC<SolutionFastProps> = ({ fastSolution, ttsFast }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      tts.stop();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      tts.speak(ttsFast, {
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false),
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#20BFAF] p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#DDF7F3]">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-lg bg-amber-100 text-amber-700">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#163A3A] tracking-tight flex items-center gap-2">
              Cara Cepat HOTS Mister Jo
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                100% Sah Secara Fisika
              </span>
            </h3>
          </div>
        </div>

        <button
          onClick={handleToggleAudio}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
            isPlayingAudio
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
          }`}
          title="Dengarkan cara cepat cerdas dari Mister Jo"
        >
          {isPlayingAudio ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current" /> Hentikan Suara
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5" /> Bacakan Cara Cepat
            </>
          )}
        </button>
      </div>

      {/* Strategic Concept */}
      <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
        <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide mb-1">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Strategi Penalaran Efisien: {fastSolution.concept}</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
          {fastSolution.reasoning}
        </p>
      </div>

      {/* Math Formula */}
      {fastSolution.mathFormula && (
        <div className="p-3.5 rounded-xl bg-[#F4FBFA] border border-[#DDF7F3] text-center overflow-x-auto">
          <MathView math={fastSolution.mathFormula} block className="text-sm font-bold text-[#006B69]" />
        </div>
      )}

      {/* Fast Steps */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-[#006B69] uppercase tracking-wide">
          Alur Penyelesaian Cepat:
        </div>
        {fastSolution.steps.map((st, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-xs sm:text-sm text-gray-800"
          >
            <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="leading-snug">{st}</span>
          </div>
        ))}
      </div>

      {/* Final Answer Banner */}
      <div className="p-3.5 rounded-xl bg-emerald-50 border-2 border-emerald-400 flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] uppercase font-bold text-emerald-800">
            Hasil Akhir Cara Cepat (Identik dengan Cara Normal):
          </div>
          <div className="text-base font-black text-emerald-950 font-mono mt-0.5">
            {fastSolution.finalAnswer}
          </div>
        </div>
        <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
      </div>
    </div>
  );
};
