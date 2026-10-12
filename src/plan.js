export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const PLAN = {
  Monday: {
    focus: 'Upper body',
    exercises: [
      { id: 'mon-1', name: 'Push-ups', sets: 3, reps: 10, rest: 60, tip: 'Keep your body in a straight line from head to heels.' },
      { id: 'mon-2', name: 'Dumbbell rows', sets: 3, reps: 12, rest: 60, tip: 'Pull your elbow back and squeeze your shoulder blade.' },
      { id: 'mon-3', name: 'Shoulder press', sets: 3, reps: 10, rest: 60, tip: 'Press straight up without arching your lower back.' },
      { id: 'mon-4', name: 'Plank', sets: 3, seconds: 30, rest: 45, tip: 'Brace your core and keep your hips level.' },
    ],
  },
  Tuesday: {
    focus: 'Lower body',
    exercises: [
      { id: 'tue-1', name: 'Squats', sets: 3, reps: 12, rest: 60, tip: 'Sit back as if into a chair, knees over toes.' },
      { id: 'tue-2', name: 'Lunges', sets: 3, reps: 10, rest: 60, tip: 'Step long and lower your back knee towards the floor.' },
      { id: 'tue-3', name: 'Glute bridges', sets: 3, reps: 15, rest: 45, tip: 'Drive through your heels and squeeze at the top.' },
      { id: 'tue-4', name: 'Calf raises', sets: 3, reps: 15, rest: 45, tip: 'Rise slowly onto your toes and lower with control.' },
    ],
  },
  Thursday: {
    focus: 'Full body',
    exercises: [
      { id: 'thu-1', name: 'Burpees', sets: 3, reps: 8, rest: 90, tip: 'Move steadily; land softly from the jump.' },
      { id: 'thu-2', name: 'Mountain climbers', sets: 3, seconds: 30, rest: 45, tip: 'Keep your hips low and drive your knees in fast.' },
      { id: 'thu-3', name: 'Jumping jacks', sets: 3, seconds: 30, rest: 30, tip: 'Stay light on the balls of your feet.' },
      { id: 'thu-4', name: 'Sit-ups', sets: 3, reps: 12, rest: 45, tip: 'Curl up slowly without pulling on your neck.' },
    ],
  },
  Friday: {
    focus: 'Core & mobility',
    exercises: [
      { id: 'fri-1', name: 'Russian twists', sets: 3, reps: 16, rest: 45, tip: 'Rotate from your ribs, not just your arms.' },
      { id: 'fri-2', name: 'Leg raises', sets: 3, reps: 10, rest: 45, tip: 'Press your lower back into the floor as you lift.' },
      { id: 'fri-3', name: 'Bird-dogs', sets: 3, reps: 10, rest: 30, tip: 'Reach long with opposite arm and leg, keep hips still.' },
      { id: 'fri-4', name: 'Full-body stretch', sets: 1, seconds: 300, rest: 0, tip: 'Breathe slowly and hold each stretch without bouncing.' },
    ],
  },
};

export function getWeek() {
  return DAYS.map((day) => ({
    day,
    isRest: !PLAN[day],
    focus: PLAN[day] ? PLAN[day].focus : 'Rest day',
    exercises: PLAN[day] ? PLAN[day].exercises : [],
  }));
}

export function getTodayName(date = new Date()) {
  // getDay() returns 0 for Sunday, so shift to make Monday index 0
  return DAYS[(date.getDay() + 6) % 7];
}

export function formatVolume(ex) {
  return ex.seconds ? `${ex.sets} × ${ex.seconds}s` : `${ex.sets} × ${ex.reps} reps`;
}

export function formatRest(seconds) {
  return seconds > 0 ? `Rest ${seconds}s` : 'No rest';
}