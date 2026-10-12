import { getWeek, getTodayName, formatVolume, formatRest } from '/src/plan.js';
import { toggle, dayProgress } from '/src/progress.js';

const weekEl = document.getElementById('week');
const today = getTodayName();
let done = new Set();

function dayCard(day) {
  const card = document.createElement('article');
  card.className = day.isRest ? 'day-card rest' : 'day-card';
  if (day.day === today) card.classList.add('today');
  const p = dayProgress(day.exercises, done);

  card.innerHTML = `
    <header>
      <h2>${day.day}${day.day === today ? ' <span class="today-badge">Today</span>' : ''}</h2>
      <p class="focus">${day.focus}</p>
    </header>
    ${day.isRest
      ? '<p class="rest-note">Recover, take a walk, stretch.</p>'
      : `
        <div class="progress">
          <div class="progress-bar"><span style="width:${p.percent}%"></span></div>
          <p class="progress-text">${p.isComplete ? 'Day complete!' : `${p.completed} of ${p.total} done`}</p>
        </div>
        <ul class="exercises">${day.exercises.map((ex) => `
          <li class="${done.has(ex.id) ? 'done' : ''}">
            <label>
              <input type="checkbox" data-id="${ex.id}" ${done.has(ex.id) ? 'checked' : ''}>
              <span>
                <span class="ex-name">${ex.name}</span>
                <span class="ex-meta">${formatVolume(ex)} · ${formatRest(ex.rest)}</span>
                <span class="ex-tip">${ex.tip}</span>
              </span>
            </label>
          </li>`).join('')}
        </ul>`}
  `;
  return card;
}

function render() {
  weekEl.replaceChildren(...getWeek().map(dayCard));
}

weekEl.addEventListener('change', (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    done = toggle(done, e.target.dataset.id);
    render();
  }
});

render();