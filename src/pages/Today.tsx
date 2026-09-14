import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/db';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle } from 'lucide-react';
import { PWAInstallButton } from '../components/PWAInstallButton';

export default function Today() {
  const today = new Date();
  const dateString = format(today, 'yyyy-MM-dd');
  
  const program = useLiveQuery(() => db.trainingPrograms.toCollection().first());
  const activeAttempt = useLiveQuery(() => db.challengeAttempts.where('status').equals('ACTIVE').first());
  
  return (
    <div className="p-6 space-y-6">
      <header className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{format(today, 'EEEE, MMMM do')}</p>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">Today</h1>
        </div>
        <PWAInstallButton />
      </header>
      
      <section className="bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Active Program</h2>
        <p className="font-medium text-lg text-gray-900 dark:text-gray-100">{program?.name || 'Loading...'}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Phase: Month 1</p>
        
        <Link 
          to="/workout" 
          className="mt-4 flex w-full justify-center items-center py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
        >
          Start Workout
        </Link>
      </section>

      <section className="bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Challenge</h2>
        {activeAttempt ? (
          <div>
            <p className="font-medium text-lg text-gray-900 dark:text-gray-100">Day {activeAttempt.currentDay} of 75</p>
            <Link to="/habits" className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400 font-medium">View remaining tasks &rarr;</Link>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 dark:text-gray-300">No active challenge.</p>
            <Link to="/habits" className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400 font-medium">Start a Challenge &rarr;</Link>
          </div>
        )}
      </section>

      <section className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-100 dark:border-blue-800/50">
        <h2 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">Coach Insight</h2>
        <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
          Welcome to RoutineMark. Your consistency is key. Complete your first workout to establish a baseline for AI coaching recommendations.
        </p>
      </section>
    </div>
  );
}
