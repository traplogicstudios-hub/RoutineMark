import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/db';
import { useState } from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

export default function Habits() {
  const activeAttempt = useLiveQuery(() => db.challengeAttempts.where('status').equals('ACTIVE').first());
  const failedAttempt = useLiveQuery(() => db.challengeAttempts.where('status').equals('FAILED_PENDING_CONFIRMATION').first());
  
  const [showStrictModal, setShowStrictModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const startStrictChallenge = async () => {
    const preset = await db.challengePresets.where('mode').equals('STRICT').first();
    if (preset) {
      await db.challengeAttempts.add({
        id: crypto.randomUUID(),
        presetId: preset.id,
        startDate: new Date().toISOString().split('T')[0],
        status: 'ACTIVE',
        currentDay: 1
      });
      setShowStrictModal(false);
    }
  };

  const simulateFailure = async () => {
    if (activeAttempt) {
      await db.challengeAttempts.update(activeAttempt.id, {
        status: 'FAILED_PENDING_CONFIRMATION'
      });
    }
  };

  const confirmReset = async () => {
    if (failedAttempt) {
      // Archive old attempt
      await db.challengeAttempts.update(failedAttempt.id, {
        status: 'ARCHIVED'
      });
      
      // Start new one
      const preset = await db.challengePresets.where('mode').equals('STRICT').first();
      if (preset) {
        await db.challengeAttempts.add({
          id: crypto.randomUUID(),
          presetId: preset.id,
          startDate: new Date().toISOString().split('T')[0],
          status: 'ACTIVE',
          currentDay: 1
        });
      }
      setShowResetModal(false);
    }
  };

  if (failedAttempt) {
    return (
      <div className="p-6 h-full flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Strict Day Failed</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
          You missed a requirement on Day {failedAttempt.currentDay}. In Strict Mode, this ends your current attempt.
        </p>
        
        <button 
          onClick={() => setShowResetModal(true)}
          className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
        >
          Restart Challenge
        </button>

        {showResetModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-sm bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Confirm Restart</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                You are about to begin a new Strict challenge at Day 1.
                <br/><br/>
                Your previous attempt will remain in your history.
              </p>
              <div className="flex gap-3">
                <button onClick={() => setShowResetModal(false)} className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 font-medium">Cancel</button>
                <button onClick={confirmReset} className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium">Restart at Day 1</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (!activeAttempt) {
    return (
      <div className="p-6 h-full flex flex-col">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Habits</h1>
          <p className="text-gray-500 mt-1">Start a challenge to build discipline.</p>
        </header>
        
        <div className="space-y-4">
          <button onClick={() => setShowStrictModal(true)} className="w-full text-left p-5 rounded-2xl border-2 border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 transition">
            <h3 className="text-lg font-bold text-red-900 dark:text-red-300">75-Day Strict</h3>
            <p className="text-sm text-red-700 dark:text-red-400 mt-1">Missing any task requires restarting at Day 1.</p>
          </button>
        </div>

        {showStrictModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-sm bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enable Strict Mode?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                In Strict Mode, missing any required daily task ends the current challenge attempt and requires you to begin again at Day 1.
                <br/><br/>
                Your workout history, photos, measurements and previous challenge attempts will NOT be deleted.
              </p>
              <div className="flex gap-3">
                <button onClick={() => setShowStrictModal(false)} className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 font-medium">Cancel</button>
                <button onClick={startStrictChallenge} className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium">Enable Strict Mode</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-6">
      <header className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Day {activeAttempt.currentDay}</h1>
          <p className="text-gray-500 mt-1">75-Day Strict Mode</p>
        </div>
        <button onClick={simulateFailure} className="px-3 py-1.5 rounded-lg bg-red-100 text-red-600 text-xs font-semibold">Test Fail Day</button>
      </header>

      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-zinc-700 mb-6">
        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 75 }).map((_, i) => (
            <div 
              key={i} 
              className={`aspect-square rounded-sm ${i < activeAttempt.currentDay - 1 ? 'bg-green-500' : i === activeAttempt.currentDay - 1 ? 'bg-blue-500 ring-2 ring-blue-200 dark:ring-blue-900' : 'bg-gray-100 dark:bg-zinc-700'}`} 
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">Daily Tasks</h3>
        {/* Placeholder for requirements */}
        {[
          'Follow selected diet',
          'No cheat meals or alcohol',
          'Workout #1 (45 min)',
          'Workout #2 (45 min, outdoors)',
          'Drink 1 gallon of water',
          'Read 10 pages',
          'Take a progress photo'
        ].map((req, i) => (
          <div key={req} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700">
            <input type="checkbox" id={`req-${i}`} className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
            <label htmlFor={`req-${i}`} className="text-sm font-medium text-gray-800 dark:text-gray-200 select-none flex-1">{req}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
