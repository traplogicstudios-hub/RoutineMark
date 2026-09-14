import { seedDatabase } from './src/db/seed.ts';
seedDatabase().then(() => console.log('success')).catch(e => console.error('error', e));
