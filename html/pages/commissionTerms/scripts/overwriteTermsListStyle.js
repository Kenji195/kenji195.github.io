const el = document.getElementById('terms-section');
const termsToBold = ['Agreement', 'Client', 'Work', 'Artist'];

const regex = new RegExp(`\\b(${termsToBold.join('|')})\\b`, 'g');

el.innerHTML = el.innerHTML.replace(
  regex,
  '<span class="bolderText">$1</span>',
);
