import { createApp } from './src/app.js';

const PORT = process.env.PORT || 3000;
createApp().listen(PORT, () => {
  console.log(`FitWeek running on http://localhost:${PORT}`);
});