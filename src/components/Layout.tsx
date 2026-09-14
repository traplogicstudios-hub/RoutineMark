import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Dumbbell, CalendarCheck, TrendingUp, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { seedDatabase } from '../db/seed';

export default function Layout() {
  useEffect(() => {
    seedDatabase().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-zinc-900 overflow-hidden relative">
      <main className="flex-1 overflow-y-auto pb-24 max-w-md mx-auto w-full">
        <Outlet />
      </main>
      
      <div className="fixed bottom-0 w-full flex justify-center pointer-events-none">
        <nav className="w-full max-w-md bg-white dark:bg-zinc-800 border-t border-gray-200 dark:border-zinc-700 flex justify-around pb-4 pt-1 pointer-events-auto">
          <NavItem to="/" icon={<Home className="w-6 h-6" />} label="Today" />
          <NavItem to="/workout" icon={<Dumbbell className="w-6 h-6" />} label="Workout" />
          <NavItem to="/habits" icon={<CalendarCheck className="w-6 h-6" />} label="Habits" />
          <NavItem to="/progress" icon={<TrendingUp className="w-6 h-6" />} label="Progress" />
          <NavItem to="/coach" icon={<MessageCircle className="w-6 h-6" />} label="Coach" />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex flex-col items-center justify-center w-full py-2 text-xs font-medium transition-colors",
          isActive 
            ? "text-blue-600 dark:text-blue-400" 
            : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        )
      }
    >
      {icon}
      <span className="mt-1">{label}</span>
    </NavLink>
  );
}
