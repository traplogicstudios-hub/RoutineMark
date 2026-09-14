import Dexie, { type EntityTable } from 'dexie';

if (typeof window !== 'undefined' && !window.indexedDB) {
  try {
    const fakeIndexedDB = await import('fake-indexeddb');
    const fakeIDBKeyRange = await import('fake-indexeddb/lib/FDBKeyRange');
    (window as any).indexedDB = fakeIndexedDB.default || fakeIndexedDB;
    (window as any).IDBKeyRange = fakeIDBKeyRange.default || fakeIDBKeyRange;
  } catch (e) {
    console.error('Failed to load fake-indexeddb fallback', e);
  }
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  equipment: string[];
  instructions: string;
  formCues: string[];
  commonMistakes: string[];
  regression: string | null;
  progression: string | null;
  demoUrl: string | null;
  sourceUrl: string | null;
  measurementType: 'reps' | 'time' | 'distance';
}

export interface TrainingProgram {
  id: string;
  name: string;
  source: string;
  author: string;
}

export interface ProgramPhase {
  id: string;
  programId: string;
  name: string;
  order: number;
}

export interface WorkoutTemplate {
  id: string;
  phaseId: string;
  name: string; // e.g. "Full Body 1", "Active Recovery"
  isRecovery: boolean;
  order: number;
}

export interface WorkoutExercise {
  id: string;
  workoutTemplateId: string;
  exerciseId: string;
  order: number;
}

export interface WorkoutSession {
  id: string;
  workoutTemplateId: string;
  date: string; // YYYY-MM-DD
  durationMs: number;
  notes: string;
  completed: boolean;
}

export interface ExercisePerformance {
  id: string;
  sessionId: string;
  exerciseId: string;
  reps: number | null;
  timeMs: number | null;
  rpe: string | null; // Easy / Moderate / Hard / Max
  order: number;
}

export interface ChallengePreset {
  id: string;
  name: string;
  mode: 'EASY' | 'STANDARD' | 'STRICT';
}

export interface ChallengeRequirement {
  id: string;
  presetId: string;
  name: string;
}

export interface ChallengeAttempt {
  id: string;
  presetId: string;
  startDate: string; // YYYY-MM-DD
  status: 'ACTIVE' | 'COMPLETED' | 'FAILED_PENDING_CONFIRMATION' | 'ARCHIVED';
  currentDay: number;
}

export interface DailyChallengeLog {
  id: string;
  attemptId: string;
  date: string; // YYYY-MM-DD
  requirementId: string;
  completed: boolean;
}

export interface Habit {
  id: string;
  name: string;
  frequency: string;
  type: string;
  target: number;
  unit: string;
  requiredForChallenge: boolean;
}

export interface ProgressMeasurement {
  id: string;
  date: string;
  type: string; // weight, push-ups, mile time, etc.
  value: number;
}

export interface ProgressPhoto {
  id: string;
  date: string;
  imageBlob: Blob;
}

const db = new Dexie('RoutineMarkDB') as Dexie & {
  exercises: EntityTable<Exercise, 'id'>;
  trainingPrograms: EntityTable<TrainingProgram, 'id'>;
  programPhases: EntityTable<ProgramPhase, 'id'>;
  workoutTemplates: EntityTable<WorkoutTemplate, 'id'>;
  workoutExercises: EntityTable<WorkoutExercise, 'id'>;
  workoutSessions: EntityTable<WorkoutSession, 'id'>;
  exercisePerformances: EntityTable<ExercisePerformance, 'id'>;
  challengePresets: EntityTable<ChallengePreset, 'id'>;
  challengeRequirements: EntityTable<ChallengeRequirement, 'id'>;
  challengeAttempts: EntityTable<ChallengeAttempt, 'id'>;
  dailyChallengeLogs: EntityTable<DailyChallengeLog, 'id'>;
  habits: EntityTable<Habit, 'id'>;
  progressMeasurements: EntityTable<ProgressMeasurement, 'id'>;
  progressPhotos: EntityTable<ProgressPhoto, 'id'>;
};

db.version(1).stores({
  exercises: 'id, name, category',
  trainingPrograms: 'id',
  programPhases: 'id, programId',
  workoutTemplates: 'id, phaseId',
  workoutExercises: 'id, workoutTemplateId, exerciseId',
  workoutSessions: 'id, workoutTemplateId, date',
  exercisePerformances: 'id, sessionId, exerciseId',
  challengePresets: 'id, mode',
  challengeRequirements: 'id, presetId',
  challengeAttempts: 'id, presetId, status',
  dailyChallengeLogs: 'id, attemptId, date, requirementId',
  habits: 'id',
  progressMeasurements: 'id, date, type',
  progressPhotos: 'id, date'
});

export { db };
