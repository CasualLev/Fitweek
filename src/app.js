import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createApp({ log = console } = {}) {
  const app = express();

  // Log every request: method, path, status code, duration
  app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
      log.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - start}ms`);
    });
    next();
  });

  // Health endpoint for uptime checks
  app.get('/health', (req, res) => {
    res.json({
      status: 'ok',
      uptime: Math.round(process.uptime()),
      timestamp: new Date().toISOString(),
    });
  });

  // Demo route to show error tracking working
  app.get('/debug/error', () => {
    throw new Error('Test error for monitoring demo');
  });

  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use('/src', express.static(__dirname));

  // Error handler: must stay last
  app.use((err, req, res, next) => {
    log.error(`Error on ${req.method} ${req.originalUrl}: ${err.message}`);
    res.status(500).json({ status: 'error', message: 'Something went wrong' });
  });

  return app;
}