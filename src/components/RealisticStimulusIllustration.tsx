/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MISTER JO - DYNAMICS LAB: REALISTIC STIMULUS ILLUSTRATION ENGINE
 * High-fidelity 2D/2.5D SVG mechanical illustrations for all 15 problem setups.
 * Displays realistic textures, pulleys, brackets, ropes, masses, angles, and apparatus
 * without revealing the solution/FBD answers.
 */

import React from 'react';

interface RealisticStimulusIllustrationProps {
  problemId: number;
}

export const RealisticStimulusIllustration: React.FC<RealisticStimulusIllustrationProps> = ({ problemId }) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#F8FCFB] to-[#EEF8F6] rounded-xl border border-[#DDF7F3] p-4 flex flex-col items-center justify-center my-3 relative overflow-hidden shadow-xs">
      <div className="absolute top-2.5 left-3 flex items-center gap-1.5 text-[11px] font-bold text-[#006B69] uppercase tracking-wider bg-white/90 px-2.5 py-0.5 rounded-md border border-[#DDF7F3] shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-[#20BFAF]" />
        Ilustrasi Setup Fisika Realistis
      </div>

      <svg
        viewBox="0 0 680 280"
        className="w-full max-h-[280px] select-none drop-shadow-xs"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="woodGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="crateWood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E2943A" />
            <stop offset="100%" stopColor="#B4651A" />
          </linearGradient>

          <linearGradient id="metalCrate" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#64748B" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="blueCrate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="pulleyBrass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="70%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          <linearGradient id="pulleySteel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="60%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="rampGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="airTrackGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="40%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Floor Hatch Pattern */}
          <pattern id="floorHatch" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="16" stroke="#CBD5E1" strokeWidth="1.5" />
          </pattern>

          {/* Rough Ground Pattern */}
          <pattern id="roughHatch" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 0 8 L 8 0 M 0 4 L 4 0 M 4 8 L 8 4" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.5" />
          </pattern>

          {/* Arrow markers */}
          <marker id="forceArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <polygon points="0 0, 7 3, 0 6" fill="#008F8C" />
          </marker>
          <marker id="forceArrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <polygon points="0 0, 7 3, 0 6" fill="#E05638" />
          </marker>
          <marker id="forceArrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <polygon points="0 0, 7 3, 0 6" fill="#2563EB" />
          </marker>
        </defs>

        {renderIllustrationContent(problemId)}
      </svg>
    </div>
  );
};

