/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FbdBody, ForceVector } from '../types/physics';
import { MathView } from './MathView';
import { Volume2, Square, Info } from 'lucide-react';
import { tts } from '../services/ttsService';

interface FbdViewerProps {
  bodies: FbdBody[];
  ttsExplanation: string;
}

export const FbdViewer: React.FC<FbdViewerProps> = ({ bodies, ttsExplanation }) => {
  const [selectedBodyId, setSelectedBodyId] = useState<string>(bodies[0]?.id || '');
  const [hoveredForce, setHoveredForce] = useState<ForceVector | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeBody = bodies.find(b => b.id === selectedBodyId) || bodies[0];

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      tts.stop();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      tts.speak(ttsExplanation, {
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false),
      });
    }
  };

  // Convert angle in degrees to SVG vector coordinates
  // Center of canvas is (240, 180)
  const cx = 240;
  const cy = 180;
  const bodyWidth = 100;
  const bodyHeight = 70;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#DDF7F3] p-5 shadow-sm">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DDF7F3]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#008F8C] animate-pulse" />
          <h3 className="text-xl font-bold text-[#163A3A] tracking-tight">
            Free Body Diagram (FBD) Presisi Newton
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition ${
              isPlayingAudio
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-[#DDF7F3] text-[#006B69] hover:bg-[#bbf0ea]'
            }`}
            title="Dengarkan penjelasan FBD dari Mister Jo"
          >
            {isPlayingAudio ? (
              <>
                <Square className="w-4 h-4 fill-current" /> Hentikan Suara
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" /> Bacakan Penjelasan FBD
              </>
            )}
          </button>
        </div>
      </div>

      {/* Body selector if multiple bodies exist */}
      {bodies.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 my-4">
          <span className="text-sm font-bold text-[#163A3A] mr-2">Pilih Objek Benda:</span>
          {bodies.map(b => (
            <button
              key={b.id}
              onClick={() => {
                setSelectedBodyId(b.id);
                setHoveredForce(null);
              }}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition border ${
                activeBody.id === b.id
                  ? 'bg-[#008F8C] text-white border-[#008F8C] shadow-sm'
                  : 'bg-white text-[#163A3A] border-gray-200 hover:bg-[#F4FBFA]'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      )}

      {/* Visual Canvas + Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* SVG Diagram Column */}
        <div className="lg:col-span-7 bg-[#F4FBFA] rounded-xl border border-[#DDF7F3] flex flex-col items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute top-3 left-4 text-xs font-bold text-[#006B69] uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded shadow-xs">
            {activeBody.name}
          </div>

          <svg viewBox="0 0 480 360" className="w-full max-h-[360px] select-none">
            <defs>
              {/* Arrowheads for different colors */}
              <marker id="arrow-008F8C" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#008F8C" />
              </marker>
              <marker id="arrow-E05638" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#E05638" />
              </marker>
              <marker id="arrow-10B981" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
              </marker>
              <marker id="arrow-2563EB" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#2563EB" />
              </marker>
              <marker id="arrow-6B7280" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
              </marker>
              <marker id="arrow-9CA3AF" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF" />
              </marker>
            </defs>

            {/* Coordinate grid lines subtle */}
            <line x1="40" y1={cy} x2="440" y2={cy} stroke="#E2E8F0" strokeDasharray="3,3" />
            <line x1={cx} y1="30" x2={cx} y2="330" stroke="#E2E8F0" strokeDasharray="3,3" />

            {/* Central Isolated Body Representation */}
            <rect
              x={cx - bodyWidth / 2}
              y={cy - bodyHeight / 2}
              width={bodyWidth}
              height={bodyHeight}
              rx="8"
              fill="#FFFFFF"
              stroke="#006B69"
              strokeWidth="2.5"
              className="drop-shadow-sm"
            />
            <text
              x={cx}
              y={cy - 4}
              textAnchor="middle"
              className="text-xs font-black fill-[#006B69]"
            >
              m = {activeBody.mass} kg
            </text>
            <text
              x={cx}
              y={cy + 14}
              textAnchor="middle"
              className="text-[10px] font-bold fill-gray-500"
            >
              Titik Pusat Massa
            </text>
            <circle cx={cx} cy={cy} r="4" fill="#006B69" />

            {/* Force Vectors */}
            {activeBody.forces.map((f, i) => {
              // Convert angle in standard Cartesian math: 0 = right, 90 = up, 180 = left, 270 = down
              // In SVG, y is inverted: svgY = cy - r * sin(rad), svgX = cx + r * cos(rad)
              const rad = (f.angleDeg * Math.PI) / 180;
              // Length scaled appropriately (80px - 120px)
              const arrowLength = f.isComponent ? 85 : 105;
              const targetX = cx + arrowLength * Math.cos(rad);
              const targetY = cy - arrowLength * Math.sin(rad);

              // Position for label offset slightly past the arrow tip
              const labelX = cx + (arrowLength + 24) * Math.cos(rad);
              const labelY = cy - (arrowLength + 20) * Math.sin(rad);

              // Pick arrowhead color
              const markerId = `arrow-${f.color.replace('#', '')}`;

              const isHighlighted = hoveredForce?.id === f.id;

              return (
                <g
                  key={f.id || i}
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredForce(f)}
                  onMouseLeave={() => setHoveredForce(null)}
                >
                  {/* Thick transparent line for easy hover targeting */}
                  <line
                    x1={cx}
                    y1={cy}
                    x2={targetX}
                    y2={targetY}
                    stroke="transparent"
                    strokeWidth="16"
                  />
                  {/* Main Vector Arrow */}
                  <line
                    x1={cx}
                    y1={cy}
                    x2={targetX}
                    y2={targetY}
                    stroke={f.color}
                    strokeWidth={isHighlighted ? 4 : f.isComponent ? 2.2 : 3}
                    strokeDasharray={f.isComponent ? '4,4' : 'none'}
                    markerEnd={`url(#${markerId})`}
                  />

                  {/* Vector Label Tag */}
                  <g transform={`translate(${labelX}, ${labelY})`}>
                    <rect
                      x="-38"
                      y="-14"
                      width="76"
                      height="24"
                      rx="5"
                      fill={isHighlighted ? f.color : '#FFFFFF'}
                      stroke={f.color}
                      strokeWidth="1.5"
                      className="drop-shadow-xs"
                    />
                    <text
                      x="0"
                      y="3"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`text-xs font-bold ${
                        isHighlighted ? 'fill-white' : 'fill-[#163A3A]'
                      }`}
                    >
                      {f.symbol} ({f.magnitude} N)
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          <p className="text-[11px] text-gray-500 mt-2 text-center">
            *Arahkan kursor atau sentuh vektor gaya untuk melihat detail dan alasan arah fisisnya.
          </p>
        </div>

        {/* Force Details & Scientific Breakdown Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#006B69]">
              Daftar Gaya Luar yang Bekerja:
            </h4>

            <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
              {activeBody.forces.map((f) => {
                const isSelected = hoveredForce?.id === f.id;
                return (
                  <div
                    key={f.id}
                    onMouseEnter={() => setHoveredForce(f)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#008F8C] bg-[#DDF7F3]/40 shadow-xs'
                        : 'border-gray-200 bg-white hover:border-[#20BFAF]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3.5 h-3.5 rounded-full inline-block"
                          style={{ backgroundColor: f.color }}
                        />
                        <span className="font-bold text-sm text-[#163A3A]">
                          {f.name}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-gray-100 text-[#006B69]">
                        {f.symbol} = {f.magnitude} {f.unit}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed pl-5">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Body Notes Alert */}
          <div className="mt-4 p-3 rounded-xl bg-[#DDF7F3]/60 border border-[#20BFAF] flex items-start gap-2.5">
            <Info className="w-5 h-5 text-[#006B69] shrink-0 mt-0.5" />
            <div className="text-xs text-[#163A3A] leading-relaxed">
              <span className="font-bold">Analisis Keseimbangan Sumbu: </span>
              {activeBody.notes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
