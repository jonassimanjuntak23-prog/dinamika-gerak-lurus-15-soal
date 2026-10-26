/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MISTER JO - DYNAMICS LAB: PURE NEWTONIAN PHYSICS CALCULATION ENGINE
 * Decoupled, fully deterministic, and validated for all 15 HOTS problems.
 */

export const GRAVITY = 10; // Standard g = 10 m/s^2

/**
 * Problem 1: Hukum I Newton - Kesetimbangan translasi
 */
export function solveProblem1(F1: number, F2: number) {
  // F1 ke timur (+), F2 ke barat (-)
  // ΣF_x = F1 - F2 + F3 = 0  =>  F3 = F2 - F1
  const F3 = F2 - F1; // -15 N (15 N ke barat)
  const a = 0;
  const state = 'SETIMBANG';
  return { F3, magnitudeF3: Math.abs(F3), directionF3: F3 < 0 ? 'Barat (Kiri)' : 'Timur (Kanan)', a, state };
}

/**
 * Problem 2: Hukum II Newton - Eksperimen F vs a
 */
export function solveProblem2(
  dataPoints: { F: number; a: number }[],
  extraMass: number,
  newForce: number
) {
  // Slope F / a = m0
  const m0 = dataPoints[0].F / dataPoints[0].a;
  const mTotal = m0 + extraMass;
  const newAcc = newForce / mTotal;
  return { m0, mTotal, newAcc };
}

/**
 * Problem 3: Hukum III Newton - Dua balok bersentuhan
 */
export function solveProblem3(mA: number, mB: number, F: number) {
  const a = F / (mA + mB);
  const FAB = mB * a; // Gaya kontak dari A ke B
  const FBA = FAB;    // Gaya kontak dari B ke A (arah berlawanan)
  return { a, FAB, FBA };
}

/**
 * Problem 4: Dua balok dihubungkan tali licin datar
 */
export function solveProblem4(mP: number, mQ: number, F: number) {
  const a = F / (mP + mQ);
  // Kasus 1: F menarik Q (tali menarik P)
  const T1 = mP * a;
  // Kasus 2: F menarik P (tali menarik Q)
  const T2 = mQ * a;
  return { a, T1, T2 };
}

/**
 * Problem 5: Kesetimbangan dengan gesekan statis vs kinetis
 */
export function solveProblem5(m: number, muS: number, muK: number, F: number) {
  const N = m * GRAVITY;
  const fsMax = muS * N;
  const fk = muK * N;

  if (F < fsMax) {
    return { N, fsMax, fk, friction: F, a: 0, state: 'SETIMBANG' as const, note: 'Diam (fs = F)' };
  } else if (Math.abs(F - fsMax) < 1e-6) {
    return { N, fsMax, fk, friction: fsMax, a: 0, state: 'SETIMBANG' as const, note: 'Tepat akan bergerak (fs = fs_max)' };
  } else {
    const a = (F - fk) / m;
    return { N, fsMax, fk, friction: fk, a, state: 'BERGERAK' as const, note: 'Bergerak dipercepat (gesek kinetis fk)' };
  }
}

/**
 * Problem 6: Bidang datar meja kasar + katrol tetap setimbang
 */
export function solveProblem6(mA: number, mB: number, muS: number) {
  const NA = mA * GRAVITY;
  const fsMax = muS * NA;
  const WB = mB * GRAVITY;
  const isEquilibrium = WB <= fsMax;
  const tension = WB;
  const fs = WB; // Gaya gesek statis menyesuaikan
  const maxTotalMB = fsMax / GRAVITY;
  const maxExtraMass = Math.max(0, maxTotalMB - mB);
  return { NA, fsMax, WB, isEquilibrium, tension, fs, maxTotalMB, maxExtraMass };
}

/**
 * Problem 7: Meja kasar + katrol tetap bergerak
 */
export function solveProblem7(m1: number, m2: number, muK: number, h: number) {
  const N1 = m1 * GRAVITY;
  const fk = muK * N1;
  const W2 = m2 * GRAVITY;
  const netForce = W2 - fk;
  const a = netForce / (m1 + m2);
  const tension = m2 * (GRAVITY - a);
  const vFinal = Math.sqrt(2 * a * h);
  return { N1, fk, W2, a, tension, vFinal };
}

/**
 * Problem 8: Kesetimbangan bidang miring
 */
export function solveProblem8(m: number, sinTheta: number, cosTheta: number) {
  const W = m * GRAVITY;
  const Wx = Math.round(W * sinTheta * 100) / 100;
  const Wy = Math.round(W * cosTheta * 100) / 100;
  const N = Wy;
  const fs = Wx; // Agar setimbang
  const minMuS = Math.round((sinTheta / cosTheta) * 1000) / 1000; // tan(theta) = 0.75
  return { W, Wx, Wy, N, fs, minMuS };
}

/**
 * Problem 9: Bidang miring + katrol setimbang
 */
export function solveProblem9(mA: number, sinTheta: number, cosTheta: number, muS: number) {
  const WA = mA * GRAVITY;
  const WAx = Math.round(WA * sinTheta * 100) / 100;
  const NA = Math.round(WA * cosTheta * 100) / 100;
  const fsMax = Math.round(muS * NA * 100) / 100;

  // Kasus licin (muS = 0):
  const mBSmooth = Math.round((WAx / GRAVITY) * 100) / 100;

  // Kasus kasar:
  const TMin = Math.round((WAx - fsMax) * 100) / 100;
  const TMax = Math.round((WAx + fsMax) * 100) / 100;
  const mBMin = Math.round((TMin / GRAVITY) * 100) / 100;
  const mBMax = Math.round((TMax / GRAVITY) * 100) / 100;

  return { WAx, NA, fsMax, mBSmooth, TMin, TMax, mBMin, mBMax };
}

