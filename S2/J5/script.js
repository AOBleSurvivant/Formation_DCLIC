// Tableau de blagues en français
const blagues = [
  { question: "Pourquoi les plongeurs plongent-ils toujours en arrière ?", reponse: "Parce que sinon ils tombent dans le bateau." },
  { question: "Quel est le comble pour un électricien ?", reponse: "De ne pas être au courant." },
  { question: "Que dit une imprimante dans l’eau ?", reponse: "J’ai papier." },
  { question: "Pourquoi les squelettes ne se battent jamais entre eux ?", reponse: "Ils n’ont pas le cran." },
  { question: "Pourquoi les poissons détestent l’ordinateur ?", reponse: "À cause de la souris." }
];

// Fonction pour afficher une blague aléatoire
function afficherBlague() {
  const index = Math.floor(Math.random() * blagues.length);
  const blague = blagues[index];
  const jokeContainer = document.getElementById("joke");

  jokeContainer.innerHTML = `
    <p><strong>${blague.question}</strong></p>
    <p>${blague.reponse}</p>
  `;
}

// Événement au clic sur le bouton
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("joke-btn").addEventListener("click", afficherBlague);
});
