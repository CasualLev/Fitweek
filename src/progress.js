export function toggle(done, id) {
  const next = new Set(done);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  return next;
}

export function dayProgress(exercises, done) {
  const total = exercises.length;
  const completed = exercises.filter((ex) => done.has(ex.id)).length;
  return {
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0,
    isComplete: total > 0 && completed === total,
  };
}