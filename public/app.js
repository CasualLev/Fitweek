import { getWeek } from '/src/plan.js';

const weekEl = document.getElementById('week');

function dayCard(day) {
  const card = document.createElement('article');
  card.className = day.isRest ? 'day-card rest' : 'day-card';
  card.innerHTML = `
    <header>
      <h2>${day.day}</h2>
      <p class="focus">${day.focus}</p>
    </header>
    ${day.isRest
      ? '<p class="rest-note">Recover, take a walk, stretch.</p>'
      : `<ul class="exercises">${day.exercises.map((ex) => `<li>${ex.name}</li>`).join('')}</ul>`}
  `;
  return card;
}

weekEl.replaceChildren(...getWeek().map(dayCard));