function renderIllustrationContent(id: number) {
  switch (id) {
    // ==========================================
    // 01: HUKUM I NEWTON (Peti di lantai marmer licin)
    // ==========================================
    case 1:
      return (
        <g>
          {/* Warehouse Floor */}
          <rect x="40" y="200" width="600" height="25" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="40" y="225" width="600" height="35" fill="url(#floorHatch)" />
          {/* Marble glossy reflection line */}
          <line x1="50" y1="202" x2="630" y2="202" stroke="#FFFFFF" strokeWidth="3" strokeOpacity="0.8" />
          <text x="340" y="245" textAnchor="middle" className="text-[11px] font-bold fill-gray-500 uppercase tracking-wider">
            Lantai Marmer Gudang Pelabuhan (Sangat Licin, Gesekan f = 0)
          </text>

          {/* Wooden Cargo Crate with Straps */}
          <g transform="translate(280, 100)">
            <rect x="0" y="0" width="120" height="100" rx="4" fill="url(#crateWood)" stroke="#78350F" strokeWidth="3" />
            {/* Corner brackets */}
            <path d="M 0 0 L 20 0 L 0 20 Z M 120 0 L 100 0 L 120 20 Z M 0 100 L 20 100 L 0 80 Z M 120 100 L 100 100 L 120 80 Z" fill="#475569" />
            {/* Reinforcement slats */}
            <line x1="0" y1="0" x2="120" y2="100" stroke="#78350F" strokeWidth="2" strokeDasharray="6,2" />
            <line x1="120" y1="0" x2="0" y2="100" stroke="#78350F" strokeWidth="2" strokeDasharray="6,2" />
            {/* Crate Label */}
            <rect x="25" y="32" width="70" height="36" rx="3" fill="#FEF3C7" stroke="#D97706" />
            <text x="60" y="47" textAnchor="middle" className="text-xs font-black fill-[#78350F]">
              PETI LOGISTIK
            </text>
            <text x="60" y="60" textAnchor="middle" className="text-[11px] font-bold fill-[#92400E]">
              m = 20 kg
            </text>
          </g>

          {/* Force 1 from Worker A (Pushing to East/Right) */}
          <g transform="translate(130, 150)">
            <line x1="0" y1="0" x2="135" y2="0" stroke="#008F8C" strokeWidth="4" markerEnd="url(#forceArrow)" />
            <rect x="20" y="-30" width="100" height="22" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="1.5" />
            <text x="70" y="-15" textAnchor="middle" className="text-[11px] font-black fill-[#008F8C]">
              Pekerja A: F1 = 45 N
            </text>
            <text x="70" y="16" textAnchor="middle" className="text-[10px] font-bold fill-gray-500">
              (Arah Timur)
            </text>
          </g>

          {/* Force 2 from Worker B (Pushing to West/Left) */}
          <g transform="translate(540, 150)">
            <line x1="0" y1="0" x2="-125" y2="0" stroke="#E05638" strokeWidth="4" markerEnd="url(#forceArrowRed)" />
            <rect x="-115" y="-30" width="100" height="22" rx="4" fill="#FFFFFF" stroke="#E05638" strokeWidth="1.5" />
            <text x="-65" y="-15" textAnchor="middle" className="text-[11px] font-black fill-[#E05638]">
              Pekerja B: F2 = 30 N
            </text>
            <text x="-65" y="16" textAnchor="middle" className="text-[10px] font-bold fill-gray-500">
              (Arah Barat)
            </text>
          </g>

          {/* Constant Velocity Motion Indicator */}
          <g transform="translate(340, 65)">
            <line x1="-50" y1="0" x2="50" y2="0" stroke="#2563EB" strokeWidth="2.5" markerEnd="url(#forceArrowBlue)" strokeDasharray="5,3" />
            <text x="0" y="-10" textAnchor="middle" className="text-xs font-bold fill-[#2563EB]">
              v = 2,0 m/s (Konstan ke Timur)
            </text>
          </g>

          {/* Inquiry Question Badge */}
          <g transform="translate(340, 20)">
            <rect x="-130" y="0" width="260" height="26" rx="13" fill="#DDF7F3" stroke="#20BFAF" />
            <text x="0" y="17" textAnchor="middle" className="text-xs font-bold fill-[#006B69]">
              Pekerja C: Berapa besar & arah F3 agar GLB?
            </text>
          </g>
        </g>
      );

    // ==========================================
    // 02: HUKUM II NEWTON (Air Track & Photogates)
    // ==========================================
    case 2:
      return (
        <g>
          {/* Air Track Rail */}
          <rect x="50" y="170" width="460" height="28" rx="4" fill="url(#airTrackGrad)" stroke="#475569" strokeWidth="2" />
          {/* Air Jets Hole Row */}
          {Array.from({ length: 22 }, (_, i) => (
            <circle key={i} cx={75 + i * 20} cy="178" r="2" fill="#1E293B" />
          ))}
          {/* Air Track Support Feet */}
          <rect x="100" y="198" width="16" height="40" fill="#64748B" />
          <rect x="420" y="198" width="16" height="40" fill="#64748B" />
          <rect x="70" y="238" width="420" height="10" fill="#94A3B8" />

          {/* Photogate Sensor 1 */}
          <g transform="translate(180, 110)">
            <path d="M 0 60 L 0 0 L 15 0 L 15 60 Z" fill="#1E293B" />
            <circle cx="7" cy="20" r="4" fill="#EF4444" />
            <text x="8" y="-6" textAnchor="middle" className="text-[10px] font-bold fill-[#1E293B]">Sensor 1</text>
          </g>

          {/* Photogate Sensor 2 */}
          <g transform="translate(360, 110)">
            <path d="M 0 60 L 0 0 L 15 0 L 15 60 Z" fill="#1E293B" />
            <circle cx="7" cy="20" r="4" fill="#10B981" />
            <text x="8" y="-6" textAnchor="middle" className="text-[10px] font-bold fill-[#1E293B]">Sensor 2</text>
          </g>

          {/* Dynamics Cart on Air Cushion */}
          <g transform="translate(230, 130)">
            {/* Glider Body */}
            <rect x="0" y="0" width="85" height="36" rx="4" fill="#008F8C" stroke="#004D40" strokeWidth="2" />
            {/* Photogate Interrupter Flag */}
            <rect x="38" y="-22" width="8" height="22" fill="#1E293B" />
            <text x="42" y="22" textAnchor="middle" className="text-[11px] font-black fill-white">
              Kereta m₀ = ?
            </text>
          </g>

          {/* Extra Mass Block Waiting nearby */}
          <g transform="translate(100, 75)">
            <rect x="0" y="0" width="55" height="30" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            <text x="27" y="18" textAnchor="middle" className="text-[10px] font-black fill-white">+2,0 kg</text>
            <text x="27" y="42" textAnchor="middle" className="text-[9px] font-bold fill-gray-600">Beban Tambahan</text>
          </g>

          {/* Pulling String & Pulley */}
          <line x1="315" y1="145" x2="520" y2="145" stroke="#1E293B" strokeWidth="2" />
          <circle cx="520" cy="155" r="14" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="520" cy="155" r="4" fill="#FFFFFF" />
          <line x1="534" y1="155" x2="534" y2="215" stroke="#1E293B" strokeWidth="2" />

          {/* Hanging Force Vector / Weight */}
          <rect x="522" y="215" width="24" height="25" rx="3" fill="#475569" stroke="#1E293B" />
          <text x="534" y="232" textAnchor="middle" className="text-[10px] font-bold fill-white">F</text>

          {/* Data Note */}
          <text x="270" y="260" textAnchor="middle" className="text-xs font-bold fill-[#006B69]">
            Lintasan Udara Licin (Air Track) • Pengukuran F dan a Terkalibrasi
          </text>
        </g>
      );

    // ==========================================
    // 03: HUKUM III NEWTON (Dua Balok Bersentuhan)
    // ==========================================
    case 3:
      return (
        <g>
          {/* Floor */}
          <rect x="50" y="195" width="580" height="20" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="50" y="215" width="580" height="30" fill="url(#floorHatch)" />
          <text x="340" y="235" textAnchor="middle" className="text-[11px] font-bold fill-gray-500 uppercase tracking-wider">
            Lantai Horizontal Licin (Tanpa Gesekan)
          </text>

          {/* External Pushing Force F = 50 N */}
          <g transform="translate(100, 140)">
            <line x1="0" y1="0" x2="135" y2="0" stroke="#008F8C" strokeWidth="5" markerEnd="url(#forceArrow)" />
            <rect x="15" y="-30" width="105" height="24" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="1.5" />
            <text x="67" y="-14" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
              F_luar = 50,0 N
            </text>
          </g>

          {/* Block A (4 kg) */}
          <g transform="translate(240, 95)">
            <rect x="0" y="0" width="90" height="100" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2.5" />
            <text x="45" y="45" textAnchor="middle" className="text-base font-black fill-white">
              Balok A
            </text>
            <text x="45" y="65" textAnchor="middle" className="text-xs font-bold fill-[#DDF7F3]">
              m_A = 4,0 kg
            </text>
          </g>

          {/* Block B (6 kg) Bersentuhan Rapat */}
          <g transform="translate(330, 75)">
            <rect x="0" y="0" width="120" height="120" rx="3" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2.5" />
            <text x="60" y="55" textAnchor="middle" className="text-base font-black fill-white">
              Balok B
            </text>
            <text x="60" y="75" textAnchor="middle" className="text-xs font-bold fill-[#DBEAFE]">
              m_B = 6,0 kg
            </text>
          </g>

          {/* Highlighting Contact Interface */}
          <line x1="330" y1="75" x2="330" y2="195" stroke="#F59E0B" strokeWidth="4" strokeDasharray="4,2" />
          <g transform="translate(330, 50)">
            <rect x="-65" y="-20" width="130" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="0" y="-5" textAnchor="middle" className="text-[10px] font-black fill-[#B45309]">
              BIDANG KONTAK (F_AB & F_BA)
            </text>
          </g>
        </g>
      );

    // ==========================================
    // 04: DUA BALOK DIHUBUNGKAN TALI
    // ==========================================
    case 4:
      return (
        <g>
          {/* Floor */}
          <rect x="40" y="195" width="600" height="20" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="40" y="215" width="600" height="30" fill="url(#floorHatch)" />

          {/* Block P (3 kg) */}
          <g transform="translate(130, 115)">
            <rect x="0" y="0" width="75" height="80" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2.5" />
            <text x="37" y="38" textAnchor="middle" className="text-sm font-black fill-white">
              Balok P
            </text>
            <text x="37" y="55" textAnchor="middle" className="text-xs font-bold fill-[#DDF7F3]">
              3,0 kg
            </text>
          </g>

          {/* Rope with tension meter indicator */}
          <g transform="translate(205, 155)">
            <line x1="0" y1="0" x2="130" y2="0" stroke="#1E293B" strokeWidth="4" />
            {/* Eyelet hooks on blocks */}
            <circle cx="2" cy="0" r="4" fill="#64748B" />
            <circle cx="128" cy="0" r="4" fill="#64748B" />
            {/* Rope Label Badge */}
            <rect x="25" y="-25" width="80" height="20" rx="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.2" />
            <text x="65" y="-11" textAnchor="middle" className="text-[10px] font-black fill-[#1E293B]">
              Tali Ideal (T)
            </text>
            <text x="65" y="15" textAnchor="middle" className="text-[9px] font-bold fill-red-600">
              T_maks = 35 N
            </text>
          </g>

          {/* Block Q (7 kg) */}
          <g transform="translate(335, 95)">
            <rect x="0" y="0" width="115" height="100" rx="3" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2.5" />
            <text x="57" y="48" textAnchor="middle" className="text-base font-black fill-white">
              Balok Q
            </text>
            <text x="57" y="68" textAnchor="middle" className="text-xs font-bold fill-[#DBEAFE]">
              7,0 kg
            </text>
          </g>

          {/* Pulling Force F = 40 N */}
          <g transform="translate(450, 145)">
            <line x1="0" y1="0" x2="115" y2="0" stroke="#008F8C" strokeWidth="4" markerEnd="url(#forceArrow)" />
            <rect x="15" y="-28" width="95" height="22" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="1.5" />
            <text x="62" y="-13" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
              F = 40,0 N
            </text>
          </g>
        </g>
      );

    // ==========================================
    // 05: KESETIMBANGAN GESEKAN STATIS (3 TAHAP)
    // ==========================================
    case 5:
      return (
        <g>
          {/* Concrete Rough Floor with Teeth */}
          <rect x="50" y="185" width="580" height="25" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
          <rect x="50" y="210" width="580" height="35" fill="url(#roughHatch)" />
          {/* Micro rough texture bumps */}
          {Array.from({ length: 30 }, (_, i) => (
            <line key={i} x1={60 + i * 19} y1="185" x2={68 + i * 19} y2="181" stroke="#64748B" strokeWidth="2" />
          ))}
          <text x="340" y="235" textAnchor="middle" className="text-[11px] font-bold fill-gray-600 uppercase tracking-wider">
            Permukaan Kasar (μs = 0,40 ; μk = 0,25)
          </text>

          {/* Wooden Block 10 kg */}
          <g transform="translate(260, 95)">
            <rect x="0" y="0" width="130" height="90" rx="4" fill="url(#crateWood)" stroke="#78350F" strokeWidth="2.5" />
            <text x="65" y="40" textAnchor="middle" className="text-base font-black fill-white">
              Balok Kayu
            </text>
            <text x="65" y="60" textAnchor="middle" className="text-xs font-bold fill-[#FEF3C7]">
              m = 10,0 kg
            </text>
          </g>

          {/* Step-by-step Pulling Force F */}
          <g transform="translate(390, 140)">
            <line x1="0" y1="0" x2="140" y2="0" stroke="#008F8C" strokeWidth="4" markerEnd="url(#forceArrow)" />
            {/* 3 Stages Callout */}
            <rect x="15" y="-55" width="150" height="48" rx="6" fill="#FFFFFF" stroke="#008F8C" strokeWidth="1.5" />
            <text x="90" y="-38" textAnchor="middle" className="text-[10px] font-bold fill-gray-500">Gaya Luar Bertahap F:</text>
            <text x="90" y="-24" textAnchor="middle" className="text-[11px] font-black fill-[#008F8C]">T1: 25N | T2: 40N | T3: 55N</text>
            <text x="90" y="-10" textAnchor="middle" className="text-[9px] font-bold fill-amber-700">fs menyesuaikan vs fk?</text>
          </g>
        </g>
      );

    // ==========================================
    // 06: BIDANG DATAR KATROL SETIMBANG (Wadah Pasir)
    // ==========================================
    case 6:
      return (
        <g>
          {/* Lab Table with Legs */}
          <rect x="60" y="140" width="410" height="18" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="60" y="158" width="410" height="12" fill="url(#roughHatch)" />
          {/* Legs */}
          <rect x="80" y="170" width="18" height="90" fill="#64748B" />
          <rect x="430" y="170" width="18" height="90" fill="#64748B" />
          <text x="240" y="200" textAnchor="middle" className="text-[11px] font-bold fill-gray-500 uppercase tracking-wider">
            Meja Kasar (μs = 0,50)
          </text>

          {/* Block A on Table */}
          <g transform="translate(180, 70)">
            <rect x="0" y="0" width="95" height="70" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2.5" />
            <text x="47" y="32" textAnchor="middle" className="text-sm font-black fill-white">
              Balok A
            </text>
            <text x="47" y="50" textAnchor="middle" className="text-xs font-bold fill-[#DDF7F3]">
              m_A = 8,0 kg
            </text>
          </g>

          {/* Pulley Bracket & Brass Wheel */}
          <circle cx="470" cy="140" r="16" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="470" cy="140" r="4" fill="#FFFFFF" />
          {/* Bracket clamp to table */}
          <path d="M 460 140 L 460 165 L 475 165" fill="none" stroke="#334155" strokeWidth="3" />

          {/* Continuous Rope */}
          <line x1="275" y1="105" x2="470" y2="105" stroke="#1E293B" strokeWidth="3" />
          <line x1="486" y1="140" x2="486" y2="190" stroke="#1E293B" strokeWidth="3" />

          {/* Hanging Bucket with Sand */}
          <g transform="translate(466, 190)">
            {/* Bucket Trapezoid */}
            <polygon points="0,15 40,15 34,48 6,48" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            {/* Handle */}
            <path d="M 0 15 Q 20 0 40 15" fill="none" stroke="#334155" strokeWidth="2" />
            {/* Sand inside */}
            <ellipse cx="20" cy="16" rx="16" ry="4" fill="#F59E0B" />
            <text x="20" y="36" textAnchor="middle" className="text-[10px] font-black fill-white">
              3 kg + Δm
            </text>
          </g>

          {/* Sand funnel hovering */}
          <polygon points="476,145 496,145 488,160 484,160" fill="#FBBF24" stroke="#D97706" />
          <text x="540" y="170" textAnchor="middle" className="text-[10px] font-bold fill-[#D97706]">
            + Pasir Perlahan
          </text>
        </g>
      );

    // ==========================================
    // 07: BIDANG DATAR KATROL BERGERAK (h = 1,6 m)
    // ==========================================
    case 7:
      return (
        <g>
          {/* Table */}
          <rect x="50" y="130" width="410" height="18" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="70" y="148" width="18" height="100" fill="#64748B" />
          <rect x="420" y="148" width="18" height="100" fill="#64748B" />

          {/* Block 1 (6 kg) on Table */}
          <g transform="translate(170, 65)">
            <rect x="0" y="0" width="90" height="65" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2.5" />
            <text x="45" y="30" textAnchor="middle" className="text-sm font-black fill-white">
              Balok 1
            </text>
            <text x="45" y="48" textAnchor="middle" className="text-xs font-bold fill-[#DDF7F3]">
              m1 = 6,0 kg
            </text>
          </g>

          {/* Pulley at Edge */}
          <circle cx="460" cy="130" r="16" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="460" cy="130" r="4" fill="#FFFFFF" />

          {/* Rope */}
          <line x1="260" y1="98" x2="460" y2="98" stroke="#1E293B" strokeWidth="3" />
          <line x1="476" y1="130" x2="476" y2="175" stroke="#1E293B" strokeWidth="3" />

          {/* Hanging Cylinder Weight 2 (4 kg) */}
          <g transform="translate(456, 175)">
            <rect x="0" y="0" width="40" height="45" rx="4" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />
            <text x="20" y="24" textAnchor="middle" className="text-xs font-black fill-white">m2</text>
            <text x="20" y="38" textAnchor="middle" className="text-[10px] font-bold fill-[#DBEAFE]">4 kg</text>
          </g>

          {/* Height Ruler Marker */}
          <g transform="translate(520, 175)">
            <line x1="0" y1="0" x2="0" y2="65" stroke="#008F8C" strokeWidth="2" />
            <line x1="-5" y1="0" x2="5" y2="0" stroke="#008F8C" strokeWidth="2" />
            <line x1="-5" y1="65" x2="5" y2="65" stroke="#008F8C" strokeWidth="2" />
            <text x="12" y="36" className="text-xs font-bold fill-[#008F8C]">
              h = 1,6 m
            </text>
          </g>

          {/* Floor Below Hanging Load */}
          <line x1="440" y1="240" x2="580" y2="240" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3,3" />
        </g>
      );

    // ==========================================
    // 08: KESETIMBANGAN BIDANG MIRING 37°
    // ==========================================
    case 8:
      return (
        <g>
          {/* Triangular Incline Ramp */}
          <polygon points="100,230 480,230 480,75" fill="url(#rampGradient)" stroke="#64748B" strokeWidth="2.5" />
          {/* Rough Ramp Texture Lines */}
          <line x1="100" y1="230" x2="480" y2="75" stroke="#94A3B8" strokeWidth="4" />
          {/* Floor */}
          <rect x="60" y="230" width="560" height="20" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />

          {/* Angle Protractor Visual at Angle 37° */}
          <path d="M 180 230 A 80 80 0 0 0 165 203" fill="none" stroke="#E05638" strokeWidth="2.5" />
          <text x="200" y="222" className="text-sm font-black fill-[#E05638]">
            θ = 37°
          </text>

          {/* Cargo Crate 12 kg Resting on Incline */}
          <g transform="translate(260, 165) rotate(-22.5)">
            <rect x="0" y="-60" width="85" height="60" rx="3" fill="url(#crateWood)" stroke="#78350F" strokeWidth="2" />
            <text x="42" y="-32" textAnchor="middle" className="text-xs font-black fill-white">
              Kargo 12 kg
            </text>
            <text x="42" y="-18" textAnchor="middle" className="text-[10px] font-bold fill-[#FEF3C7]">
              Diam Setimbang
            </text>
          </g>

          {/* Question Banner */}
          <text x="340" y="45" textAnchor="middle" className="text-xs font-bold fill-[#006B69]">
            Syarat Tidak Meluncur Turun: Berapa μs minimal & gaya normal N?
          </text>
        </g>
      );

    // ==========================================
    // 09: BIDANG MIRING KATROL SETIMBANG 30°
    // ==========================================
    case 9:
      return (
        <g>
          {/* Ramp 30° */}
          <polygon points="80,230 460,230 460,85" fill="url(#rampGradient)" stroke="#64748B" strokeWidth="2.5" />
          <line x1="80" y1="230" x2="460" y2="85" stroke="#94A3B8" strokeWidth="3" />
          <rect x="50" y="230" width="580" height="20" fill="#E2E8F0" />

          {/* Angle arc */}
          <path d="M 170 230 A 90 90 0 0 0 160 195" fill="none" stroke="#008F8C" strokeWidth="2" />
          <text x="185" y="220" className="text-xs font-bold fill-[#008F8C]">θ = 30°</text>

          {/* Pulley at Ramp Apex */}
          <circle cx="460" cy="85" r="16" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="460" cy="85" r="4" fill="#FFFFFF" />

          {/* Block A on Incline */}
          <g transform="translate(230, 172) rotate(-20.5)">
            <rect x="0" y="-55" width="80" height="55" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2" />
            <text x="40" y="-30" textAnchor="middle" className="text-xs font-black fill-white">Balok A</text>
            <text x="40" y="-14" textAnchor="middle" className="text-[10px] font-bold fill-[#DDF7F3]">10,0 kg</text>
          </g>

          {/* Rope */}
          <line x1="290" y1="135" x2="455" y2="72" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="476" y1="85" x2="476" y2="165" stroke="#1E293B" strokeWidth="2.5" />

          {/* Hanging Block B */}
          <g transform="translate(456, 165)">
            <rect x="0" y="0" width="40" height="45" rx="3" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />
            <text x="20" y="24" textAnchor="middle" className="text-xs font-black fill-white">Balok B</text>
            <text x="20" y="38" textAnchor="middle" className="text-[10px] font-bold fill-[#DBEAFE]">mB = ?</text>
          </g>
        </g>
      );

    // ==========================================
    // 10: BIDANG MIRING SISTEM BERGERAK NAIK
    // ==========================================
    case 10:
      return (
        <g>
          {/* Ramp 37° */}
          <polygon points="80,230 460,230 460,70" fill="url(#rampGradient)" stroke="#64748B" strokeWidth="2.5" />
          <rect x="50" y="230" width="580" height="20" fill="#E2E8F0" />
          <text x="160" y="222" className="text-xs font-bold fill-[#008F8C]">37°</text>

          {/* Apex Pulley */}
          <circle cx="460" cy="70" r="16" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="460" cy="70" r="4" fill="#FFFFFF" />

          {/* Block A (4 kg) Climbing Up */}
          <g transform="translate(230, 168) rotate(-22.5)">
            <rect x="0" y="-55" width="75" height="55" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2" />
            <text x="37" y="-30" textAnchor="middle" className="text-xs font-black fill-white">Balok A</text>
            <text x="37" y="-15" textAnchor="middle" className="text-[10px] font-bold fill-[#DDF7F3]">4,0 kg</text>
          </g>

          {/* Direction Indicator: Climbing Up Ramp */}
          <g transform="translate(240, 105)">
            <line x1="-30" y1="12" x2="30" y2="-12" stroke="#10B981" strokeWidth="3" markerEnd="url(#forceArrow)" />
            <text x="0" y="-18" textAnchor="middle" className="text-[11px] font-black fill-[#10B981]">
              Arah Gerak: NAIK
            </text>
          </g>

          {/* Rope */}
          <line x1="285" y1="130" x2="455" y2="58" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="476" y1="70" x2="476" y2="155" stroke="#1E293B" strokeWidth="2.5" />

          {/* Heavy Hanging Block B (6 kg) Moving Down */}
          <g transform="translate(456, 155)">
            <rect x="0" y="0" width="44" height="55" rx="3" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />
            <text x="22" y="28" textAnchor="middle" className="text-xs font-black fill-white">Balok B</text>
            <text x="22" y="44" textAnchor="middle" className="text-[10px] font-bold fill-[#DBEAFE]">6,0 kg</text>
          </g>
          {/* Arrow showing B moving down */}
          <line x1="515" y1="170" x2="515" y2="205" stroke="#2563EB" strokeWidth="2.5" markerEnd="url(#forceArrowBlue)" />
        </g>
      );

    // ==========================================
    // 11: BIDANG MIRING SISTEM BERGERAK TURUN
    // ==========================================
    case 11:
      return (
        <g>
          {/* Steep Ramp 53° */}
          <polygon points="80,230 420,230 420,40" fill="url(#rampGradient)" stroke="#64748B" strokeWidth="2.5" />
          <rect x="50" y="230" width="580" height="20" fill="#E2E8F0" />
          <text x="140" y="222" className="text-xs font-bold fill-[#E05638]">53° (Curam)</text>

          {/* Pulley */}
          <circle cx="420" cy="40" r="16" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="420" cy="40" r="4" fill="#FFFFFF" />

          {/* Heavy Block A (8 kg) Sliding Down */}
          <g transform="translate(250, 135) rotate(-28)">
            <rect x="0" y="-60" width="85" height="60" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2" />
            <text x="42" y="-35" textAnchor="middle" className="text-xs font-black fill-white">Balok A</text>
            <text x="42" y="-18" textAnchor="middle" className="text-[10px] font-bold fill-[#DDF7F3]">8,0 kg</text>
          </g>

          {/* Direction Indicator: Sliding Down */}
          <g transform="translate(190, 180)">
            <line x1="25" y1="-14" x2="-25" y2="14" stroke="#E05638" strokeWidth="3" markerEnd="url(#forceArrowRed)" />
            <text x="-5" y="32" textAnchor="middle" className="text-[11px] font-black fill-[#E05638]">
              Arah Gerak: TURUN
            </text>
          </g>

          {/* Rope */}
          <line x1="310" y1="92" x2="415" y2="28" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="436" y1="40" x2="436" y2="160" stroke="#1E293B" strokeWidth="2.5" />

          {/* Light Hanging Block B (2 kg) Being Pulled Up */}
          <g transform="translate(418, 160)">
            <rect x="0" y="0" width="36" height="38" rx="3" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />
            <text x="18" y="20" textAnchor="middle" className="text-xs font-black fill-white">mB</text>
            <text x="18" y="32" textAnchor="middle" className="text-[10px] font-bold fill-[#DBEAFE]">2,0 kg</text>
          </g>
          {/* Arrow showing B being lifted */}
          <line x1="470" y1="185" x2="470" y2="150" stroke="#10B981" strokeWidth="2.5" markerEnd="url(#forceArrow)" />
        </g>
      );

    // ==========================================
    // 12: DUA BIDANG MIRING PRISMA GANDA
    // ==========================================
    case 12:
      return (
        <g>
          {/* Symmetrical Double Wedge Prism */}
          <polygon points="100,230 340,60 580,230" fill="url(#rampGradient)" stroke="#64748B" strokeWidth="2.5" />
          <rect x="60" y="230" width="560" height="20" fill="#E2E8F0" />

          {/* Angles */}
          <text x="150" y="222" className="text-xs font-black fill-[#008F8C]">θ1 = 53°</text>
          <text x="510" y="222" className="text-xs font-black fill-[#2563EB]">θ2 = 30°</text>

          {/* Apex Pulley */}
          <circle cx="340" cy="60" r="16" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="340" cy="60" r="4" fill="#FFFFFF" />

          {/* Block 1 on Left Slope (5 kg) */}
          <g transform="translate(200, 160) rotate(-35)">
            <rect x="0" y="-45" width="65" height="45" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2" />
            <text x="32" y="-25" textAnchor="middle" className="text-xs font-black fill-white">m1</text>
            <text x="32" y="-12" textAnchor="middle" className="text-[9px] font-bold fill-[#DDF7F3]">5,0 kg</text>
          </g>

          {/* Block 2 on Right Slope (5 kg) */}
          <g transform="translate(440, 155) rotate(35)">
            <rect x="0" y="-45" width="65" height="45" rx="3" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />
            <text x="32" y="-25" textAnchor="middle" className="text-xs font-black fill-white">m2</text>
            <text x="32" y="-12" textAnchor="middle" className="text-[9px] font-bold fill-[#DBEAFE]">5,0 kg</text>
          </g>

          {/* Rope Connecting Both */}
          <line x1="240" y1="125" x2="330" y2="50" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="350" y1="50" x2="455" y2="125" stroke="#1E293B" strokeWidth="2.5" />

          <text x="340" y="260" textAnchor="middle" className="text-xs font-bold fill-[#006B69]">
            Massa Sama (5 kg vs 5 kg) • Lereng Kiri Lebih Curam daripada Lereng Kanan
          </text>
        </g>
      );

    // ==========================================
    // 13: KATROL BEBAS / BERGERAK (MANDATORY SPECIAL)
    // ==========================================
    case 13:
      return (
        <g>
          {/* Table */}
          <rect x="60" y="80" width="310" height="16" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          {/* Ceiling Attachment Beam */}
          <rect x="470" y="25" width="70" height="14" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
          <line x1="470" y1="39" x2="540" y2="39" stroke="#94A3B8" strokeWidth="2" />

          {/* Fixed Pulley 1 at Table Edge */}
          <circle cx="370" cy="80" r="14" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="370" cy="80" r="4" fill="#FFFFFF" />

          {/* Fixed Pulley 2 at Ceiling */}
          <circle cx="450" cy="45" r="14" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="450" cy="45" r="4" fill="#FFFFFF" />

          {/* Movable Pulley (Katrol Bebas) with Load 2 */}
          <g transform="translate(485, 120)">
            <circle cx="0" cy="0" r="16" fill="url(#pulleySteel)" stroke="#334155" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
            {/* Strut down to load */}
            <line x1="0" y1="16" x2="0" y2="35" stroke="#1E293B" strokeWidth="3" />
            {/* Load 2 Box (6 kg) */}
            <rect x="-30" y="35" width="60" height="50" rx="4" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2.5" />
            <text x="0" y="58" textAnchor="middle" className="text-xs font-black fill-white">Beban 2</text>
            <text x="0" y="72" textAnchor="middle" className="text-[10px] font-bold fill-[#DBEAFE]">m2 = 6,0 kg</text>
          </g>

          {/* Continuous Rope System */}
          {/* Block 1 to Table Pulley */}
          <line x1="210" y1="65" x2="370" y2="65" stroke="#1E293B" strokeWidth="3" />
          {/* Table Pulley to Top Pulley */}
          <line x1="384" y1="80" x2="436" y2="45" stroke="#1E293B" strokeWidth="3" />
          {/* Top Pulley down to Movable Pulley Left */}
          <line x1="464" y1="45" x2="469" y2="120" stroke="#1E293B" strokeWidth="3" />
          {/* Movable Pulley Right up to Ceiling */}
          <line x1="501" y1="120" x2="505" y2="39" stroke="#1E293B" strokeWidth="3" />
          {/* Anchor bolt on ceiling */}
          <circle cx="505" cy="39" r="4" fill="#E05638" />

          {/* Block 1 on Table */}
          <g transform="translate(150, 45)">
            <rect x="0" y="0" width="60" height="35" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2" />
            <text x="30" y="18" textAnchor="middle" className="text-xs font-black fill-white">Balok 1</text>
            <text x="30" y="29" textAnchor="middle" className="text-[9px] font-bold fill-[#DDF7F3]">1,0 kg</text>
          </g>

          {/* Annotations */}
          <text x="485" y="105" textAnchor="middle" className="text-[10px] font-black fill-[#E05638]">
            2 Segmen Tali (2T)
          </text>
          <text x="340" y="260" textAnchor="middle" className="text-xs font-bold fill-[#006B69]">
            Konfigurasi Katrol Bebas: 1 Ujung Terikat di Langit-Langit, Beban Ditopang Poros Katrol
          </text>
        </g>
      );

    // ==========================================
    // 14: GAYA MEMBENTUK SUDUT 37° KE ATAS
    // ==========================================
    case 14:
      return (
        <g>
          {/* Floor */}
          <rect x="50" y="185" width="580" height="25" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
          <rect x="50" y="210" width="580" height="35" fill="url(#roughHatch)" />

          {/* Heavy Tool Chest (20 kg) */}
          <g transform="translate(230, 85)">
            <rect x="0" y="0" width="130" height="100" rx="4" fill="url(#metalCrate)" stroke="#334155" strokeWidth="2.5" />
            {/* Drawers lines */}
            <line x1="10" y1="35" x2="120" y2="35" stroke="#334155" strokeWidth="1.5" />
            <line x1="10" y1="68" x2="120" y2="68" stroke="#334155" strokeWidth="1.5" />
            <rect x="50" y="15" width="30" height="6" rx="2" fill="#CBD5E1" />
            <rect x="50" y="48" width="30" height="6" rx="2" fill="#CBD5E1" />
            <rect x="50" y="80" width="30" height="6" rx="2" fill="#CBD5E1" />
            <text x="65" y="-10" textAnchor="middle" className="text-xs font-black fill-[#334155]">
              Peti Perkakas (20 kg)
            </text>
          </g>

          {/* Pulling Rope at 37° Elevation */}
          <g transform="translate(360, 135)">
            <line x1="0" y1="0" x2="160" y2="-120" stroke="#008F8C" strokeWidth="4.5" markerEnd="url(#forceArrow)" />
            {/* Horizontal guideline */}
            <line x1="0" y1="0" x2="130" y2="0" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4,4" />
            {/* Angle Arc 37° */}
            <path d="M 60 0 A 60 60 0 0 0 48 -36" fill="none" stroke="#E05638" strokeWidth="2" />
            <text x="75" y="-18" className="text-xs font-black fill-[#E05638]">θ = 37°</text>
            {/* Force Callout */}
            <rect x="110" y="-115" width="115" height="24" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="1.5" />
            <text x="167" y="-99" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
              F = 100,0 N
            </text>
          </g>
        </g>
      );

    // ==========================================
    // 15: SINTESIS 3 BENDA, 2 TALI, 1 KATROL
    // ==========================================
    case 15:
    default:
      return (
        <g>
          {/* Long Table */}
          <rect x="50" y="140" width="460" height="18" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="50" y="158" width="460" height="12" fill="url(#roughHatch)" />
          <rect x="70" y="170" width="18" height="90" fill="#64748B" />
          <rect x="470" y="170" width="18" height="90" fill="#64748B" />

          {/* Block A (3 kg) */}
          <g transform="translate(100, 80)">
            <rect x="0" y="0" width="70" height="60" rx="3" fill="#008F8C" stroke="#004D40" strokeWidth="2" />
            <text x="35" y="28" textAnchor="middle" className="text-xs font-black fill-white">Balok A</text>
            <text x="35" y="44" textAnchor="middle" className="text-[10px] font-bold fill-[#DDF7F3]">3,0 kg</text>
          </g>

          {/* Rope 1 */}
          <line x1="170" y1="110" x2="250" y2="110" stroke="#008F8C" strokeWidth="3" />
          <g transform="translate(210, 95)">
            <rect x="-24" y="-14" width="48" height="16" rx="3" fill="#FFFFFF" stroke="#008F8C" strokeWidth="1" />
            <text x="0" y="-3" textAnchor="middle" className="text-[9px] font-black fill-[#008F8C]">Tali 1</text>
          </g>

          {/* Block B (5 kg) */}
          <g transform="translate(250, 70)">
            <rect x="0" y="0" width="85" height="70" rx="3" fill="#006B69" stroke="#004D40" strokeWidth="2" />
            <text x="42" y="32" textAnchor="middle" className="text-xs font-black fill-white">Balok B</text>
            <text x="42" y="50" textAnchor="middle" className="text-[10px] font-bold fill-[#DDF7F3]">5,0 kg</text>
          </g>

          {/* Pulley at edge */}
          <circle cx="510" cy="140" r="16" fill="url(#pulleyBrass)" stroke="#78350F" strokeWidth="2" />
          <circle cx="510" cy="140" r="4" fill="#FFFFFF" />

          {/* Rope 2 */}
          <line x1="335" y1="105" x2="510" y2="105" stroke="#2563EB" strokeWidth="3" />
          <g transform="translate(420, 92)">
            <rect x="-24" y="-14" width="48" height="16" rx="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1" />
            <text x="0" y="-3" textAnchor="middle" className="text-[9px] font-black fill-[#2563EB]">Tali 2</text>
          </g>
          <line x1="526" y1="140" x2="526" y2="185" stroke="#2563EB" strokeWidth="3" />

          {/* Hanging Block C (8 kg) */}
          <g transform="translate(506, 185)">
            <rect x="0" y="0" width="42" height="50" rx="3" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />
            <text x="21" y="24" textAnchor="middle" className="text-xs font-black fill-white">Balok C</text>
            <text x="21" y="40" textAnchor="middle" className="text-[10px] font-bold fill-[#DBEAFE]">8,0 kg</text>
          </g>

          <text x="340" y="255" textAnchor="middle" className="text-xs font-bold fill-[#006B69]">
            Rangkaian 3 Benda Terhubung 2 Tali Mandiri • Meja Kasar (μk = 0,15)
          </text>
        </g>
      );
  }
}
