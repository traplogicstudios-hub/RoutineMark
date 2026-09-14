import { db } from './db';
import { v4 as uuidv4 } from 'uuid';

let isSeeding = false;

export async function seedDatabase() {
  if (isSeeding) return;
  isSeeding = true;

  try {
    const count = await db.trainingPrograms.count();
    if (count > 0) return; // Already seeded

    // Seed Exercises
    const exercises = [
    { name: 'Spider Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Leaping Frog Exercise', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Hindu Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Helicopter Exercise', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Heart Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Wide Bodyweight Squat', category: 'Lower Body', measurementType: 'reps' },
    { name: 'Karate Squat', category: 'Lower Body', measurementType: 'reps' },
    { name: 'Hindu Squat', category: 'Lower Body', measurementType: 'reps' },
    { name: 'Bear Squat', category: 'Lower Body', measurementType: 'reps' },
    { name: 'Catcher\'s Squat', category: 'Lower Body', measurementType: 'reps' },
    { name: 'Side Plank — Left', category: 'Core', measurementType: 'time' },
    { name: 'Side Plank — Right', category: 'Core', measurementType: 'time' },
    { name: 'Flutter Kicks', category: 'Core', measurementType: 'reps' },
    { name: 'Grass Hoppers', category: 'Whole Body', measurementType: 'reps' },
    { name: 'Gracie Drill', category: 'Whole Body', measurementType: 'reps' },
    { name: 'X Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Stretch Walk Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Wide Arm Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Pistol Squat', category: 'Lower Body', measurementType: 'reps' },
    { name: 'Duck Walks — Max Time', category: 'Lower Body', measurementType: 'time' },
    { name: 'V-Up', category: 'Core', measurementType: 'reps' },
    { name: 'Lunge Sit-Up', category: 'Core', measurementType: 'reps' },
    { name: 'Jackknife Exercise — Left', category: 'Core', measurementType: 'reps' },
    { name: 'Jackknife Exercise — Right', category: 'Core', measurementType: 'reps' },
    { name: 'Spider Push-Up on Chair', category: 'Whole Body', measurementType: 'reps' },
    { name: 'Stretch Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Decline Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Diamond Kiss Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Deep Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Barbwire Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Three-Pronged Push-Up', category: 'Upper Body', measurementType: 'reps' },
    { name: 'Static V Pulses', category: 'Core', measurementType: 'reps' },
    { name: 'Side Plank with Leg Lift — Right', category: 'Core', measurementType: 'time' },
    { name: 'Side Plank with Leg Lift — Left', category: 'Core', measurementType: 'time' },
    { name: 'Wall Walks', category: 'Whole Body', measurementType: 'reps' },
    { name: 'Spider Crawl', category: 'Whole Body', measurementType: 'reps' },
    { name: 'Full Bridge', category: 'Whole Body', measurementType: 'reps' },
    { name: 'Bridge Push-Up', category: 'Whole Body', measurementType: 'reps' }
  ];

  const exMap = new Map();
  for (const ex of exercises) {
    const id = uuidv4();
    exMap.set(ex.name, id);
    await db.exercises.add({
      id,
      name: ex.name,
      category: ex.category,
      measurementType: ex.measurementType as 'reps' | 'time',
      primaryMuscles: [], secondaryMuscles: [], equipment: ['Bodyweight'], instructions: '', formCues: [], commonMistakes: [], regression: null, progression: null, demoUrl: null, sourceUrl: null
    });
  }

  const programId = uuidv4();
  await db.trainingPrograms.add({
    id: programId,
    name: '90-Day Bodyweight Training Plan',
    source: 'Breaking Muscle',
    author: 'Todd Kuslikis'
  });

  const month1Id = uuidv4();
  const month2Id = uuidv4();
  const month3Id = uuidv4();

  await db.programPhases.add({ id: month1Id, programId, name: 'Month 1', order: 1 });
  await db.programPhases.add({ id: month2Id, programId, name: 'Month 2', order: 2 });
  await db.programPhases.add({ id: month3Id, programId, name: 'Month 3', order: 3 });

  // Add workouts to phases
  const buildPhase = async (phaseId: string, name: string, exercisesList: string[]) => {
    const templateId = uuidv4();
    await db.workoutTemplates.add({ id: templateId, phaseId, name, isRecovery: false, order: 1 });
    let order = 1;
    for (const exName of exercisesList) {
      const exId = exMap.get(exName);
      if (exId) {
        await db.workoutExercises.add({
          id: uuidv4(),
          workoutTemplateId: templateId,
          exerciseId: exId,
          order: order++
        });
      }
    }
  };

  await buildPhase(month1Id, 'Full Body Circuit', [
    'Spider Push-Up', 'Leaping Frog Exercise', 'Hindu Push-Up', 'Helicopter Exercise', 'Heart Push-Up',
    'Wide Bodyweight Squat', 'Karate Squat', 'Hindu Squat', 'Bear Squat', 'Catcher\'s Squat',
    'Side Plank — Left', 'Side Plank — Right', 'Flutter Kicks',
    'Grass Hoppers', 'Gracie Drill'
  ]);

  await buildPhase(month2Id, 'Full Body Circuit', [
    'X Push-Up', 'Spider Push-Up', 'Leaping Frog Exercise', 'Stretch Walk Push-Up', 'Wide Arm Push-Up', 'Helicopter Exercise',
    'Pistol Squat', 'Duck Walks — Max Time', 'Wide Bodyweight Squat', 'Karate Squat', 'Hindu Squat', 'Catcher\'s Squat',
    'V-Up', 'Lunge Sit-Up', 'Jackknife Exercise — Left', 'Jackknife Exercise — Right',
    'Grass Hoppers', 'Gracie Drill', 'Spider Push-Up on Chair'
  ]);

  await buildPhase(month3Id, 'Full Body Circuit', [
    'Stretch Push-Up', 'Decline Push-Up', 'Diamond Kiss Push-Up', 'Deep Push-Up', 'Barbwire Push-Up', 'Three-Pronged Push-Up', 'X Push-Up',
    'Wide Bodyweight Squat', 'Karate Squat', 'Hindu Squat', 'Bear Squat', 'Catcher\'s Squat', 'Karate Squat', 'Duck Walks — Max Time',
    'Static V Pulses', 'V-Up', 'Side Plank with Leg Lift — Right', 'Side Plank with Leg Lift — Left', 'Flutter Kicks',
    'Wall Walks', 'Spider Crawl', 'Full Bridge', 'Bridge Push-Up'
  ]);

  // Seed Challenges
  const strictPresetId = uuidv4();
  await db.challengePresets.add({ id: strictPresetId, name: '75-Day Strict', mode: 'STRICT' });
  const requirements = [
    'Follow selected diet',
    'No cheat meals or alcohol',
    'Complete workout #1 for 45 continuous minutes',
    'Complete workout #2 for 45 continuous minutes',
    'At least one workout must be outdoors',
    'Drink 1 gallon of plain water',
    'Read at least 10 pages of an eligible nonfiction/self-development book',
    'Take a progress photo'
  ];
  for (const req of requirements) {
    await db.challengeRequirements.add({ id: uuidv4(), presetId: strictPresetId, name: req });
  }
  } finally {
    isSeeding = false;
  }
}
