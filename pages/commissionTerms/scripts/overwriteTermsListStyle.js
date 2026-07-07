const el = document.getElementById('terms-section');
const termsToBold = ['Agreement', 'Client', 'Work', 'Artist'];

const regex = new RegExp(`\\b(${termsToBold.join('|')})\\b`, 'g');

el.innerHTML = el.innerHTML.replace(
  regex,
  '<span class="bolderText">$1</span>',
);

const charel = document.getElementById('character-section');
const charTermsToBold = [
  'Character Displays',
  'Character Display',
  'Characters',
  'Character',
];

const charRegex = new RegExp(`\\b(${charTermsToBold.join('|')})\\b`, 'g');

charel.innerHTML = charel.innerHTML.replace(
  charRegex,
  '<span class="bolderText">$1</span>',
);
