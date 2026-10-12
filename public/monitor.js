console.info('[FitWeek] App loaded', new Date().toISOString());

window.addEventListener('error', (e) => {
  console.error('[FitWeek] Unhandled error:', e.message, `at ${e.filename}:${e.lineno}`);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('[FitWeek] Unhandled promise rejection:', e.reason);
});