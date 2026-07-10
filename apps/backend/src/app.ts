import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { corsOptions } from './config/cors';
import { errorHandler } from './middlewares/error.middleware';

// Route imports
import authRoutes from './routes/auth.routes';
import chatRoutes from './routes/chat.routes';
import voiceRoutes from './routes/voice.routes';
import contentRoutes from './routes/content.routes';
import bookmarkRoutes from './routes/bookmarks.routes';
import memoryRoutes from './routes/memory.routes';
import knowledgeRoutes from './routes/knowledge.routes';
import historyRoutes from './routes/history.routes';
import analyticsRoutes from './routes/analytics.routes';
import settingsRoutes from './routes/settings.routes';

const app = express();

// ========================
// Global Middleware
// ========================
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ========================
// Health Check
// ========================
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ========================
// API Routes
// ========================
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/voice', voiceRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/bookmarks', bookmarkRoutes);
app.use('/api/memory', memoryRoutes);
app.use('/api/knowledge', knowledgeRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/settings', settingsRoutes);

// ========================
// Error Handler (must be last)
// ========================
app.use(errorHandler);

export default app;
