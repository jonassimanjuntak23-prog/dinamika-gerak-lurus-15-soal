export type StimulusType = 'cerita' | 'grafik' | 'tabel' | 'diagram';

export interface ForceVector {
  id: string;
  name: string;
  symbol: string;
  magnitude: number;
  unit: string;
  angleDeg: number; // 0 = right, 90 = up, 180 = left, 270 = down (or relative to coordinate system)
  color: string;
  description: string;
  formula?: string;
  isComponent?: boolean;
}

export interface FbdBody {
  id: string;
  name: string;
  mass: number;
  forces: ForceVector[];
  notes: string;
}

export interface SolutionStep {
  stepNumber: number;
  title: string;
  explanation: string;
  mathFormula?: string;
  substitution?: string;
  result?: string;
  consistencyCheck?: string;
}

export interface SimulationParams {
  type: 
    | 'equilibrium_flat'
    | 'single_horizontal'
    | 'two_blocks_flat'
    | 'friction_threshold'
    | 'table_pulley_equil'
    | 'table_pulley_motion'
    | 'incline_equil'
    | 'incline_pulley_equil'
    | 'incline_pulley_up'
    | 'incline_pulley_down'
    | 'double_incline'
    | 'movable_pulley'
    | 'angle_force_flat'
    | 'three_bodies_pulley';
  state: 'SETIMBANG' | 'BERGERAK';
  acceleration: number; // m/s^2
  initialVelocity: number; // m/s
  duration: number; // simulation max time in seconds
  displacement: number; // total displacement in meters
  directionDescription: string;
  tension?: number | number[];
  extraValues?: Record<string, number | string>;
  misterJoComment: string;
}

export interface ProblemData {
  id: number;
  title: string;
  subtitle: string;
  topic: string;
  difficulty: 'Dasar-Menengah' | 'Menengah-Tinggi' | 'Tinggi' | 'Kompleks';
  stimulusType: StimulusType;
  stimulusTitle: string;
  stimulusText: string;
  stimulusTableData?: {
    headers: string[];
    rows: (string | number)[][];
    caption?: string;
  };
  stimulusGraphData?: {
    xLabel: string;
    yLabel: string;
    points: { x: number; y: number; label?: string }[];
  };
  problemStatement: string;
  questionText: string;
  ttsQuestion: string;
  physicsAnalysis: {
    guidingQuestions: { question: string; answer: string }[];
    summary: string;
  };
  ttsAnalysis: string;
  fbdBodies: FbdBody[];
  ttsFbd: string;
  normalSolution: {
    steps: SolutionStep[];
    finalAnswer: string;
    consistencyCheck: string;
  };
  ttsNormalSolution: string;
  fastSolution: {
    concept: string;
    reasoning: string;
    mathFormula: string;
    steps: string[];
    finalAnswer: string;
  };
  ttsFastSolution: string;
  simulation: SimulationParams;
  misterJoTakeaway: string;
}
