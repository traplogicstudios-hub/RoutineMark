export default function Progress() {
  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Progress</h1>
      </header>

      <div className="space-y-6">
        <div className="bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Workout History</h2>
          <div className="text-center py-8 text-gray-400 text-sm">
            Complete workouts to see your history.
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Measurements</h2>
          <div className="text-center py-8 text-gray-400 text-sm">
            Log measurements to track progress over time.
          </div>
          <button className="w-full py-3 mt-2 rounded-xl border border-gray-200 dark:border-zinc-700 font-medium text-gray-700 dark:text-gray-300">
            Add Entry
          </button>
        </div>
      </div>
    </div>
  );
}
