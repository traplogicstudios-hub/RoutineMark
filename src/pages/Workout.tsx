import { useState, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/db';
import { useNavigate } from 'react-router-dom';

export default function Workout() {
  const navigate = useNavigate();
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reps, setReps] = useState('');
  const [effort, setEffort] = useState('Moderate');
  
  const phase = useLiveQuery(() => db.programPhases.orderBy('order').first());
  const template = useLiveQuery(() => 
    phase ? db.workoutTemplates.where('phaseId').equals(phase.id).first() : undefined
  , [phase]);
  
  const exercises = useLiveQuery(async () => {
    if (!template) return [];
    const workoutExercises = await db.workoutExercises.where('workoutTemplateId').equals(template.id).sortBy('order');
    const enriched = await Promise.all(workoutExercises.map(async (we) => {
      const ex = await db.exercises.get(we.exerciseId);
      return { ...we, exercise: ex };
    }));
    return enriched;
  }, [template]);

  const currentExercise = exercises?.[currentIndex];

  const handleSaveAndNext = async () => {
    if (!currentExercise || !template) return;
    
    // In a real app we'd create a Session and link Performances to it.
    // For MVP, just move to next exercise.
    
    setReps('');
    setEffort('Moderate');
    
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finished
      navigate('/progress');
    }
  };

  if (!activeWorkout) {
    return (
      <div className="p-6 flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-2xl font-bold mb-2 dark:text-white">Ready to Train?</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Start today's session from {template?.name || 'the program'}.</p>
        <button 
          onClick={() => setActiveWorkout(true)}
          className="w-full max-w-xs py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-colors"
        >
          Begin Session
        </button>
      </div>
    );
  }

  if (!currentExercise?.exercise) return <div className="p-6">Loading...</div>;

  const ex = currentExercise.exercise;
  const isLast = currentIndex === exercises!.length - 1;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Movement {currentIndex + 1} of {exercises!.length}
        </h2>
        <button onClick={() => setActiveWorkout(false)} className="text-sm text-red-500">Cancel</button>
      </div>
      
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{ex.name}</h3>
        </div>
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-6">{ex.category}</p>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl">
            <span className="text-gray-500 text-sm font-medium">Previous Result</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300">--</span>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Today's {ex.measurementType === 'time' ? 'Seconds' : 'Reps'}
            </label>
            <div className="flex items-center">
              <button onClick={() => setReps(String(Math.max(0, Number(reps) - 1)))} className="px-4 py-3 bg-gray-100 dark:bg-zinc-700 rounded-l-xl text-lg">-</button>
              <input 
                type="number" 
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="w-full text-center text-2xl py-3 border-y border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-800 dark:text-white focus:outline-none"
                placeholder="0"
              />
              <button onClick={() => setReps(String(Number(reps) + 1))} className="px-4 py-3 bg-gray-100 dark:bg-zinc-700 rounded-r-xl text-lg">+</button>
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Effort (RPE)</label>
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
               {['Easy', 'Moderate', 'Hard', 'Max'].map(level => (
                 <button 
                   key={level} 
                   onClick={() => setEffort(level)}
                   className={`py-3 text-sm rounded-xl border font-medium transition-colors ${
                     effort === level 
                       ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300' 
                       : 'border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-700'
                   }`}
                 >
                   {level}
                 </button>
               ))}
             </div>
          </div>
        </div>
        
        <button 
          onClick={handleSaveAndNext}
          className={`w-full mt-8 py-4 rounded-xl text-white font-semibold transition-colors ${
            isLast ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
          }`}
        >
          {isLast ? 'FINISH WORKOUT' : 'SAVE & NEXT'}
        </button>
      </div>
    </div>
  );
}
