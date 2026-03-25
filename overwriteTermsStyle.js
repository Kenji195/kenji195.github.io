const el = document.getElementById("termsList");
const termsToBold = ["Agreement", "Client", "Work", "Artist"];

const regex = new RegExp(`\\b(${termsToBold.join("|")})\\b`, "g");

el.innerHTML = el.innerHTML.replace(
  regex,
  '<span class="bolderText">$1</span>',
);
