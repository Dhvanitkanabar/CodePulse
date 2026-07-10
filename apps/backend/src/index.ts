import app from './app';
import { env } from './config/env';
import { connectDB } from './config/db';

const start = async () => {
  // Connect to MongoDB
  await connectDB();

  // Start server
  app.listen(env.port, () => {
    console.warn(`🧠 NeuroLens AI Backend running on port ${env.port}`);
    console.warn(`   Environment: ${env.nodeEnv}`);
    console.warn(`   Health: http://localhost:${env.port}/api/health`);
  });
};

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
