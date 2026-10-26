/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, Square, HelpCircle, Compass } from 'lucide-react';
import { tts } from '../services/ttsService';

interface AnalysisPanelProps {
  analysis: {
    guidingQuestions: { question: string; answer: string }[];
    summary: string;
  };
  ttsAnalysis: string;
}

export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ analysis, ttsAnalysis }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      tts.stop();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      tts.speak(ttsAnalysis, {
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false),
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#DDF7F3] p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#DDF7F3]">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#008F8C]" />
          <h3 className="text-xl font-bold text-[#163A3A] tracking-tight">
            Analisis Fisis Awal & Bimbingan Penalaran
          </h3>
        </div>

        <button
          onClick={handleToggleAudio}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
            isPlayingAudio
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-[#DDF7F3] text-[#006B69] hover:bg-[#bbf0ea]'
          }`}
          title="Dengarkan panduan analisis awal dari Mister Jo"
        >
          {isPlayingAudio ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current" /> Hentikan Suara
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5" /> Bacakan Analisis Fisika
            </>
          )}
        </button>
      </div>

      {/* Guiding Questions Accordion / List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {analysis.guidingQuestions.map((q, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-[#F4FBFA] border border-[#DDF7F3] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1.5 text-[#008F8C] font-bold text-xs mb-1.5">
                <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Pertanyaan Penuntun #{idx + 1}</span>
              </div>
              <h4 className="font-bold text-sm text-[#163A3A] mb-2 leading-snug">
                {q.question}
              </h4>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed pt-2 border-t border-[#DDF7F3]/70 font-medium">
              {q.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Analytical Summary */}
      <div className="p-3.5 rounded-xl bg-[#DDF7F3]/40 border-l-4 border-[#008F8C]">
        <p className="text-xs sm:text-sm text-[#163A3A] leading-relaxed font-semibold">
          <span className="text-[#008F8C] font-bold">Kaidah Dasar: </span>
          {analysis.summary}
        </p>
      </div>
    </div>
  );
};
