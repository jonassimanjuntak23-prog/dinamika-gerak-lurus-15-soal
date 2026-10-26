import test from 'node:test';
import assert from 'node:assert/strict';
import {
  solveProblem1,
  solveProblem2,
  solveProblem3,
  solveProblem4,
  solveProblem5,
  solveProblem6,
  solveProblem7,
  solveProblem8,
  solveProblem9,
  solveProblem10,
  solveProblem11,
  solveProblem12,
  solveProblem13,
  solveProblem14,
  solveProblem15,
} from './engine';

test('Problem 1: Hukum I Newton translational equilibrium', () => {
  const res = solveProblem1(45, 30);
  assert.equal(res.F3, -15);
  assert.equal(res.magnitudeF3, 15);
  assert.equal(res.a, 0);
  assert.equal(res.state, 'SETIMBANG');
});

test('Problem 2: Hukum II Newton F vs a slope and new acceleration', () => {
  const points = [
    { F: 6, a: 1.5 },
    { F: 10, a: 2.5 },
    { F: 14, a: 3.5 },
    { F: 18, a: 4.5 },
  ];
  const res = solveProblem2(points, 2, 24);
  assert.equal(res.m0, 4);
  assert.equal(res.mTotal, 6);
  assert.equal(res.newAcc, 4.0);
});

test('Problem 3: Hukum III Newton contact forces action-reaction', () => {
  const res = solveProblem3(4, 6, 50);
  assert.equal(res.a, 5);
  assert.equal(res.FAB, 30);
  assert.equal(res.FBA, 30);
});

test('Problem 4: Dua balok dihubungkan tali licin', () => {
  const res = solveProblem4(3, 7, 40);
  assert.equal(res.a, 4);
  assert.equal(res.T1, 12);
  assert.equal(res.T2, 28);
});

test('Problem 5: Static vs kinetic friction threshold', () => {
  const stage1 = solveProblem5(10, 0.40, 0.25, 25);
  assert.equal(stage1.state, 'SETIMBANG');
  assert.equal(stage1.friction, 25);
  assert.equal(stage1.a, 0);

  const stage2 = solveProblem5(10, 0.40, 0.25, 40);
  assert.equal(stage2.state, 'SETIMBANG');
  assert.equal(stage2.friction, 40);
  assert.equal(stage2.a, 0);

  const stage3 = solveProblem5(10, 0.40, 0.25, 55);
  assert.equal(stage3.state, 'BERGERAK');
  assert.equal(stage3.friction, 25);
  assert.equal(stage3.a, 3.0);
});

test('Problem 6: Table pulley system in static equilibrium', () => {
  const res = solveProblem6(8, 3, 0.50);
  assert.equal(res.isEquilibrium, true);
  assert.equal(res.tension, 30);
  assert.equal(res.fs, 30);
  assert.equal(res.maxTotalMB, 4.0);
  assert.equal(res.maxExtraMass, 1.0);
});

test('Problem 7: Table pulley system accelerating', () => {
  const res = solveProblem7(6, 4, 0.20, 1.6);
  assert.equal(res.a, 2.8);
  assert.equal(res.tension, 28.8);
  assert.ok(Math.abs(res.vFinal - Math.sqrt(8.96)) < 1e-4);
});

test('Problem 8: Inclined plane equilibrium & min static friction', () => {
  const res = solveProblem8(12, 0.6, 0.8);
  assert.equal(res.Wx, 72);
  assert.equal(res.Wy, 96);
  assert.equal(res.N, 96);
  assert.equal(res.fs, 72);
  assert.equal(res.minMuS, 0.75);
});

test('Problem 9: Inclined plane with pulley equilibrium ranges', () => {
  const res = solveProblem9(10, 0.5, 0.866, 0.20);
  assert.equal(res.mBSmooth, 5.0);
  assert.ok(Math.abs(res.mBMin - 3.268) < 0.01);
  assert.ok(Math.abs(res.mBMax - 6.732) < 0.01);
});

test('Problem 10: Inclined plane moving UP', () => {
  const res = solveProblem10(4, 6, 0.6, 0.8, 0.25);
  assert.equal(res.WAx, 24);
  assert.equal(res.NA, 32);
  assert.equal(res.fk, 8);
  assert.equal(res.netForce, 28);
  assert.equal(res.a, 2.8);
  assert.equal(res.tension, 43.2);
});

test('Problem 11: Inclined plane moving DOWN', () => {
  const res = solveProblem11(8, 2, 0.8, 0.6, 0.20);
  assert.equal(res.WAx, 64);
  assert.equal(res.NA, 48);
  assert.equal(res.fk, 9.6);
  assert.equal(res.netForce, 34.4);
  assert.equal(res.a, 3.44);
  assert.equal(res.tension, 26.88);
});

test('Problem 12: Double inclined plane with pulley', () => {
  const res = solveProblem12(5, 5, 0.8, 0.6, 0.5, 0.866);
  assert.equal(res.F1, 40);
  assert.equal(res.F2, 25);
  assert.equal(res.netForce, 15);
  assert.equal(res.a, 1.5);
  assert.equal(res.tension, 32.5);
});

test('Problem 13: KATROL BEBAS / BERGERAK mandatory special with a1 = 2*a2 and 2T', () => {
  const res = solveProblem13(1, 6);
  assert.equal(res.a2, 6.0);
  assert.equal(res.a1, 12.0);
  assert.equal(res.tension, 12.0);
  // Katrol bergerak ideal 2T menopang beban m2
  // m2*g - 2T = 60 - 24 = 36 = m2 * a2 (6 * 6 = 36)
  assert.equal(res.check, 36);
  assert.equal(res.check, 6 * res.a2);
});

test('Problem 14: Angle pulling force altering normal force', () => {
  const res = solveProblem14(20, 100, 0.6, 0.8, 0.35, 0.20);
  assert.equal(res.N, 140);
  assert.equal(res.fsMax, 49);
  assert.equal(res.isMoving, true);
  assert.equal(res.fk, 28);
  assert.equal(res.a, 2.6);
  assert.equal(res.N_push, 260);
  assert.equal(res.a_push, 1.4);
});

test('Problem 15: Sintesis 3 benda 2 tali 1 katrol tetap', () => {
  const res = solveProblem15(3, 5, 8, 0.15);
  assert.equal(res.totalFk, 12.0);
  assert.equal(res.netForce, 68.0);
  assert.equal(res.a, 4.25);
  assert.equal(res.T1, 17.25);
  assert.equal(res.T2, 46.0);
  assert.equal(res.verifyB, 5 * 4.25);
});
