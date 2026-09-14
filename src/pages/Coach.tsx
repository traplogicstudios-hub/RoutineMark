import React, { useState } from 'react';

export default function Coach() {
  const [messages, setMessages] = useState<{role: 'user'|'coach', text: string}[]>([
    { role: 'coach', text: 'Hello! I am your AI Coach. I can analyze your progress, answer questions about exercises, or recommend adjustments to your routine.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userMsg,
          context: {
            program: '90-Day Bodyweight Training Plan',
            recentPerformance: 'No workouts completed yet.'
          }
        })
      });
      
      const data = await res.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: 'coach', text: data.text }]);
      } else {
        throw new Error('No text in response');
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'coach', text: 'Sorry, I am having trouble connecting right now.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-zinc-900">
      <header className="px-6 pt-6 pb-4 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Coach</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 pb-32">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-sm' 
                : 'bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 text-gray-800 dark:text-gray-200 rounded-bl-sm'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-gray-500">
              Thinking...
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-16 left-0 right-0 w-full max-w-md mx-auto bg-white dark:bg-zinc-800 border-t border-gray-200 dark:border-zinc-700 p-4">
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your coach..."
            className="flex-1 bg-gray-100 dark:bg-zinc-900 border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 dark:text-white outline-none"
          />
          <button 
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-blue-600 text-white rounded-xl px-4 font-medium disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
