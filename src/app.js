import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createApp() {
  const app = express();
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use('/src', express.static(__dirname)); // lets the browser load shared logic files
  return app;
}