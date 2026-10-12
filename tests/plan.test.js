import { describe, it, expect } from 'vitest';
import { getWeek, getTodayName, formatVolume, formatRest } from '../src/plan.js';

describe('getWeek', () => {
  const week = getWeek();

  it('returns all 7 days starting on Monday', () => {
    expect(week).toHaveLength(7);
    expect(week[0].day).toBe('Monday');
    expect(week[6].day).toBe('Sunday');
  });

  it('has workouts on Monday, Tuesday, Thursday and Friday only', () => {
    const workoutDays = week.filter((d) => !d.isRest).map((d) => d.day);
    expect(workoutDays).toEqual(['Monday', 'Tuesday', 'Thursday', 'Friday']);
  });

  it('gives every workout day a focus and 4 exercises', () => {
    for (const d of week.filter((d) => !d.isRest)) {
      expect(d.focus).toBeTruthy();
      expect(d.exercises).toHaveLength(4);
    }
  });

  it('gives rest days no exercises', () => {
    for (const d of week.filter((d) => d.isRest)) {
      expect(d.exercises).toEqual([]);
      expect(d.focus).toBe('Rest day');
    }
  });
});

describe('getTodayName', () => {
  it('maps dates to the right weekday', () => {
    expect(getTodayName(new Date(2026, 9, 12))).toBe('Monday');
    expect(getTodayName(new Date(2026, 9, 11))).toBe('Sunday');
  });

  describe('exercise details', () => {
  it('formats reps-based exercises', () => {
    expect(formatVolume({ sets: 3, reps: 10 })).toBe('3 × 10 reps');
  });

  it('formats timed exercises in seconds', () => {
    expect(formatVolume({ sets: 3, seconds: 30 })).toBe('3 × 30s');
  });

  it('formats rest time', () => {
    expect(formatRest(60)).toBe('Rest 60s');
    expect(formatRest(0)).toBe('No rest');
  });

  it('gives every exercise sets, rest and a tip', () => {
    for (const d of getWeek()) {
      for (const ex of d.exercises) {
        expect(ex.sets).toBeGreaterThan(0);
        expect(ex.rest).toBeGreaterThanOrEqual(0);
        expect(ex.tip.length).toBeGreaterThan(0);
      }
    }
  });
});
});