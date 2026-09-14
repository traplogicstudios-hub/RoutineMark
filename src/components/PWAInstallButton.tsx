import React, { useState } from 'react';
import { usePWAInstall } from './usePWAInstall';
import { Download } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
      >
        <Download className="w-3 h-3" />
        Install App
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
        >
          <Download className="w-3 h-3" />
          Install App
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-sm rounded-xl bg-white dark:bg-zinc-900 p-6 shadow-xl border border-gray-100 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Install RoutineMark</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                1. Tap the <strong>Share</strong> button in Safari toolbar.<br />
                2. Scroll down and tap <strong>Add to Home Screen</strong>.
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-6 w-full rounded-xl bg-gray-100 dark:bg-zinc-800 py-3 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
