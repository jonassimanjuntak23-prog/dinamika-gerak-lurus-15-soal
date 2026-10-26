/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ProblemData } from '../types/physics';
import { Volume2, Square, Sparkles, BookOpen } from 'lucide-react';
import { tts } from '../services/ttsService';
import { RealisticStimulusIllustration } from './RealisticStimulusIllustration';

interface StimulusCardProps {
  problem: ProblemData;
}

export const StimulusCard: React.FC<StimulusCardProps> = ({ problem }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      tts.stop();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      tts.speak(problem.ttsQuestion, {
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false),
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#DDF7F3] p-6 shadow-sm space-y-5">
      {/* Header with Title and Topic */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#DDF7F3] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#DDF7F3] text-[#006B69] uppercase tracking-wide">
              {problem.topic}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
              Kesulitan: {problem.difficulty}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#163A3A] tracking-tight">
            {problem.title}
          </h2>
          <p className="text-base text-[#006B69] font-semibold mt-0.5">
            {problem.subtitle}
          </p>
        </div>

        {/* Read Problem TTS button */}
        <button
          onClick={handleToggleAudio}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition ${
            isPlayingAudio
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-[#008F8C] text-white hover:bg-[#006B69]'
          }`}
          title="Dengarkan pembacaan naskah soal lengkap oleh Mister Jo"
        >
          {isPlayingAudio ? (
            <>
              <Square className="w-4 h-4 fill-current" /> Hentikan Suara
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4" /> Bacakan Soal
            </>
          )}
        </button>
      </div>

      {/* Stimulus Section */}
      <div className="bg-[#F4FBFA] rounded-xl border border-[#DDF7F3] p-5">
        <div className="flex items-center gap-2 mb-2 text-[#006B69] font-bold text-sm uppercase tracking-wide">
          <BookOpen className="w-4 h-4" />
          <span>Stimulus Kasus: {problem.stimulusTitle}</span>
        </div>

        <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
          {problem.stimulusText}
        </p>

        {/* Realistic Mechanical Setup Illustration */}
        <RealisticStimulusIllustration problemId={problem.id} />

        {/* Table data stimulus if present */}
        {problem.stimulusTableData && (
          <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white">
            {problem.stimulusTableData.caption && (
              <div className="px-4 py-2 bg-gray-50 text-xs font-bold text-gray-600 border-b border-gray-200">
                {problem.stimulusTableData.caption}
              </div>
            )}
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#DDF7F3]/60 border-b border-[#20BFAF]/30 text-[#006B69]">
                  {problem.stimulusTableData.headers.map((h, idx) => (
                    <th key={idx} className="p-3 font-bold text-xs uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {problem.stimulusTableData.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-gray-50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3 font-mono font-medium text-gray-800 text-xs sm:text-sm">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Problem Statement */}
      <div className="text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
        {problem.problemStatement}
      </div>

      {/* The Core Question Box */}
      <div className="p-5 rounded-xl bg-[#DDF7F3]/40 border-2 border-[#008F8C]/40">
        <div className="flex items-center gap-2 text-[#006B69] font-black text-sm uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-[#008F8C]" />
          <span>Tantangan Penalaran HOTS yang Harus Diselesaikan:</span>
        </div>
        <p className="text-lg sm:text-xl font-bold text-[#163A3A] whitespace-pre-line leading-relaxed">
          {problem.questionText}
        </p>
      </div>
    </div>
  );
};
