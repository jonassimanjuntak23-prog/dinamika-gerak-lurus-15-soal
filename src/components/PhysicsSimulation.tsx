/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MISTER JO - DYNAMICS LAB: PHYSICS SIMULATION ENGINE
 * Pure Newtonian kinematics-driven single-run simulation.
 * Animates strictly based on calculated physical parameters (a, v0, t, s).
 */

import React, { useState, useEffect, useRef } from 'react';
import { SimulationParams } from '../types/physics';
import { Play, RotateCcw, CheckCircle2, Gauge, Clock, Navigation } from 'lucide-react';

interface PhysicsSimulationProps {
  simulation: SimulationParams;
  problemId: number;
}

export const PhysicsSimulation: React.FC<PhysicsSimulationProps> = ({
  simulation,
  problemId,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [simTime, setSimTime] = useState(0);
  const [currentDisplacement, setCurrentDisplacement] = useState(0);
  const [currentVelocity, setCurrentVelocity] = useState(simulation.initialVelocity || 0);

  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Reset simulation when problem changes
  useEffect(() => {
    resetSimulation();
  }, [problemId]);

  const resetSimulation = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    setIsRunning(false);
    setIsCompleted(false);
    setSimTime(0);
    setCurrentDisplacement(0);
    setCurrentVelocity(simulation.initialVelocity || 0);
    startTimeRef.current = null;
  };

  const startSimulation = () => {
    resetSimulation();
    setIsRunning(true);
    startTimeRef.current = performance.now();

    const maxDurationSec = simulation.duration || 2.5;

    const animate = (now: number) => {
      if (!startTimeRef.current) return;
      const elapsedMs = now - startTimeRef.current;
      const elapsedSec = elapsedMs / 1000;

      if (elapsedSec >= maxDurationSec) {
        // Simulation finished 1 sequence
        setSimTime(maxDurationSec);
        if (simulation.state === 'SETIMBANG') {
          setCurrentDisplacement(simulation.initialVelocity * maxDurationSec);
          setCurrentVelocity(simulation.initialVelocity);
        } else {
          const sFinal =
            simulation.initialVelocity * maxDurationSec +
            0.5 * simulation.acceleration * maxDurationSec * maxDurationSec;
          const vFinal = simulation.initialVelocity + simulation.acceleration * maxDurationSec;
          setCurrentDisplacement(sFinal);
          setCurrentVelocity(vFinal);
        }
        setIsRunning(false);
        setIsCompleted(true);
        return;
      }

      setSimTime(elapsedSec);
      if (simulation.state === 'SETIMBANG') {
        const sCurrent = simulation.initialVelocity * elapsedSec;
        setCurrentDisplacement(sCurrent);
        setCurrentVelocity(simulation.initialVelocity);
      } else {
        const sCurrent =
          simulation.initialVelocity * elapsedSec +
          0.5 * simulation.acceleration * elapsedSec * elapsedSec;
        const vCurrent = simulation.initialVelocity + simulation.acceleration * elapsedSec;
        setCurrentDisplacement(sCurrent);
        setCurrentVelocity(vCurrent);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
  };

  // Visual displacement progress (normalized 0 to 1)
  const maxDisplacement = Math.max(0.1, simulation.displacement || 5);
  const progress = Math.min(1, Math.max(0, currentDisplacement / maxDisplacement));

  return (
    <div className="bg-white rounded-2xl border-2 border-[#DDF7F3] p-5 shadow-sm">
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DDF7F3]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#20BFAF] animate-ping" />
          <h3 className="text-xl font-bold text-[#163A3A] tracking-tight">
            Laboratorium Simulasi Dinamika Gerak Newton
          </h3>
        </div>

        {/* State Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
              simulation.state === 'SETIMBANG'
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
            }`}
          >
            STATUS SISTEM: {simulation.state}
          </span>
        </div>
      </div>

      {/* Control Buttons & Telemetry HUD */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
        <div className="bg-[#F4FBFA] p-3 rounded-xl border border-[#DDF7F3] flex items-center gap-3">
          <Clock className="w-5 h-5 text-[#008F8C]" />
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-500">Waktu (t)</div>
            <div className="text-lg font-black text-[#163A3A] font-mono">
              {simTime.toFixed(2)} s
            </div>
          </div>
        </div>

        <div className="bg-[#F4FBFA] p-3 rounded-xl border border-[#DDF7F3] flex items-center gap-3">
          <Gauge className="w-5 h-5 text-[#008F8C]" />
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-500">Percepatan (a)</div>
            <div className="text-lg font-black text-[#163A3A] font-mono">
              {simulation.acceleration.toFixed(2)} m/s²
            </div>
          </div>
        </div>

        <div className="bg-[#F4FBFA] p-3 rounded-xl border border-[#DDF7F3] flex items-center gap-3">
          <Navigation className="w-5 h-5 text-[#008F8C]" />
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-500">Kecepatan (v)</div>
            <div className="text-lg font-black text-[#163A3A] font-mono">
              {currentVelocity.toFixed(2)} m/s
            </div>
          </div>
        </div>

        <div className="bg-[#F4FBFA] p-3 rounded-xl border border-[#DDF7F3] flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#008F8C]" />
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-500">Perpindahan (s)</div>
            <div className="text-lg font-black text-[#163A3A] font-mono">
              {currentDisplacement.toFixed(2)} m
            </div>
          </div>
        </div>
      </div>

      {/* Physics Canvas Area */}
      <div className="bg-[#F4FBFA] rounded-xl border border-[#DDF7F3] p-4 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
        {/* Render Scenario Based on Simulation Type */}
        <SimulationRenderer
          type={simulation.type}
          progress={progress}
          simTime={simTime}
          acceleration={simulation.acceleration}
          state={simulation.state}
          problemId={problemId}
        />

        {/* Direction Note Banner */}
        <div className="mt-3 text-xs font-semibold text-[#006B69] text-center bg-white/90 border border-[#DDF7F3] px-4 py-1.5 rounded-full shadow-xs">
          Arah Gerak: <span className="font-bold">{simulation.directionDescription}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
        <div className="flex items-center gap-2">
          <button
            onClick={startSimulation}
            disabled={isRunning}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition ${
              isRunning
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#008F8C] text-white hover:bg-[#006B69]'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            {isCompleted ? 'Ulangi Buktikan dengan Simulasi' : 'BUKTIKAN DENGAN SIMULASI'}
          </button>

          <button
            onClick={resetSimulation}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            <RotateCcw className="w-4 h-4" /> Reset Posisi
          </button>
        </div>

        <div className="text-xs text-gray-500 italic">
          *Simulasi berjalan 1 kali dari t = 0 hingga t_akhir berdasarkan model kinematika Newton.
        </div>
      </div>

      {/* Mister Jo Analytical Conclusion */}
      {isCompleted && (
        <div className="mt-4 p-4 rounded-xl bg-[#DDF7F3]/70 border-2 border-[#20BFAF] animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#008F8C] text-white font-black text-sm flex items-center justify-center shrink-0">
              MJ
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#006B69] mb-1">
                Komentar Analisis Mister Jo:
              </h4>
              <p className="text-xs text-[#163A3A] leading-relaxed font-medium">
                {simulation.misterJoComment}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Procedural Dynamic SVG Simulation Visualizer for All 15 Configurations
 */
const SimulationRenderer: React.FC<{
  type: SimulationParams['type'];
  progress: number;
  simTime: number;
  acceleration: number;
  state: 'SETIMBANG' | 'BERGERAK';
  problemId: number;
}> = ({ type, progress, simTime, acceleration, state, problemId }) => {
  // SVG Canvas dimensions: 640 x 260
  const width = 640;
  const height = 260;

  // Problem 13: SPECIAL MOVABLE PULLEY
  if (type === 'movable_pulley' || problemId === 13) {
    // Balok 1 moves s1 = 2 * s2
    // Let max table travel be 180px, then movable pulley drops 90px
    const block1X = 140 + progress * 180;
    const pulleyY = 100 + progress * 80;
    const load2Y = pulleyY + 40;

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[250px] select-none">
        {/* Table & Ceiling */}
        <rect x="40" y="70" width="300" height="15" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        <line x1="40" y1="85" x2="340" y2="85" stroke="#CBD5E1" strokeWidth="2" />
        {/* Ceiling for wall attachment */}
        <rect x="460" y="20" width="60" height="12" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        <line x1="460" y1="32" x2="520" y2="32" stroke="#CBD5E1" strokeWidth="2" />

        {/* Fixed Pulley at table edge */}
        <circle cx="340" cy="70" r="14" fill="#64748B" stroke="#334155" strokeWidth="2" />
        <circle cx="340" cy="70" r="4" fill="#FFFFFF" />

        {/* Fixed Pulley at top ceiling */}
        <circle cx="430" cy="40" r="14" fill="#64748B" stroke="#334155" strokeWidth="2" />
        <circle cx="430" cy="40" r="4" fill="#FFFFFF" />

        {/* Movable Pulley floating with load 2 */}
        <circle cx="460" cy={pulleyY} r="16" fill="#008F8C" stroke="#006B69" strokeWidth="2.5" />
        <circle cx="460" cy={pulleyY} r="4" fill="#FFFFFF" />

        {/* Continuous Rope */}
        {/* Segment 1: from Block 1 to Table Fixed Pulley */}
        <line x1={block1X + 50} y1="55" x2="340" y2="55" stroke="#1E293B" strokeWidth="3" />
        {/* Segment 2: from Table Pulley to Top Pulley */}
        <line x1="354" y1="70" x2="416" y2="40" stroke="#1E293B" strokeWidth="3" />
        {/* Segment 3: from Top Pulley down to Movable Pulley Left */}
        <line x1="444" y1="40" x2="444" y2={pulleyY} stroke="#1E293B" strokeWidth="3" />
        {/* Segment 4: from Movable Pulley Right up to Ceiling Anchor */}
        <line x1="476" y1={pulleyY} x2="476" y2="32" stroke="#1E293B" strokeWidth="3" />

        {/* Load Block 1 on Table */}
        <rect x={block1X} y="35" width="50" height="35" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="2.5" />
        <text x={block1X + 25} y="57" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
          m1 = 1 kg
        </text>

        {/* Load 2 suspended from Movable Pulley */}
        <line x1="460" y1={pulleyY + 16} x2="460" y2={load2Y} stroke="#1E293B" strokeWidth="3" />
        <rect x="430" y={load2Y} width="60" height="42" rx="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
        <text x="460" y={load2Y + 26} textAnchor="middle" className="text-xs font-black fill-[#2563EB]">
          m2 = 6 kg
        </text>

        {/* Real-time markers showing s1 = 2*s2 */}
        <text x="140" y="24" className="text-[11px] font-bold fill-[#008F8C]">
          x1 = {(progress * 6.0).toFixed(2)} m (a1 = 12 m/s²)
        </text>
        <text x="440" y={load2Y + 62} className="text-[11px] font-bold fill-[#2563EB]">
          y2 = {(progress * 3.0).toFixed(2)} m (a2 = 6 m/s²)
        </text>
      </svg>
    );
  }

  // Inclined Plane Scenarios (Problems 8, 9, 10, 11)
  if (
    type === 'incline_equil' ||
    type === 'incline_pulley_equil' ||
    type === 'incline_pulley_up' ||
    type === 'incline_pulley_down' ||
    [8, 9, 10, 11].includes(problemId)
  ) {
    const isUp = type === 'incline_pulley_up' || problemId === 10;
    const isDown = type === 'incline_pulley_down' || problemId === 11;
    const isEquil = state === 'SETIMBANG' || type === 'incline_equil' || type === 'incline_pulley_equil';

    // Wedge triangle coordinates
    const wedgeX1 = 80;
    const wedgeY1 = 220;
    const wedgeX2 = 420;
    const wedgeY2 = 220;
    const wedgeX3 = 420;
    const wedgeY3 = 60; // top peak

    // Pulley at peak (420, 60)
    const pulleyX = 420;
    const pulleyY = 55;

    // Incline slope math: angle ~ 25 degrees visually
    const slopeLength = Math.hypot(wedgeX3 - wedgeX1, wedgeY3 - wedgeY1);
    const cosAngle = (wedgeX3 - wedgeX1) / slopeLength;
    const sinAngle = (wedgeY1 - wedgeY3) / slopeLength;

    // Balok position on incline
    let baseOffset = 0.45; // middle of ramp
    if (isUp) {
      baseOffset = 0.35 + progress * 0.45; // climbs up towards peak
    } else if (isDown) {
      baseOffset = 0.75 - progress * 0.45; // slides down
    }

    const blockX = wedgeX1 + baseOffset * (wedgeX3 - wedgeX1);
    const blockY = wedgeY1 - baseOffset * (wedgeY1 - wedgeY3);

    // Hanging load Y
    const loadY = isUp ? 130 + progress * 60 : isDown ? 170 - progress * 60 : 150;

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[250px] select-none">
        {/* Wedge Surface */}
        <polygon
          points={`${wedgeX1},${wedgeY1} ${wedgeX2},${wedgeY2} ${wedgeX3},${wedgeY3}`}
          fill="#E2E8F0"
          stroke="#94A3B8"
          strokeWidth="2.5"
        />
        <text x="360" y="210" className="text-xs font-bold fill-gray-500">
          θ
        </text>

        {/* Pulley at Peak */}
        <circle cx={pulleyX} cy={pulleyY} r="14" fill="#64748B" stroke="#334155" strokeWidth="2" />
        <circle cx={pulleyX} cy={pulleyY} r="4" fill="#FFFFFF" />

        {/* Rope */}
        {/* From Block to Pulley */}
        <line x1={blockX} y1={blockY - 10} x2={pulleyX} y2={pulleyY} stroke="#1E293B" strokeWidth="3" />
        {/* From Pulley down to hanging load */}
        <line x1={pulleyX + 14} y1={pulleyY} x2={pulleyX + 14} y2={loadY} stroke="#1E293B" strokeWidth="3" />

        {/* Block on Incline (Rotated) */}
        <g transform={`translate(${blockX}, ${blockY}) rotate(-25)`}>
          <rect x="-30" y="-30" width="60" height="30" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="2.5" />
          <text x="0" y="-10" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
            Balok A
          </text>
        </g>

        {/* Hanging Load B */}
        <rect x={pulleyX - 8} y={loadY} width="44" height="40" rx="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
        <text x={pulleyX + 14} y={loadY + 25} textAnchor="middle" className="text-xs font-black fill-[#2563EB]">
          Balok B
        </text>

        {/* State Label */}
        {isEquil && (
          <text x="240" y="40" className="text-xs font-black fill-amber-700 bg-amber-100 px-2 py-1">
            KONDISI SETIMBANG: ΣF = 0 (DIAM)
          </text>
        )}
      </svg>
    );
  }

  // Double Incline Scenario (Problem 12)
  if (type === 'double_incline' || problemId === 12) {
    const peakX = 320;
    const peakY = 60;
    const leftX = 100;
    const leftY = 220;
    const rightX = 540;
    const rightY = 220;

    // Balok 1 slides down left, Balok 2 climbs up right
    const leftProgress = 0.5 - progress * 0.35; // moves down left
    const rightProgress = 0.35 + progress * 0.35; // moves up right

    const b1X = leftX + leftProgress * (peakX - leftX);
    const b1Y = leftY - leftProgress * (leftY - peakY);

    const b2X = rightX - rightProgress * (rightX - peakX);
    const b2Y = rightY - rightProgress * (rightY - peakY);

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[250px] select-none">
        {/* Double Wedge Triangle */}
        <polygon
          points={`${leftX},${leftY} ${peakX},${peakY} ${rightX},${rightY}`}
          fill="#E2E8F0"
          stroke="#94A3B8"
          strokeWidth="2.5"
        />
        <text x="140" y="210" className="text-xs font-bold fill-gray-500">
          53°
        </text>
        <text x="490" y="210" className="text-xs font-bold fill-gray-500">
          30°
        </text>

        {/* Pulley at Peak */}
        <circle cx={peakX} cy={peakY} r="14" fill="#64748B" stroke="#334155" strokeWidth="2" />
        <circle cx={peakX} cy={peakY} r="4" fill="#FFFFFF" />

        {/* Ropes */}
        <line x1={b1X} y1={b1Y - 10} x2={peakX - 10} y2={peakY} stroke="#1E293B" strokeWidth="3" />
        <line x1={peakX + 10} y1={peakY} x2={b2X} y2={b2Y - 10} stroke="#1E293B" strokeWidth="3" />

        {/* Block 1 on Left */}
        <g transform={`translate(${b1X}, ${b1Y}) rotate(-36)`}>
          <rect x="-25" y="-25" width="50" height="25" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="2.5" />
          <text x="0" y="-8" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
            m1=5kg
          </text>
        </g>

        {/* Block 2 on Right */}
        <g transform={`translate(${b2X}, ${b2Y}) rotate(25)`}>
          <rect x="-25" y="-25" width="50" height="25" rx="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
          <text x="0" y="-8" textAnchor="middle" className="text-xs font-black fill-[#2563EB]">
            m2=5kg
          </text>
        </g>
      </svg>
    );
  }

  // Three Bodies System (Problem 15)
  if (type === 'three_bodies_pulley' || problemId === 15) {
    const startX = 60;
    const travel = progress * 130;
    const bAX = startX + travel;
    const bBX = bAX + 85;
    const loadCY = 90 + progress * 90;

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[250px] select-none">
        {/* Table */}
        <rect x="40" y="110" width="400" height="15" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        {/* Pulley at table edge */}
        <circle cx="440" cy="110" r="14" fill="#64748B" stroke="#334155" strokeWidth="2" />
        <circle cx="440" cy="110" r="4" fill="#FFFFFF" />

        {/* Rope 1: between A and B */}
        <line x1={bAX + 45} y1="90" x2={bBX} y2="90" stroke="#008F8C" strokeWidth="3" />
        <text x={(bAX + 45 + bBX) / 2} y="82" textAnchor="middle" className="text-[10px] font-black fill-[#008F8C]">
          T₁=17.25N
        </text>

        {/* Rope 2: from B to Pulley and down to C */}
        <line x1={bBX + 45} y1="90" x2="440" y2="90" stroke="#2563EB" strokeWidth="3" />
        <line x1="454" y1="110" x2="454" y2={loadCY} stroke="#2563EB" strokeWidth="3" />
        <text x="360" y="82" textAnchor="middle" className="text-[10px] font-black fill-[#2563EB]">
          T₂=46N
        </text>

        {/* Block A */}
        <rect x={bAX} y="75" width="45" height="35" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="2.5" />
        <text x={bAX + 22} y="97" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
          A (3kg)
        </text>

        {/* Block B */}
        <rect x={bBX} y="70" width="45" height="40" rx="4" fill="#FFFFFF" stroke="#006B69" strokeWidth="2.5" />
        <text x={bBX + 22} y="95" textAnchor="middle" className="text-xs font-black fill-[#006B69]">
          B (5kg)
        </text>

        {/* Block C */}
        <rect x="430" y={loadCY} width="50" height="45" rx="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
        <text x="455" y={loadCY + 28} textAnchor="middle" className="text-xs font-black fill-[#2563EB]">
          C (8kg)
        </text>
      </svg>
    );
  }

  // Standard Table Pulley (Problems 6 & 7)
  if (type === 'table_pulley_equil' || type === 'table_pulley_motion' || [6, 7].includes(problemId)) {
    const isEquil = state === 'SETIMBANG' || type === 'table_pulley_equil';
    const travel = isEquil ? 0 : progress * 140;
    const blockX = 140 + travel;
    const loadY = isEquil ? 130 : 110 + progress * 90;

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[250px] select-none">
        {/* Table Surface */}
        <rect x="60" y="120" width="360" height="15" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        {/* Table Legs */}
        <rect x="80" y="135" width="16" height="90" fill="#CBD5E1" />
        <rect x="390" y="135" width="16" height="90" fill="#CBD5E1" />

        {/* Pulley at edge */}
        <circle cx="420" cy="120" r="14" fill="#64748B" stroke="#334155" strokeWidth="2" />
        <circle cx="420" cy="120" r="4" fill="#FFFFFF" />

        {/* Rope */}
        <line x1={blockX + 55} y1="100" x2="420" y2="100" stroke="#1E293B" strokeWidth="3" />
        <line x1="434" y1="120" x2="434" y2={loadY} stroke="#1E293B" strokeWidth="3" />

        {/* Block on Table */}
        <rect x={blockX} y="80" width="55" height="40" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="2.5" />
        <text x={blockX + 27} y="105" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
          Balok 1
        </text>

        {/* Hanging Load */}
        <rect x="412" y={loadY} width="45" height="40" rx="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
        <text x="434" y={loadY + 25} textAnchor="middle" className="text-xs font-black fill-[#2563EB]">
          Beban 2
        </text>

        {isEquil && (
          <text x="240" y="50" className="text-xs font-black fill-amber-700 bg-amber-100 px-3 py-1">
            KONDISI SETIMBANG: W_gantung ≤ fs_maks (DIAM SEMPURNA)
          </text>
        )}
      </svg>
    );
  }

  // Flat Floor Horizontal Scenarios (Problems 1, 2, 3, 4, 5, 14)
  const isAngleForce = type === 'angle_force_flat' || problemId === 14;
  const isTwoBlocks = type === 'two_blocks_flat' || [3, 4].includes(problemId);
  const travelX = progress * 240;
  const baseX = 80 + travelX;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[250px] select-none">
      {/* Floor */}
      <rect x="40" y="170" width="560" height="15" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
      <line x1="40" y1="185" x2="600" y2="185" stroke="#CBD5E1" strokeWidth="2" />

      {/* Renders single block or two blocks */}
      {isTwoBlocks ? (
        <>
          {/* Block A */}
          <rect x={baseX} y="110" width="55" height="60" rx="4" fill="#FFFFFF" stroke="#008F8C" strokeWidth="2.5" />
          <text x={baseX + 27} y="145" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
            A
          </text>

          {/* Block B or String */}
          {problemId === 4 ? (
            <>
              {/* String between A and B */}
              <line x1={baseX + 55} y1="140" x2={baseX + 115} y2="140" stroke="#1E293B" strokeWidth="3" />
              <text x={baseX + 85} y="132" textAnchor="middle" className="text-[10px] font-bold fill-[#008F8C]">
                Tali
              </text>
              <rect x={baseX + 115} y="100" width="70" height="70" rx="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
              <text x={baseX + 150} y="140" textAnchor="middle" className="text-xs font-black fill-[#2563EB]">
                Q (7kg)
              </text>
            </>
          ) : (
            // Problem 3 Touching blocks
            <>
              <rect x={baseX + 55} y="95" width="70" height="75" rx="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
              <text x={baseX + 90} y="140" textAnchor="middle" className="text-xs font-black fill-[#2563EB]">
                B (6kg)
              </text>
            </>
          )}
        </>
      ) : (
        // Single block
        <>
          <rect x={baseX} y="100" width="75" height="70" rx="5" fill="#FFFFFF" stroke="#008F8C" strokeWidth="2.5" />
          <text x={baseX + 37} y="140" textAnchor="middle" className="text-xs font-black fill-[#008F8C]">
            m = 20 kg
          </text>

          {/* If pulling with angle */}
          {isAngleForce && (
            <g>
              <line x1={baseX + 75} y1="120" x2={baseX + 160} y2="60" stroke="#E05638" strokeWidth="3.5" />
              <polygon points={`${baseX + 165},${baseX + 56} ${baseX + 150},${baseX + 65} ${baseX + 155},${baseX + 50}`} fill="#E05638" />
              <text x={baseX + 130} y="55" className="text-xs font-bold fill-[#E05638]">
                F = 100 N (37°)
              </text>
            </g>
          )}
        </>
      )}
    </svg>
  );
};