/**
 * Problem 10: Bidang miring ditarik beban katrol bergerak NAIK
 */
export function solveProblem10(
  mA: number,
  mB: number,
  sinTheta: number,
  cosTheta: number,
  muK: number
) {
  const WA = mA * GRAVITY;
  const WAx = Math.round(WA * sinTheta * 100) / 100;
  const NA = Math.round(WA * cosTheta * 100) / 100;
  const fk = Math.round(muK * NA * 100) / 100; // Arah ke bawah lereng karena balok naik
  const WB = mB * GRAVITY;

  const netForce = Math.round((WB - WAx - fk) * 100) / 100;
  const a = Math.round((netForce / (mA + mB)) * 100) / 100;
  const tension = Math.round((mB * (GRAVITY - a)) * 100) / 100;

  return { WAx, NA, fk, WB, netForce, a, tension };
}

/**
 * Problem 11: Bidang miring balok meluncur TURUN
 */
export function solveProblem11(
  mA: number,
  mB: number,
  sinTheta: number,
  cosTheta: number,
  muK: number
) {
  const WA = mA * GRAVITY;
  const WAx = Math.round(WA * sinTheta * 100) / 100; // Gaya pendorong turun
  const NA = Math.round(WA * cosTheta * 100) / 100;
  const fk = Math.round(muK * NA * 100) / 100; // Arah ke atas lereng karena balok turun
  const WB = mB * GRAVITY; // Penahan dari beban gantung

  const netForce = Math.round((WAx - WB - fk) * 100) / 100;
  const a = Math.round((netForce / (mA + mB)) * 100) / 100;
  const tension = Math.round((mB * (GRAVITY + a)) * 100) / 100;

  return { WAx, NA, fk, WB, netForce, a, tension };
}

/**
 * Problem 12: Dua bidang miring terhubung katrol tetap
 */
export function solveProblem12(
  m1: number,
  m2: number,
  sin1: number,
  cos1: number,
  sin2: number,
  cos2: number
) {
  const W1 = m1 * GRAVITY;
  const W2 = m2 * GRAVITY;
  const F1 = W1 * sin1;
  const F2 = W2 * sin2;

  // F1 > F2 => Benda 1 meluncur turun, benda 2 naik
  const netForce = F1 - F2;
  const a = netForce / (m1 + m2);
  const tension = F2 + m2 * a;

  return { F1, F2, netForce, a, tension };
}

/**
 * Problem 13: KATROL BEBAS / BERGERAK (MANDATORY SPECIAL)
 * Benda 1 di atas meja licin terhubung ke tali.
 * Tali menopang katrol bergerak berbeban m2.
 * Kendala panjang tali: x1 + 2*y2 = L => a1 = 2 * a2
 * Pada m1: T = m1 * a1 = 2 * m1 * a2
 * Pada katrol bergerak m2: m2*g - 2T = m2 * a2
 * Substitusi: m2*g - 4*m1*a2 = m2*a2  =>  a2 = (m2 * g) / (4*m1 + m2)
 * a1 = 2 * a2
 * T = m1 * a1
 */
export function solveProblem13(m1: number, m2: number) {
  const W2 = m2 * GRAVITY;
  const denominator = 4 * m1 + m2;
  const a2 = W2 / denominator;
  const a1 = 2 * a2;
  const tension = m1 * a1;
  const check = W2 - 2 * tension; // harus sama dengan m2 * a2
  return { W2, a1, a2, tension, check };
}

/**
 * Problem 14: Gaya membentuk sudut pada bidang kasar
 */
export function solveProblem14(
  m: number,
  F: number,
  sinTheta: number,
  cosTheta: number,
  muS: number,
  muK: number
) {
  const W = m * GRAVITY;
  const Fx = F * cosTheta;
  const Fy = F * sinTheta; // menarik ke atas
  const N = W - Fy; // Normal berkurang!
  const fsMax = muS * N;
  const isMoving = Fx > fsMax;
  const fk = muK * N;
  const a = isMoving ? (Fx - fk) / m : 0;

  // Analisis jika mendorong ke bawah:
  const N_push = W + Fy;
  const fk_push = muK * N_push;
  const a_push = (Fx - fk_push) / m;

  return { W, Fx, Fy, N, fsMax, isMoving, fk, a, N_push, a_push };
}

/**
 * Problem 15: Tiga balok, dua tali, satu katrol tetap
 * Balok A (mA) dan Balok B (mB) di meja kasar (muK).
 * Dihubungkan tali 1 (antara A dan B).
 * Balok B dihubungkan tali 2 ke balok gantung C (mC).
 */
export function solveProblem15(mA: number, mB: number, mC: number, muK: number) {
  const NA = mA * GRAVITY;
  const NB = mB * GRAVITY;
  const fkA = muK * NA;
  const fkB = muK * NB;
  const totalFk = fkA + fkB;

  const WC = mC * GRAVITY;
  const totalM = mA + mB + mC;
  const netForce = WC - totalFk;
  const a = netForce / totalM;

  // T1 menarik balok A: T1 - fkA = mA * a => T1 = fkA + mA * a
  const T1 = fkA + mA * a;

  // T2 menahan balok C: WC - T2 = mC * a => T2 = WC - mC * a
  const T2 = WC - mC * a;

  // Verifikasi pada Balok B: T2 - T1 - fkB = mB * a
  const verifyB = T2 - T1 - fkB;

  return { NA, NB, fkA, fkB, totalFk, WC, totalM, netForce, a, T1, T2, verifyB };
}
