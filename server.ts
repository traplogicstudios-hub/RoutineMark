import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoints
  app.post('/api/coach', async (req, res) => {
    try {
      const { prompt, context } = req.body;
      
      const systemInstruction = `You are an AI fitness coach for the application RoutineMark.
RoutineMark is a mobile-first app that tracks workouts, habits, and progress.
The primary philosophy is: "Track the work. Build the routine. See your progress."
Rules for you:
1. DO NOT diagnose injuries or make medical claims. Tell users to seek professional advice if in pain.
2. DO NOT silently rewrite the user's active base program. 
3. If recommending exercises (accessory, mobility, warmups), clearly label them as a "Coach Suggestion" and ask if they want to add it.
4. Provide concise, clear insights based on the provided context.
5. Context includes: ${JSON.stringify(context)}

Analyze, Answer, and Recommend based on the prompt. Keep responses brief and formatting clean.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
        }
      });
      
      res.json({ text: response.text });
    } catch (error) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ error: 'Failed to generate coaching response.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
