/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SolutionStep } from '../types/physics';
import { MathView } from './MathView';
import { Volume2, Square, CheckCircle, Calculator } from 'lucide-react';
import { tts } from '../services/ttsService';

interface SolutionNormalProps {
  steps: SolutionStep[];
  finalAnswer: string;
  consistencyCheck: string;
  ttsNormal: string;
}

export const SolutionNormal: React.FC<SolutionNormalProps> = ({
  steps,
  finalAnswer,
  consistencyCheck,
  ttsNormal,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      tts.stop();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      tts.speak(ttsNormal, {
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false),
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#DDF7F3] p-5 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#DDF7F3]">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-[#008F8C]" />
          <h3 className="text-xl font-bold text-[#163A3A] tracking-tight">
            Pembahasan Cara Normal (10 Langkah Sistematis)
          </h3>
        </div>

        <button
          onClick={handleToggleAudio}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
            isPlayingAudio
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-[#DDF7F3] text-[#006B69] hover:bg-[#bbf0ea]'
          }`}
          title="Dengarkan pembahasan cara normal lengkap dari Mister Jo"
        >
          {isPlayingAudio ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current" /> Hentikan Suara
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5" /> Bacakan Pembahasan Normal
            </>
          )}
        </button>
      </div>

      {/* 10 Step List */}
      <div className="space-y-3">
        {steps.map((st) => (
          <div
            key={st.stepNumber}
            className="p-3.5 rounded-xl bg-[#F4FBFA] border border-[#DDF7F3] transition hover:border-[#20BFAF]"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-[#008F8C] text-white text-xs font-black flex items-center justify-center shrink-0">
                {st.stepNumber}
              </span>
              <h4 className="font-bold text-sm text-[#163A3A]">
                {st.title}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 ml-8 leading-relaxed font-normal">
              {st.explanation}
            </p>

            {/* Formula / Substitution rendering */}
            {(st.mathFormula || st.substitution || st.result || st.consistencyCheck) && (
              <div className="ml-8 mt-2 p-2.5 rounded-lg bg-white border border-[#DDF7F3] text-xs font-mono text-[#006B69] overflow-x-auto">
                {st.mathFormula && (
                  <div className="my-1">
                    <MathView math={st.mathFormula} block />
                  </div>
                )}
                {st.substitution && (
                  <div className="my-1 text-gray-800">
                    <MathView math={st.substitution} block />
                  </div>
                )}
                {st.result && (
                  <div className="my-1 font-bold text-[#008F8C]">
                    <MathView math={st.result} block />
                  </div>
                )}
                {st.consistencyCheck && (
                  <div className="my-1 text-emerald-700">
                    <MathView math={st.consistencyCheck} block />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Final Answer Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#DDF7F3] to-[#E6FAF7] border-2 border-[#008F8C] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-wider font-bold text-[#006B69]">
            Kesimpulan Hasil Akhir Terverifikasi:
          </div>
          <div className="text-lg font-black text-[#163A3A] mt-0.5">
            {finalAnswer}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white/90 px-3 py-1.5 rounded-lg border border-emerald-200">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{consistencyCheck}</span>
        </div>
      </div>
    </div>
  );
};
