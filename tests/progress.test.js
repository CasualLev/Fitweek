import { describe, it, expect } from 'vitest';
import { toggle, dayProgress } from '../src/progress.js';

const exercises = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];

describe('toggle', () => {
  it('ticks and unticks an exercise without changing the original', () => {
    const start = new Set();
    const ticked = toggle(start, 'a');
    expect(ticked.has('a')).toBe(true);
    expect(start.has('a')).toBe(false);
    expect(toggle(ticked, 'a').has('a')).toBe(false);
  });
});

describe('dayProgress', () => {
  it('starts at 0 of 4', () => {
    expect(dayProgress(exercises, new Set())).toEqual({ completed: 0, total: 4, percent: 0, isComplete: false });
  });

  it('counts partial progress', () => {
    const p = dayProgress(exercises, new Set(['a', 'b']));
    expect(p.completed).toBe(2);
    expect(p.percent).toBe(50);
    expect(p.isComplete).toBe(false);
  });

  it('marks the day complete when all 4 are done', () => {
    expect(dayProgress(exercises, new Set(['a', 'b', 'c', 'd'])).isComplete).toBe(true);
  });

  it('never marks a rest day complete', () => {
    expect(dayProgress([], new Set()).isComplete).toBe(false);
  });
});