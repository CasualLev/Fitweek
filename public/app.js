import { getWeek, getTodayName, formatVolume, formatRest } from '/src/plan.js';

const weekEl = document.getElementById('week');
const today = getTodayName();

function dayCard(day) {
  const card = document.createElement('article');
  card.className = day.isRest ? 'day-card rest' : 'day-card';
  if(day.day === today) card.classList.add('today');
  card.innerHTML = `
    <header>
      <h2>${day.day}${day.day === today ? ' <span class="today-badge">Today</span>' : ''}</h2>
      <p class="focus">${day.focus}</p>
    </header>
    ${day.isRest
      ? '<p class="rest-note">Recover, take a walk, stretch.</p>'
      : `<ul class="exercises">${day.exercises.map((ex) => `<li>
  <span class="ex-name">${ex.name}</span>
  <span class="ex-meta">${formatVolume(ex)} · ${formatRest(ex.rest)}</span>
  <span class="ex-tip">${ex.tip}</span>
</li>`).join('')}</ul>`}
  `;
  return card;
}

weekEl.replaceChildren(...getWeek().map(dayCard));