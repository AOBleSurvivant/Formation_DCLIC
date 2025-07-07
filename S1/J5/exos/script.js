let compteur = 0;

const valeur = document.getElementById("valeur");
const btnPlus = document.getElementById("btnPlus");
const btnMoins = document.getElementById("btnMoins");
const btnReset = document.getElementById("btnReset");

function mettreAJourAffichage() {
  valeur.textContent = compteur;
}

btnPlus.addEventListener("click", () => {
  compteur++;
  mettreAJourAffichage();
});

btnMoins.addEventListener("click", () => {
  compteur--;
  mettreAJourAffichage();
});

btnReset.addEventListener("click", () => {
  compteur = 0;
  mettreAJourAffichage();
});
